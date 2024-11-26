import React, { useRef, useState, useEffect } from 'react';
import Card from './Card';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const HorizontalScollCard = ({ data = [], heading, trending, media_type }) => {
  const containerRef = useRef();
  const [hidePrev, setHidePrev] = useState(true);
  const [hideNext, setHideNext] = useState(false);

  const checkScrollPosition = () => {
    const container = containerRef.current;
    if (container) {
      setHidePrev(container.scrollLeft === 0);
      setHideNext(container.scrollLeft + container.offsetWidth >= container.scrollWidth);
    }
  };

  const handleNext = () => {
    containerRef.current.scrollLeft += 300;
    setTimeout(checkScrollPosition, 100);
  };

  const handlePrevious = () => {
    containerRef.current.scrollLeft -= 300;
    setTimeout(checkScrollPosition, 100);
  };

  useEffect(() => {
    checkScrollPosition();
    const container = containerRef.current;

    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-xl lg:text-2xl font-bold mb-3 text-white capitalize">{heading}</h2>
      {data.length > 0 ? (
        <div className="relative">
        <div
          ref={containerRef}
          className="custom-scrolbar grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-hidden overflow-x-scroll relative z-10 scroll-smooth transition-all"
        >
          {data.map((item, index) => (
            <Card
              key={item.id + "heading" + index}
              data={item}
              index={index + 1}
              trending={trending}
              media_type={media_type}
            />
          ))}
        </div>

        <div className="absolute top-0 hidden lg:flex justify-between w-full h-full items-center">
          <button
            onClick={handlePrevious}
            disabled={hidePrev}
            className={`p-1 text-black rounded-full -ml-2 z-10 bg-white`}
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={handleNext}
            disabled={hideNext}
            className={`p-1 text-black rounded-full -mr-2 z-10 bg-white`}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
      ): (
        <p>No info</p>
      )}
      
    </div>
  );
};

export default HorizontalScollCard;
