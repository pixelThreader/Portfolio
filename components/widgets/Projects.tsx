"use client";

import React from 'react';
import { ButtonGroup, Link as CustomLink } from '@/components/widgets/Button';

// ─── Icons (exact paths from /components/svgs/) ───────────────────────────────

export const AuthorIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32">
    <path d="M320 254.27c-4.5 51-40.12 80-80.55 80s-67.34-35.82-63.45-80 37.12-80 77.55-80 70.33 36 66.45 80z"/>
    <path d="M319.77 415.77c-28.56 12-47.28 14.5-79.28 14.5-97.2 0-169-78.8-160.49-176s94.31-176 191.51-176C381 78.27 441.19 150 432.73 246c-6.31 71.67-52.11 92.32-76.09 88.07-22.56-4-41.18-24.42-37.74-63.5l8.48-96.25"/>
  </svg>
);

export const CommitIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className} fill="currentColor">
    <path d="M416 160a64 64 0 10-96.27 55.24c-2.29 29.08-20.08 37-75 48.42-17.76 3.68-35.93 7.45-52.71 13.93v-126.2a64 64 0 10-64 0v209.22a64 64 0 1064.42.24c2.39-18 16-24.33 65.26-34.52 27.43-5.67 55.78-11.54 79.78-26.95 29-18.58 44.53-46.78 46.36-83.89A64 64 0 00416 160zM160 64a32 32 0 11-32 32 32 32 0 0132-32zm0 384a32 32 0 1132-32 32 32 0 01-32 32zm192-256a32 32 0 1132-32 32 32 0 01-32 32z"/>
  </svg>
);

export const FeaturesIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className} fill="currentColor">
    <path d="M479.66 268.7l-32-151.81C441.48 83.77 417.68 64 384 64H128c-16.8 0-31 4.69-42.1 13.94s-18.37 22.31-21.58 38.89l-32 151.87A16.65 16.65 0 0032 272v112a64 64 0 0064 64h320a64 64 0 0064-64V272a16.65 16.65 0 00-.34-3.3zm-384-145.4v-.28c3.55-18.43 13.81-27 32.29-27H384c18.61 0 28.87 8.55 32.27 26.91 0 .13.05.26.07.39l26.93 127.88a4 4 0 01-3.92 4.82H320a15.92 15.92 0 00-16 15.82 48 48 0 11-96 0A15.92 15.92 0 00192 256H72.65a4 4 0 01-3.92-4.82z"/>
    <path d="M368 160H144a16 16 0 010-32h224a16 16 0 010 32zM384 224H128a16 16 0 010-32h256a16 16 0 010 32z"/>
  </svg>
);

export const GitHubIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className} fill="currentColor">
    <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/>
  </svg>
);

export const LicenseIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className} fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32">
    <path d="M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z"/>
    <path d="M256 56v120a32 32 0 0032 32h120M176 288h160M176 368h160" strokeLinecap="round"/>
  </svg>
);

export const ShareIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32">
    <circle cx="128" cy="256" r="48"/>
    <circle cx="384" cy="112" r="48"/>
    <circle cx="384" cy="400" r="48"/>
    <path d="M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94"/>
  </svg>
);

// ─── MetaRow helper (internal) ────────────────────────────────────────────────

function MetaRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-3 sm:gap-x-4 items-center">
      {/* Label col */}
      <div className="flex items-center gap-2 sm:gap-3 text-[#8f6974] w-[130px] sm:w-[170px] lg:w-[190px]">
        <span className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 opacity-80 shrink-0">{icon}</span>
        <span
          className="text-[11.5px] sm:text-[13px] lg:text-[14px] tracking-[-0.02em] whitespace-nowrap"
          style={{ fontFamily: 'Merriweather, serif' }}
        >
          {label}
        </span>
      </div>
      {/* Value col */}
      <div
        className="text-[12px] sm:text-[14.5px] lg:text-[16px] text-white/90 leading-snug min-w-0"
        style={{ fontFamily: 'Merriweather, serif' }}
      >
        {children}
      </div>
    </div>
  );
}

// ─── Public components ────────────────────────────────────────────────────────

export function Projects({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col gap-6 sm:gap-20 w-full ${className}`}>
      {children}
    </div>
  );
}

export function Project({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const childrenArray = React.Children.toArray(children);
  const detailChild = childrenArray[0];
  const logoChild = childrenArray[1];

  return (
    <div className="flex flex-col lg:flex-row lg:even:flex-row-reverse items-center gap-8 lg:gap-14 w-full">
      {/* LHS - Card wrapper containing ProjectDetail */}
      <div className={`w-full ${logoChild ? 'lg:flex-[0_0_58%]' : ''}`}>
        <div className={`relative w-full rounded-[24px] sm:rounded-[34px] border border-white/10 bg-[#411F27] overflow-hidden ${className}`}>
          {/* Gradient border glow */}
          <div className="pointer-events-none absolute inset-0 rounded-[inherit]">
            <div className="absolute inset-0 rounded-[inherit] bg-linear-to-br from-white/30 via-transparent via-40% to-white/12 opacity-90" />
            <div
              className="absolute inset-px rounded-[inherit]"
              style={{ backgroundColor: '#411F27', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)' }}
            />
          </div>
          {/* Content */}
          <div className="relative z-10">
            {detailChild || children}
          </div>
        </div>
      </div>

      {/* RHS - Centered preview logo glow (hidden on mobile/tablet) */}
      {logoChild && (
        <div className="hidden lg:flex flex-1 items-center justify-center w-full">
          {logoChild}
        </div>
      )}
    </div>
  );
}

export function ProjectDetail({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`px-4 sm:px-8 lg:px-10 py-5 sm:py-8 ${className}`} style={{ fontFamily: 'Merriweather, serif' }}>
      {children}
    </div>
  );
}

export function ProjectDetailLogo({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`shrink-0 h-8 w-8 sm:h-12 sm:w-12 rounded-lg sm:rounded-2xl flex items-center justify-center overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export function ProjectTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`text-[17px] sm:text-[22px] lg:text-[30px] leading-none tracking-[-0.03em] text-white ${className}`}
      style={{ fontFamily: 'Merriweather, serif' }}
    >
      {children}
    </h2>
  );
}

// Header row: Logo + Title + GitHub + Share
// We wrap logo+title+actions in a flex row inside ProjectDetail.
// The user's DOM is:  <ProjectDetailLogo> <ProjectTitle> <ProjectGitHubLink>
// We need the header to be a flex row. We'll use a special header wrapper.
export function ProjectHeader({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-4 mb-3.5 sm:mb-6 ${className}`}>
      {children}
    </div>
  );
}

export function ProjectGitHubLink({ href, className = "" }: { href: string; className?: string }) {
  return (
    <div className={`ml-auto flex items-center gap-3.5 sm:gap-5 ${className}`}>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="opacity-75 hover:opacity-100 transition-opacity"
        aria-label="GitHub"
      >
        <GitHubIcon className="w-4.5 h-4.5 sm:w-5 h-5 text-white" />
      </a>
      <button className="opacity-55 hover:opacity-90 transition-opacity" aria-label="Share">
        <ShareIcon className="w-4.5 h-4.5 sm:w-5 h-5 text-white" />
      </button>
    </div>
  );
}

export function ProjectDesc({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={`text-[12.5px] sm:text-[14.5px] lg:text-[16px] leading-normal text-[#b48a96] tracking-[-0.01em] mb-4.5 sm:mb-7 max-w-3xl ${className}`}
      style={{ fontFamily: 'Merriweather, serif' }}
    >
      {children}
    </p>
  );
}

export function ProjectAuthors({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const childrenArray = React.Children.toArray(children);
  const hasMore = childrenArray.length > 1;

  return (
    <MetaRow icon={<AuthorIcon className="w-full h-full text-[#8f6974]" />} label="Original Author(s):">
      <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 ${className}`}>
        {childrenArray.map((child, idx) => (
          <span key={idx} className={idx > 0 ? "hidden sm:inline-block" : "inline-block"}>
            {child}
          </span>
        ))}
        {hasMore && (
          <span className="text-[11.5px] text-white/50 sm:hidden select-none">
            + others
          </span>
        )}
      </div>
    </MetaRow>
  );
}

export function ProjectAuthor({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`group relative inline-block ${className}`}>
      {children}
    </span>
  );
}

export function AuthorName({ children, href, className = "" }: { children: React.ReactNode; href?: string; className?: string }) {
  const cls = `relative z-10 text-[11.5px] sm:text-[13.5px] lg:text-[15px] text-white underline underline-offset-[5px] decoration-[1.5px] decoration-white/70 transition-colors duration-300 hover:text-[#f3d6df] hover:decoration-[#f3d6df] ${className}`;
  if (href) {
    return <a href={href} target="_blank" rel="noreferrer" className={cls}>{children}</a>;
  }
  return <span className={cls}>{children}</span>;
}

export function AuthorGitHubLink({ href, className = "" }: { href: string; className?: string }) {
  // Invisible overlay for clickability; AuthorName handles the visual underline
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`absolute inset-0 z-20 ${className}`} tabIndex={-1} aria-hidden>
      <span className="sr-only">GitHub</span>
    </a>
  );
}

export function LastCommit({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <MetaRow icon={<CommitIcon className="w-full h-full text-[#8f6974]" />} label="Last Update:">
      <span className={`truncate block ${className}`}>{children}</span>
    </MetaRow>
  );
}

export function LastCommitDate({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={className}>{children}</span>;
}

export function LastCommitMessage({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`text-white/60 hidden sm:inline ${className}`}>{children ? ` (${children})` : ''}</span>;
}

export function ProjectLicense({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <MetaRow icon={<LicenseIcon className="w-full h-full text-[#8f6974]" />} label="License:">
      <span className={className}>{children}</span>
    </MetaRow>
  );
}

export function ProjectFeatures({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <MetaRow icon={<FeaturesIcon className="w-full h-full text-[#8f6974]" />} label="Features:">
      <span className={`truncate block ${className}`}>{children}</span>
    </MetaRow>
  );
}

export function ProjectFeature({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`after:content-[',_'] last:after:content-[''] ${className}`}>
      {children}
    </span>
  );
}

export function ProjectUrl({ href, className = "" }: { href: string; className?: string }) {
  return (
    <div className={`mt-3 sm:mt-8 flex justify-end ${className}`}>
      <ButtonGroup gap="gap-[3px]" scaleOnHover={false} size="sm">
        <CustomLink href={href} target="_blank" rel="noreferrer" active>
          Learn More
        </CustomLink>
      </ButtonGroup>
    </div>
  );
}

// ProjectLogo is intentionally outside <Project> in the consumer's JSX.
// It renders the RHS image with an automatic progressive linear blur glow in the Y-axis.
// Defaults: topBlur = 30px, middleBlur = 65px, bottomBlur = 100px, blurOpacity = 0.85.
export function ProjectLogo({
  children,
  className = "",
  topBlur = 30,
  middleBlur = 65,
  bottomBlur = 100,
  blurOpacity = 0.85,
}: {
  children: React.ReactNode;
  className?: string;
  topBlur?: number;
  middleBlur?: number;
  bottomBlur?: number;
  blurOpacity?: number;
}) {
  const validChildren = React.Children.toArray(children).filter(React.isValidElement);
  const child = validChildren[0] as React.ReactElement<React.ImgHTMLAttributes<HTMLImageElement>>;

  const totalLayers = 9; // Odd number allows a perfect center middle layer (index 4)
  const layers = Array.from({ length: totalLayers }).map((_, i) => {
    // Piecewise quadratic for top-half (stays flat near top), linear for bottom-half
    let blurVal = 0;
    if (i <= 4) {
      blurVal = topBlur + Math.pow(i / 4, 2) * (middleBlur - topBlur);
    } else {
      blurVal = middleBlur + ((i - 4) / 4) * (bottomBlur - middleBlur);
    }

    // Completely hide Layer 0 when topBlur is 0 to avoid sharp outlines;
    // Keep full blurOpacity for all other layers so the glow stays fully vibrant and strong!
    const layerOpacity = (i === 0 && topBlur === 0) ? 0 : blurOpacity;

    const currPct = (i / (totalLayers - 1)) * 100;
    
    // Tighter horizontal mask bands (7% instead of 12.5%) prevents vertical bleed
    const spanPct = 7; 
    const prevPct = i > 0 ? currPct - spanPct : null;
    const nextPct = i < totalLayers - 1 ? currPct + spanPct : null;

    const stops = [];
    if (prevPct !== null) {
      stops.push(`rgba(0,0,0,0) ${prevPct.toFixed(1)}%`);
    } else {
      stops.push(`rgba(0,0,0,${layerOpacity}) 0%`);
    }

    stops.push(`rgba(0,0,0,${layerOpacity}) ${currPct.toFixed(1)}%`);

    if (nextPct !== null) {
      stops.push(`rgba(0,0,0,0) ${nextPct.toFixed(1)}%`);
    } else {
      stops.push(`rgba(0,0,0,${layerOpacity}) 100%`);
    }

    const mask = `linear-gradient(to bottom, ${stops.join(', ')})`;

    return {
      blur: `${blurVal.toFixed(1)}px`,
      mask,
    };
  });

  const overflow = 120; // Expanded margin to completely contain the blur without clipping
  const extraSize = 45; // Ghost image is exactly 45px larger than the main image
  const paddingVal = overflow - (extraSize / 2); // 97.5px padding to scale content to exactly main + 45px

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative flex items-center justify-center w-full overflow-visible">
        {/* Auto ghost linear progressive blur layers — exactly 45px larger, padded to prevent box clipping */}
        {layers.map((layer, i) => (
          <div
            key={i}
            className="absolute pointer-events-none z-0"
            style={{
              inset: `-${overflow}px`,
              padding: `${paddingVal}px`,
              filter: `blur(${layer.blur})`,
              maskImage: layer.mask,
              WebkitMaskImage: layer.mask,
            }}
          >
            {React.cloneElement(child, { alt: '', 'aria-hidden': true, className: 'w-full h-full object-contain' } as React.HTMLAttributes<HTMLElement>)}
          </div>
        ))}
        {/* Main image — sharp, on top */}
        {React.cloneElement(child, { className: 'relative z-10 w-full h-auto object-contain' } as React.HTMLAttributes<HTMLElement>)}
      </div>
    </div>
  );
}

// ─── Metadata section wrapper (groups all MetaRow items with gap) ─────────────
export function ProjectMeta({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col gap-3 sm:gap-4 ${className}`}>
      {children}
    </div>
  );
}