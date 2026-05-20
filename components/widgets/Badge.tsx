"use client";

import React from 'react';

/**
 * Intelligent BadgeGroup component that automatically formats its children
 * into a premium asymmetric gradient-bordered group.
 */
export function BadgeGroup({ 
  children, 
  gap = "gap-2 sm:gap-[16px]", 
  className = "" 
}: {
  children: React.ReactNode,
  gap?: string,
  className?: string
}) {
  const validChildren = React.Children.toArray(children).filter(React.isValidElement);
  const count = validChildren.length;

  return (
    <div className={`flex flex-wrap items-center ${gap} ${className}`}>
      {validChildren.map((child, index) => {
        const isFirst = index === 0;
        const isLast = index === count - 1;
        
        // Dynamic border-radius calculations based on relative position
        const roundedClass = isFirst 
          ? { 
              outer: "rounded-l-[30px] rounded-r-[12px]", 
              inner: "rounded-l-[28.5px] rounded-r-[10.5px]" 
            }
          : isLast 
            ? { 
                outer: "rounded-r-[30px] rounded-l-[12px]", 
                inner: "rounded-r-[28.5px] rounded-l-[10.5px]" 
              }
            : { 
                outer: "rounded-[12px]", 
                inner: "rounded-[10.5px]" 
              };

        return React.cloneElement(child as React.ReactElement<any>, {
          key: child.key || `badge-${index}`,
          className: `${child.props.className || ''} relative block p-[1px] group ${roundedClass.outer}`.trim(),
          children: (
            <>
              {/* Outer Gradient Border Layer */}
              <span className={`absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 ${roundedClass.outer}`} />
              
              {/* Inner Mask Container (using bg-background to match the page, making it look transparent inside) */}
              <span 
                className={`relative flex items-center justify-center px-4 sm:px-6 py-1.5 font-serif italic text-[14px] text-white/90 tracking-wide select-none bg-background ${roundedClass.inner}`}
              >
                {child.props.children}
              </span>
            </>
          )
        });
      })}
    </div>
  );
}

// Custom wrapper badge component
export function Badge({ children, className = "", ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
}
