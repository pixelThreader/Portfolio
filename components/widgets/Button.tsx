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
    gap = "gap-1.5 sm:gap-[12px]", // Spacing reduced by 50%
    scaleOnHover = true,
    fullBrightness = false,
    size = "lg",
    className = ""
}: {
    children: React.ReactNode,
    selected?: string,
    onSelect?: (val: string) => void,
    gap?: string,
    scaleOnHover?: boolean,
    fullBrightness?: boolean,
    size?: 'sm' | 'md' | 'lg' | 'xxl',
    className?: string
}) {
    const validChildren = React.Children.toArray(children).filter(React.isValidElement);
    const count = validChildren.length;

    return (
        <div className={`flex flex-wrap items-center justify-center ${gap} ${className}`}>
            {validChildren.map((childNode, index) => {
                const child = childNode as React.ReactElement<{
                    className?: string;
                    children?: React.ReactNode;
                    value?: string;
                    active?: boolean;
                    onClick?: (e: React.MouseEvent) => void;
                }>;
                const isFirst = index === 0;
                const isLast = index === count - 1;

                // Define all style variables for each size variant
                const sizeClasses = {
                    sm: {
                        padding: "px-3.5 py-1.5 sm:px-4.5 sm:py-2",
                        fontSize: "text-[12px] sm:text-[13px]",
                        rounded: count === 1
                            ? { outer: "rounded-[25px]", inner: "rounded-[23.5px]" }
                            : isFirst
                                ? { outer: "rounded-l-[25px] rounded-r-[12.5px] sm:rounded-l-[25px] sm:rounded-r-[12.5px]", inner: "rounded-l-[23.5px] rounded-r-[11px] sm:rounded-l-[23.5px] sm:rounded-r-[11px]" }
                                : isLast
                                    ? { outer: "rounded-r-[25px] rounded-l-[12.5px] sm:rounded-r-[25px] sm:rounded-l-[12.5px]", inner: "rounded-r-[23.5px] rounded-l-[11px] sm:rounded-r-[23.5px] sm:rounded-l-[11px]" }
                                    : { outer: "rounded-[7px]", inner: "rounded-[5.5px]" }
                    },
                    md: {
                        padding: "px-4.5 py-2 sm:px-6 sm:py-2.5",
                        fontSize: "text-[13px] min-[400px]:text-[14px] sm:text-[15px]",
                        rounded: count === 1
                            ? { outer: "rounded-[32px]", inner: "rounded-[30.5px]" }
                            : isFirst
                                ? { outer: "rounded-l-[32px] rounded-r-[16px] sm:rounded-l-[32px] sm:rounded-r-[16px]", inner: "rounded-l-[30.5px] rounded-r-[14.5px] sm:rounded-l-[30.5px] sm:rounded-r-[14.5px]" }
                                : isLast
                                    ? { outer: "rounded-r-[32px] rounded-l-[16px] sm:rounded-r-[32px] sm:rounded-l-[16px]", inner: "rounded-r-[30.5px] rounded-l-[14.5px] sm:rounded-r-[30.5px] sm:rounded-l-[14.5px]" }
                                    : { outer: "rounded-[9px]", inner: "rounded-[7.5px]" }
                    },
                    lg: {
                        padding: "px-5 min-[400px]:px-6 sm:px-8 md:px-10 py-2 min-[400px]:py-2.5 sm:py-3 md:py-4",
                        fontSize: "text-[14px] min-[400px]:text-[15px] sm:text-[16px] md:text-[18px]",
                        rounded: count === 1
                            ? { outer: "rounded-[40px]", inner: "rounded-[38.5px]" }
                            : isFirst
                                ? { outer: "rounded-l-[40px] rounded-r-[20px] sm:rounded-l-[40px] sm:rounded-r-[20px]", inner: "rounded-l-[38.5px] rounded-r-[18.5px] sm:rounded-l-[38.5px] sm:rounded-r-[18.5px]" }
                                : isLast
                                    ? { outer: "rounded-r-[40px] rounded-l-[20px] sm:rounded-r-[40px] sm:rounded-l-[20px]", inner: "rounded-r-[38.5px] rounded-l-[18.5px] sm:rounded-r-[38.5px] sm:rounded-l-[18.5px]" }
                                    : { outer: "rounded-[11px]", inner: "rounded-[9.5px]" }
                    },
                    xxl: {
                        padding: "px-7 min-[400px]:px-8 sm:px-10 md:px-12 py-3 min-[400px]:py-3.5 sm:py-4 md:py-5",
                        fontSize: "text-[16px] min-[400px]:text-[18px] sm:text-[20px] md:text-[22px]",
                        rounded: count === 1
                            ? { outer: "rounded-[50px]", inner: "rounded-[48.5px]" }
                            : isFirst
                                ? { outer: "rounded-l-[50px] rounded-r-[25px] sm:rounded-l-[50px] sm:rounded-r-[25px]", inner: "rounded-l-[48.5px] rounded-r-[23.5px] sm:rounded-l-[48.5px] sm:rounded-r-[23.5px]" }
                                : isLast
                                    ? { outer: "rounded-r-[50px] rounded-l-[25px] sm:rounded-r-[50px] sm:rounded-l-[25px]", inner: "rounded-r-[48.5px] rounded-l-[23.5px] sm:rounded-r-[48.5px] sm:rounded-l-[23.5px]" }
                                    : { outer: "rounded-[14px]", inner: "rounded-[12.5px]" }
                    }
                };

                const config = sizeClasses[size] || sizeClasses.lg;
                const roundedClass = config.rounded;

                // Determine if this child is active
                const childValue = child.props.value || child.props.children;
                const isActive = fullBrightness || (selected !== undefined
                    ? (selected === childValue)
                    : !!child.props.active);

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
                const hoverScaleClass = (scaleOnHover && !fullBrightness) ? 'hover:scale-[1.03] active:scale-95' : '';
                const isFullWidth = child.props.className?.split(/\s+/).includes('w-full');
                const innerWidthClass = isFullWidth ? 'w-full' : '';

                // Intelligently clone the child to act as the premium outer element
                // while nesting the illuminated borders and background mask
                return React.cloneElement(child, {
                    key: child.key || `btn-${index}`,
                    onClick: handleChildClick,
                    className: `${child.props.className || ''} relative block p-[1.5px] transition-all duration-300 ${hoverScaleClass} group ${roundedClass.outer} ${activeClass}`.trim(),
                    children: (
                        <>
                            {/* Outer Glowing / Illuminated Gradient Border */}
                            <span className={`absolute inset-0 bg-linear-to-br transition-all duration-300 ${isActive
                                    ? 'from-white/70 via-transparent to-white/40'
                                    : 'from-white/20 via-transparent to-white/10 group-hover:from-white/35 group-hover:to-white/20'
                                } ${roundedClass.outer}`} />

                            {/* Inner High-Fidelity Mask Container */}
                            <span
                                className={`relative flex items-center justify-center gap-1.5 ${innerWidthClass} ${config.padding} font-serif ${config.fontSize} leading-none tracking-wide transition-all duration-300 select-none ${roundedClass.inner} ${isActive
                                        ? `bg-[#4e1c26]/95 ${fullBrightness ? '' : 'hover:bg-[#4e1c26]/80'} text-white`
                                        : 'bg-[#3a141d]/65 hover:bg-[#3a141d]/85 text-[#ffd4dc] group-hover:text-white'
                                    }`}
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Button({ children, active, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) {
    return (
        <button type="button" className={className} {...props}>
            {children}
        </button>
    );
}

// Custom simulated router/link component that wraps Next.js Link
export function Link({ children, href = "#", className = "", active, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string, active?: boolean }) {
    return (
        <NextLink href={href} className={className} {...props}>
            {children}
        </NextLink>
    );
}
