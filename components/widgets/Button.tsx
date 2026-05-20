"use client";

import React from 'react';
import NextLink from 'next/link';

/**
 * Intelligent ButtonGroup component that automatically formats its children
 * into a premium asymmetric gradient-bordered group.
 */
export function ButtonGroup({ 
  children, 
  selected, 
  onSelect, 
  gap = "gap-3 sm:gap-[24px]", // Spacing as per design
  className = "" 
}: {
  children: React.ReactNode,
  selected?: string,
  onSelect?: (val: string) => void,
  gap?: string,
  className?: string
}) {
  const validChildren = React.Children.toArray(children).filter(React.isValidElement);
  const count = validChildren.length;

  return (
    <div className={`flex flex-wrap items-center justify-center ${gap} ${className}`}>
      {validChildren.map((child, index) => {
        const isFirst = index === 0;
        const isLast = index === count - 1;
        
        // Dynamic border-radius calculations based on relative position
        const roundedClass = isFirst 
          ? { 
              outer: "rounded-l-[40px] rounded-r-[20px] sm:rounded-l-[40px] sm:rounded-r-[20px]", 
              inner: "rounded-l-[38.5px] rounded-r-[18.5px] sm:rounded-l-[38.5px] sm:rounded-r-[18.5px]" 
            }
          : isLast 
            ? { 
                outer: "rounded-r-[40px] rounded-l-[20px] sm:rounded-r-[40px] sm:rounded-l-[20px]", 
                inner: "rounded-r-[38.5px] rounded-l-[18.5px] sm:rounded-r-[38.5px] sm:rounded-l-[18.5px]" 
              }
            : { 
                outer: "rounded-[20px]", 
                inner: "rounded-[18.5px]" 
              };

        // Determine if this child is active
        const childValue = child.props.value || child.props.children;
        const isActive = selected !== undefined 
          ? (selected === childValue) 
          : !!child.props.active;

        // Custom click handler to notify group selection while preserving child's own onClick
        const handleChildClick = (e: React.MouseEvent) => {
          if (child.props.onClick) {
            child.props.onClick(e);
          }
          if (onSelect && typeof childValue === 'string') {
            onSelect(childValue);
          }
        };

        const activeClass = isActive ? 'premium-btn-active' : 'premium-btn-inactive';

        // Intelligently clone the child to act as the premium outer element
        // while nesting the illuminated borders and background mask
        return React.cloneElement(child as React.ReactElement<any>, {
          key: child.key || `btn-${index}`,
          onClick: handleChildClick,
          className: `${child.props.className || ''} relative block p-[1.5px] transition-all duration-300 hover:scale-[1.03] active:scale-95 group ${roundedClass.outer} ${activeClass}`.trim(),
          children: (
            <>
              {/* Outer Glowing / Illuminated Gradient Border */}
              <span className={`absolute inset-0 bg-gradient-to-br transition-all duration-300 ${
                isActive 
                  ? 'from-white/70 via-transparent to-white/40' 
                  : 'from-white/20 via-transparent to-white/10 group-hover:from-white/35 group-hover:to-white/20'
              } ${roundedClass.outer}`} />
              
              {/* Inner High-Fidelity Mask Container */}
              <span 
                className={`relative flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 font-serif text-[16px] sm:text-[18px] tracking-wide transition-all duration-300 select-none ${roundedClass.inner}`}
                style={{
                  backgroundColor: isActive ? 'rgba(78, 28, 38, 0.95)' : 'rgba(58, 20, 29, 0.65)',
                  color: isActive ? '#ffffff' : '#ffd4dc'
                }}
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

// Custom wrapper button component
export function Button({ children, active, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) {
  return (
    <button type="button" className={className} {...props}>
      {children}
    </button>
  );
}

// Custom simulated router/link component that wraps Next.js Link
export function Link({ children, href = "#", className = "", ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string, active?: boolean }) {
  return (
    <NextLink href={href} className={className} {...props}>
      {children}
    </NextLink>
  );
}
