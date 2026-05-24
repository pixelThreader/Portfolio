import React, { ReactNode } from 'react';

export const Highlight = ({ children }: { children: ReactNode }) => {
  return <span className="brand-gradient font-title ml-2 md:ml-3">{children}</span>;
};

export const SectionTitle = ({ children }: { children: ReactNode }) => {
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

export const SectionContent = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
  return (
    <div className={`w-full px-8 md:px-16 lg:px-[12%] xl:px-[15%] ${className}`}>
      {children}
    </div>
  );
};

export const Section = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
  return (
    <section className={`py-16 md:py-24 w-full relative overflow-hidden ${className}`}>
      <div className="w-full">
        {children}
      </div>
    </section>
  );
};
