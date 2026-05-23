"use client";

import React from 'react';

/**
 * Intelligent BadgeGroup component that automatically formats its children
 * into a premium asymmetric gradient-bordered group.
 */
export function BadgeGroup({ 
  children, 
  gap = "gap-1 sm:gap-[8px]", 
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
      {validChildren.map((childNode, index) => {
        const child = childNode as React.ReactElement<{ className?: string; children?: React.ReactNode }>;
        const isFirst = index === 0;
        const isLast = index === count - 1;
        
        // Dynamic border-radius calculations based on relative position
        const roundedClass = isFirst 
          ? { 
              outer: "rounded-l-[30px] rounded-r-[11px]", 
              inner: "rounded-l-[29px] rounded-r-[11px]" 
            }
          : isLast 
            ? { 
                outer: "rounded-r-[30px] rounded-l-[11px]", 
                inner: "rounded-r-[29px] rounded-l-[11px]" 
              }
            : { 
                outer: "rounded-[7px]", 
                inner: "rounded-[7px]" 
              };

        return React.cloneElement(child, {
          key: child.key || `badge-${index}`,
          className: `${child.props.className || ''} relative block p-[1px] group ${roundedClass.outer}`.trim(),
          children: (
            <>
              {/* Outer Gradient Border Layer */}
              <span className={`absolute inset-0 bg-linear-to-br from-white/40 via-transparent to-white/25 ${roundedClass.outer}`} />
              
              {/* Inner Mask Container */}
              <span 
                className={`relative flex w-fit items-center justify-center px-1.5 min-[400px]:px-2 md:px-3 py-0.5 min-[400px]:py-1 md:py-1 font-serif font-bold text-[10px] min-[400px]:text-[11px] md:text-[12px] text-white/90 tracking-wide select-none ${roundedClass.inner}`}
                style={{ backgroundColor: "#411F27" }}
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
