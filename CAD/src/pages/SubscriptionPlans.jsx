import React, { useState } from "react";

const subscriptionPlans = [
  { title: "Basic Plan", price: 1 },
  { title: "Premium Plan", price: 2 },
];

const SubscriptionPlans = () => {
  const [loading, setLoading] = useState(false); 

  const handlePayment = async (plan) => {
    setLoading(true); 
    try {
      const response = await fetch("http://localhost:3001/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: plan.price * 100 }), 
      });

      const order = await response.json();

      const options = {
        key: import.meta.env.VITE_RAZORPAY_ID, 
        amount: order.amount,
        currency: "INR",
        name: "CAD Gurukul",
        description: `Subscription for ${plan.title}`,
        order_id: order.id,
        handler: async (response) => {
          await fetch("http://localhost:3001/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          alert("Payment successful!");
        },
        prefill: { name: "John Doe", email: "john@example.com", contact: "9999999999" },
        theme: { color: "#3399cc" },
      };

      const rzpay = new window.Razorpay(options);
      rzpay.open();
    } catch (err) {
      alert("Error creating order: " + err.message);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Choose Your Plan</h2>
      <div className="flex justify-center gap-6">
        {subscriptionPlans.map((plan, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
            <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
            <p className="text-xl font-bold text-blue-500 mb-4">{plan.price} Rs/month</p>
            <button
              onClick={() => handlePayment(plan)}
              disabled={loading} 
              className={`bg-blue-500 text-white py-2 px-4 rounded-full w-full hover:bg-blue-600 ${loading ? 'cursor-not-allowed' : ''}`}
            >
              {loading ? "Processing..." : "Subscribe Now"} 
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
