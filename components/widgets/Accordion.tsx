"use client";

export interface AccordionItem {
    degree: string;
    institute: string;
    specialization: string;
    duration: string;
    subjects?: string[];
    projects?: string[];
}

export interface AccordionProps {
    data: AccordionItem[];
    className?: string;
}
export function Accordion({ data, className = "" }: AccordionProps) {
    if (!data || data.length === 0) return null;

    return (
        <div className={`w-full flex flex-col ${className}`}>
            {data.map((item, index) => {
                const isLast = index === data.length - 1;
                return (
                    <div
                        key={index}
                        className="w-full flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 items-start text-left pl-6 md:pl-8 relative pb-12 last:pb-0"
                    >
                        {/* Dot column & Line connector */}
                        <div className="absolute left-[-16px] top-0 bottom-0 flex flex-col items-center z-10 w-8">
                            {/* Upper connecting line */}
                            {index > 0 ? (
                                <div className="w-[2px] h-3 shrink-0 bg-linear-to-b from-[#a88b97]/30 to-[#a88b97]/30" />
                            ) : (
                                <div className="w-[2px] h-3 shrink-0 bg-transparent" />
                            )}

                            {/* Static Glossy Timeline Dot */}
                            <div className="relative w-5 h-5 rounded-full bg-linear-to-br from-[#a88b97] via-[#6a4754]/40 to-[#a88b97] p-[1.5px] flex items-center justify-center z-10 shrink-0">
                                <div className="w-full h-full rounded-full bg-[#471824] flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-[#ffd4dc]" />
                                </div>
                            </div>

                            {/* Lower connecting line */}
                            {!isLast ? (
                                <div className="w-[2px] grow bg-linear-to-b from-[#a88b97]/30 via-white/10 to-[#a88b97]/30" />
                            ) : (
                                <div className="w-[2px] grow bg-transparent" />
                            )}
                        </div>

                        {/* Year & Period Column */}
                        <div className="md:col-span-3 flex flex-col pt-1">
                            <span className="font-title text-[20px] md:text-[22px] font-bold text-white tracking-tight leading-none">
                                {item.duration}
                            </span>
                            <span className="text-[10px] font-title uppercase tracking-wider text-[#ffd4dc]/40 font-bold mt-2">
                                Enrollment Period
                            </span>
                        </div>

                        {/* Details Column */}
                        <div className="md:col-span-9 flex flex-col gap-4">
                            <div>
                                <h4 className="font-title text-[22px] sm:text-[26px] text-white font-extrabold leading-snug tracking-tight">
                                    {item.degree}
                                </h4>
                                <h5 className="font-serif text-[#ffd4dc] text-[16px] sm:text-[18px] font-medium mt-1 leading-normal italic">
                                    {item.institute}
                                </h5>
                            </div>

                            {/* Specialization */}
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-title uppercase tracking-wider text-[#ffd4dc]/40 font-bold">
                                    Specialization / Focus
                                </span>
                                <p className="font-serif text-white/90 text-[14px] sm:text-[15px] leading-relaxed">
                                    {item.specialization}
                                </p>
                            </div>

                            {/* Notable Focus & Electives */}
                            {item.subjects && item.subjects.length > 0 && (
                                <div className="flex flex-col gap-2 mt-1">
                                    <span className="text-[10px] font-title uppercase tracking-wider text-[#ffd4dc]/40 font-bold">
                                        Notable Electives
                                    </span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {item.subjects.map((subj, sIdx) => (
                                            <span
                                                key={sIdx}
                                                className="px-2.5 py-0.5 rounded-full text-[11px] bg-white/5 text-[#ffd4dc]/80 border border-white/5 font-normal select-none"
                                            >
                                                {subj}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Key Projects */}
                            {item.projects && item.projects.length > 0 && (
                                <div className="flex flex-col gap-2 mt-2">
                                    <span className="text-[10px] font-title uppercase tracking-wider text-[#ffd4dc]/40 font-bold">
                                        Key Projects & Achievements
                                    </span>
                                    <ul className="space-y-3">
                                        {item.projects.map((proj, pIdx) => (
                                            <li key={pIdx} className="flex items-start gap-2.5 text-left">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#ffd4dc]/30 mt-2 shrink-0" />
                                                <p className="font-serif text-[#ffd4dc]/75 text-[14px] sm:text-[15px] leading-relaxed">
                                                    {proj}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Accordion;
