'use client';

import React, { ReactNode, useRef, useState, useEffect, createContext, useContext } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Highlight = ({ children }: { children: ReactNode }) => {
  return <span className="brand-gradient font-title ml-2 md:ml-3">{children}</span>;
};

export const CarouselSectionTitle = ({ 
  children,
  size = "lg",
  position = "center"
}: { 
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  position?: "left" | "right" | "center";
}) => {
  // Size-specific classes
  const sizeClasses = {
    sm: {
      text: "text-xl md:text-2xl lg:text-3xl pb-1.5 pt-0.5",
      line: "max-w-[140px] md:max-w-[160px] h-0.5 md:h-1 mt-2.5"
    },
    md: {
      text: "text-2xl md:text-3xl lg:text-4xl pb-2 pt-1",
      line: "max-w-[200px] md:max-w-[240px] h-[3px] md:h-[4px] mt-3"
    },
    lg: {
      text: "text-3xl md:text-4xl lg:text-5xl pb-3 pt-1",
      line: "max-w-[280px] md:max-w-[340px] h-1 md:h-1.5 mt-4"
    }
  }[size];

  // Position-specific classes
  const containerPositionClasses = {
    center: "items-center justify-center text-center",
    left: "items-start justify-start text-left px-8 md:px-16 lg:px-[12%] xl:px-[15%]",
    right: "items-end justify-end text-right px-8 md:px-16 lg:px-[12%] xl:px-[15%]"
  }[position];

  const headerPositionClasses = {
    center: "justify-center",
    left: "justify-start",
    right: "justify-end"
  }[position];

  const linePositionClasses = {
    center: "mx-auto",
    left: "ml-0",
    right: "mr-0"
  }[position];

  return (
    <div className={`flex flex-col mb-10 w-full ${containerPositionClasses}`}>
      <h2 className={`font-title text-white flex items-baseline tracking-tighter leading-normal ${sizeClasses.text} ${headerPositionClasses}`}>
        {children}
        <span className="text-white">.</span>
      </h2>
      
      {/* The bottom line: 80% white, 10% gradient, 5% gradient, 5% gradient */}
      <div className={`flex w-full items-center gap-2 rounded-full ${sizeClasses.line} ${linePositionClasses}`}>
        <div className="h-full bg-white rounded-full w-[80%]" />
        <div className="h-full bg-[linear-gradient(to_right,#D0197E_23%,#D606C8_62%,#A94365_100%)] rounded-full w-[10%]" />
        <div className="h-full bg-[linear-gradient(to_right,#D0197E_23%,#D606C8_62%,#A94365_100%)] rounded-full w-[5%]" />
        <div className="h-full bg-[linear-gradient(to_right,#D0197E_23%,#D606C8_62%,#A94365_100%)] rounded-full w-[5%]" />
      </div>
    </div>
  );
};


const CarouselContext = createContext<{ snap: boolean }>({ snap: true });

export const CarouselContent = ({ children, snap = true }: { children: ReactNode; snap?: boolean }) => {
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
    <CarouselContext.Provider value={{ snap }}>
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
          className={`w-full overflow-x-auto no-scrollbar pb-8 scroll-smooth ${snap ? 'snap-x snap-mandatory' : ''}`}
        >
          <div className="flex items-stretch gap-6 pl-8 md:pl-16 lg:pl-[12%] xl:pl-[15%] pr-8 md:pr-16 lg:pr-[12%] xl:pr-[15%] w-max">
            {children}
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const CarouselItem = ({ children, className = "w-[280px] md:w-[320px] lg:w-[400px]", snap: propSnap }: { children: ReactNode, className?: string, snap?: boolean }) => {
  const context = useContext(CarouselContext);
  const snap = propSnap !== undefined ? propSnap : context.snap;
  return (
    <div className={`flex-none h-full ${snap ? 'snap-center' : ''} ${className}`}>
      {children}
    </div>
  );
};

export const CarouselSection = ({ children, gap }: { children: ReactNode; gap?: string }) => {
  const paddingClass = gap ? gap : "py-16 md:py-24";
  return (
    <section className={`${paddingClass} w-full relative overflow-hidden`}>
      <div className="w-full">
        {children}
      </div>
    </section>
  );
};