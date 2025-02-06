import { useRef } from "react";

const MainSection = () => {
  const scrollContainerRef = useRef(null);

  const scrollImages = (direction) => {
    if (scrollContainerRef.current) {
      const imageWidth = scrollContainerRef.current.children[0].offsetWidth; 
      const scrollAmount = direction === "next" ? imageWidth : -imageWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Image  */}

      <div className="overflow-hidden relative h-80 border border-gray-300 rounded-lg p-2 bg-gray-100">
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto"
        >
          <img src="/logo.png" alt="CAD Gurukul" className="w-full flex-shrink-0" />
          <img src="/logo.png" alt="CAD Gurukul" className="w-full flex-shrink-0 mt-4" />
          
        </div>

        {/* Scroll buttons */}
        <button
          onClick={() => scrollImages("prev")}
          className="absolute top-1/2 left-0 transform -translate-y-1/2  bg-gray-300 text-white p-2 rounded-full"
        >
          &#8592;
        </button>
        <button
          onClick={() => scrollImages("next")}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full"
        >
          &#8594;
        </button>
      </div>

      {/* Highlights */}

      <div className="flex flex-col justify-center space-y-4">
        <h2 className="text-2xl font-bold text-black">Highlights</h2>
        <p className="text-gray-700">
          Thanks in large part to modern-day technology, distractions are everywhere, and it's become
          more important than ever to find new ways to sharpen mental focus and enhance our cognitive
          health. Concentration meditation is a practice designed to improve attentiveness, but can also
          contribute to emotional stability and overall wellbeing. Whether you're new to meditation or
          looking to deepen your practice, understanding the nuances of concentration meditation can be
          a step toward achieving a more focused and tranquil mind.
        </p>
      </div>
    </div>
  );
};

export default MainSection;
