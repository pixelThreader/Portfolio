'use client';

import React, { ReactNode, useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Highlight = ({ children }: { children: ReactNode }) => {
  return <span className="brand-gradient font-title ml-2 md:ml-3">{children}</span>;
};

export const CarouselSectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-12 w-full">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-title text-white flex items-baseline justify-center tracking-tighter pb-3 pt-1 leading-normal">
        {children}
        <span className="text-white">.</span>
      </h2>
      
      {/* The bottom line: 80% white, 10% gradient, 5% gradient, 5% gradient */}
      <div className="mt-4 flex w-full max-w-[280px] md:max-w-[340px] mx-auto items-center gap-2 h-1 md:h-1.5">
        <div className="h-full bg-white rounded-full w-[80%]" />
        <div className="h-full bg-[linear-gradient(to_right,#D0197E_23%,#D606C8_62%,#A94365_100%)] rounded-full w-[10%]" />
        <div className="h-full bg-[linear-gradient(to_right,#D0197E_23%,#D606C8_62%,#A94365_100%)] rounded-full w-[5%]" />
        <div className="h-full bg-[linear-gradient(to_right,#D0197E_23%,#D606C8_62%,#A94365_100%)] rounded-full w-[5%]" />
      </div>
    </div>
  );
};

export const CarouselContent = ({ children }: { children: ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const checkScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    
    // We only show navigation if the content is wider than container width
    const hasOverflow = scrollWidth > clientWidth;

    if (hasOverflow) {
      // Show left button if we have scrolled to the right
      setShowLeft(scrollLeft > 10);
      // Show right button if we haven't reached the absolute end
      setShowRight(scrollLeft + clientWidth < scrollWidth - 10);
    } else {
      setShowLeft(false);
      setShowRight(false);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Run layout checks on mount
    checkScroll();

    const handleScroll = () => {
      checkScroll();
    };

    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkScroll);

    // Dynamic Mutation Observer to recalculate overflow if children/data changes
    const observer = new MutationObserver(checkScroll);
    observer.observe(container, { childList: true, subtree: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScroll);
      observer.disconnect();
    };
  }, []);

  const handleScrollClick = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.75; // Scroll 75% of view area
    const target = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: target,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative w-full group/carousel">
      {/* Scroll Left Button */}
      <button
        onClick={() => handleScrollClick('left')}
        className={`absolute left-4 md:left-[8%] top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-white hover:bg-black/60 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl pointer-events-auto cursor-pointer ${
          showLeft ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
        }`}
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Scroll Right Button */}
      <button
        onClick={() => handleScrollClick('right')}
        className={`absolute right-4 md:right-[8%] top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-white hover:bg-black/60 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl pointer-events-auto cursor-pointer ${
          showRight ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
        }`}
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Scrollable Container */}
      <div 
        ref={containerRef}
        className="w-full overflow-x-auto no-scrollbar pb-8 snap-x snap-mandatory scroll-smooth"
      >
        <div className="flex items-stretch gap-6 pl-8 md:pl-16 lg:pl-[12%] xl:pl-[15%] pr-8 md:pr-16 lg:pr-[12%] xl:pr-[15%] w-max">
          {children}
        </div>
      </div>
    </div>
  );
};

export const CarouselItem = ({ children, className = "w-[280px] md:w-[320px] lg:w-[400px]" }: { children: ReactNode, className?: string }) => {
  return (
    <div className={`flex-none snap-center h-full ${className}`}>
      {children}
    </div>
  );
};

export const CarouselSection = ({ children }: { children: ReactNode }) => {
  return (
    <section className="py-16 md:py-24 w-full relative overflow-hidden">
      <div className="w-full">
        {children}
      </div>
    </section>
  );
};