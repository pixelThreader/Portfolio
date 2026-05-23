import React from "react";

export function JournalCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`relative w-full max-w-[390px] cursor-pointer rounded-[30px] bg-gradient-to-br from-[#A88A96]/75 via-[#714853]/35 to-[#B296A2]/75 p-[1.5px] ${className}`}>
      <div className="rounded-[28px] bg-[#4A1D28]/95 p-3 backdrop-blur-xl flex flex-col h-full">
        {children}
      </div>
    </div>
  );
}

export function JournalCardImage({ children, className = "" }: { children?: React.ReactNode, className?: string }) {
  return (
    <div className={`relative h-[285px] w-full shrink-0 overflow-hidden rounded-[22px] bg-gradient-to-br from-[#004B72] via-[#001F5C] to-[#34114A] ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,0,119,0.18),transparent_40%)] pointer-events-none" />
      {children}
    </div>
  );
}

export function JournalCardContent({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`px-2 pb-2 pt-4 flex flex-col flex-1 ${className}`}>
      {children}
    </div>
  );
}

export function JournalCardHeader({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`flex items-start justify-between gap-4 ${className}`}>
      {children}
    </div>
  );
}

export function JournalCardTitle({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <h2 className={`text-[22px] font-bold leading-[1.1] tracking-[-0.02em] text-[#F4EEEA] font-title line-clamp-2 ${className}`}>
      {children}
    </h2>
  );
}

export function JournalCardDescription({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <p className={`mt-3 text-[13px] leading-[1.4] tracking-[-0.01em] text-[#BDA8AE] font-serif line-clamp-2 ${className}`}>
      {children}
    </p>
  );
}

export function JournalCardFooter({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`mt-auto pt-7 flex items-center justify-between gap-4 ${className}`}>
      {children}
    </div>
  );
}

export function JournalCardMeta({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`text-[11px] tracking-[-0.01em] text-[#D7CCD0] font-serif ${className}`}>
      {children}
    </div>
  );
}

export function JournalCardAction({ children = "Read More...", className = "" }: { children?: React.ReactNode, className?: string }) {
  return (
    <button className={`text-[12px] font-bold tracking-[-0.01em] text-[#F0E7E8] transition-opacity hover:opacity-80 font-serif ${className}`}>
      {children}
    </button>
  );
}
