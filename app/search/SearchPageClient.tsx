"use client";

import React, { useState, useEffect, useRef, useTransition } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, X, ChevronLeft, ChevronRight, CornerDownLeft, Sparkles, History, SearchCheck, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Reuse existing widgets directly
import { ButtonGroup, Button } from "@/components/widgets/Button";
import { BadgeGroup, Badge } from "@/components/widgets/Badge";
import {
  CarouselContent,
  CarouselItem
} from "@/components/widgets/CarouselSection";
import {
  JournalCard,
  JournalCardImage,
  JournalCardContent,
  JournalCardHeader,
  JournalCardTitle,
  JournalCardDescription,
  JournalCardFooter,
  JournalCardMeta,
  JournalCardAction
} from "@/components/widgets/JournalCard";

import { queryMockSearch, SearchResponse, SearchResult } from "@/lib/mockSearchData";

// Helper function to safely parse `<hlgt>` tags into beautiful rose glow inline tags without raw HTML risk
function renderHighlightedText(text: string) {
  if (!text) return "";
  const parts = text.split(/(<\/?hlgt>)/g);
  let isHighlight = false;
  return parts.map((part, index) => {
    if (part === "<hlgt>") {
      isHighlight = true;
      return null;
    }
    if (part === "</hlgt>") {
      isHighlight = false;
      return null;
    }
    if (isHighlight) {
      return (
        <span
          key={index}
          className="px-1 py-0.5 rounded font-bold text-magenta bg-magenta/15 border border-magenta/30 shadow-[0_0_10px_rgba(224,64,251,0.25)] select-all"
        >
          {part}
        </span>
      );
    }
    return part;
  }).filter(Boolean);
}

const POPULAR_SUGGESTIONS = ["agentic", "tailwind", "postgres", "canvas", "performance", "docs"];

export default function SearchPageClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";

  // Component States
  const [searchInput, setSearchInput] = useState(initialQuery);
  const [activeQuery, setActiveQuery] = useState(initialQuery);
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  
  // Transition hooks for smoother data updates
  const [isPending, startTransition] = useTransition();

  const inputRef = useRef<HTMLInputElement>(null);

  // Load search history from localStorage on mount
  useEffect(() => {
    try {
      const history = localStorage.getItem("pt_search_history");
      if (history) {
        const parsed = JSON.parse(history);
        setTimeout(() => {
          setSearchHistory(parsed);
        }, 0);
      }
    } catch (e) {
      console.error("Failed to load search history", e);
    }
  }, []);

  // Save query to history
  const saveToHistory = (queryStr: string) => {
    const trimmed = queryStr.trim();
    if (!trimmed) return;
    setSearchHistory(prev => {
      const filtered = prev.filter(q => q.toLowerCase() !== trimmed.toLowerCase());
      const updated = [trimmed, ...filtered].slice(0, 5); // Keep top 5
      try {
        localStorage.setItem("pt_search_history", JSON.stringify(updated));
      } catch (e) {
        console.error("Failed to save search history", e);
      }
      return updated;
    });
  };

  // Keyboard shortcut: Pressing '/' focuses the search input. Pressing Escape blurs/clears.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Focus on '/' if not in input/textarea
      if (e.key === "/" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Debounced input search to enable instant live results
  useEffect(() => {
    const handler = setTimeout(() => {
      startTransition(() => {
        setActiveQuery(searchInput);
        setCurrentPage(1); // Reset page on query change
        if (searchInput.trim()) {
          saveToHistory(searchInput);
        }
      });
    }, 150); // Snappy 150ms debounce

    return () => clearTimeout(handler);
  }, [searchInput]);

  // Synchronize dynamic URL parameter
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (activeQuery) {
      params.set("q", activeQuery);
    } else {
      params.delete("q");
    }
    router.replace(`/search?${params.toString()}`, { scroll: false });
  }, [activeQuery, router]);

  // Query mock search data engine.
  // 8 items per page - ideal density.
  const pageSize = 8;
  const searchResults: SearchResponse = queryMockSearch(activeQuery, category, currentPage, pageSize);

  // Split this page's 8 results into two buckets:
  // 1. Text items (pages, projects, docs)
  // 2. Carousel items (blogs, journals)
  const textItems = searchResults.data.filter(item => ["page", "project", "docs"].includes(item.type));
  const carouselItems = searchResults.data.filter(item => ["blog", "journal"].includes(item.type));

  // Compute category result counts in real-time for each tab to enrich tab headers
  const getCategoryCount = (catName: string) => {
    return queryMockSearch(activeQuery, catName, 1, 1).overview["total-results"];
  };

  const handleCategoryChange = (val: string) => {
    startTransition(() => {
      setCategory(val);
      setCurrentPage(1);
    });
  };

  const handlePageChange = (newPage: number) => {
    startTransition(() => {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  const handleSuggestionClick = (keyword: string) => {
    setSearchInput(keyword);
    inputRef.current?.focus();
  };

  const clearSearch = () => {
    setSearchInput("");
    setActiveQuery("");
    inputRef.current?.focus();
  };

  const clearHistory = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      localStorage.removeItem("pt_search_history");
      setSearchHistory([]);
    } catch (err) {
      console.error(err);
    }
  };

  // Render helper for single text result item
  const renderTextResult = (result: SearchResult, idx: number) => (
    <div
      key={`text-${idx}`}
      className="w-full pb-8 border-b border-white/5 last:border-b-0 group transition-all duration-300"
    >
      <div className="flex flex-col gap-2.5">
        {/* Header breadcrumb & type metadata */}
        <div className="flex items-center gap-2.5 text-[11px] sm:text-xs text-[#ffd4dc]/50 font-serif select-none">
          <span className="uppercase tracking-wider font-bold text-magenta/90">
            {result.type}
          </span>
          <span>•</span>
          <span>{result.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-title mt-0.5">
          <a
            href={result.href}
            className="hover:text-magenta hover:underline underline-offset-4 decoration-magenta/40 transition-all duration-300"
          >
            {result.title}
          </a>
        </h3>

        {/* Excerpt Snippet with Highlights */}
        <p className="text-sm sm:text-base leading-relaxed text-[#ffd4dc]/80 font-serif max-w-4xl">
          {renderHighlightedText(result["pseudo-content"])}
        </p>

        {/* Bottom Tags */}
        {result.tags && result.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2 select-none">
            {result.tags.map((tg) => (
              <span
                key={tg}
                className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-serif font-bold text-[#ffd4dc]/70 bg-[#4e1c26]/30 border border-white/5 transition-colors hover:text-white hover:bg-[#4e1c26]/60 cursor-default"
              >
                {tg}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const totalResultsCount = searchResults.overview["total-results"];

  return (
    <div className="w-full flex flex-col z-10 relative pb-12">
      
      {/* Decorative Blur Spotlight - Matching App Aesthetics */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[250px] bg-radial-gradient(circle, rgba(188, 19, 254, 0.08) 0%, transparent 70%) blur-3xl pointer-events-none -z-10" />

      {/* BLOCK 1: Padded Upper Page Container (Header, Search input, Tabs, and first 2 text items) */}
      <div className="w-full px-8 md:px-16 lg:px-[12%] xl:px-[15%] pt-12 flex flex-col">
        
        {/* Prominent Section Header */}
        <div className="mb-10 text-center sm:text-left select-none">
          <h1 className="font-title text-[38px] sm:text-[48px] md:text-[56px] font-bold tracking-tight text-white leading-none">
            Search Results<span className="brand-gradient font-bold ml-[2px]">.</span>
          </h1>
          <p className="font-serif text-[#ffd4dc]/70 text-sm sm:text-base mt-3">
            Search across pages, projects, blogs, journals, and docs in the pixelThreader portfolio.
          </p>
        </div>

        {/* Glossy Search Bar */}
        <div className="w-full mb-12 relative z-20">
          <div className="relative group p-[1.5px] rounded-[24px] bg-linear-to-br from-white/15 via-transparent to-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.4)] transition-all duration-500 hover:from-white/25 hover:to-white/15 focus-within:from-white/35 focus-within:to-white/20 focus-within:shadow-[0_20px_40px_rgba(188, 19, 254, 0.15)]">
            <div className="rounded-[22.5px] bg-[#471824]/90 backdrop-blur-xl px-5 py-4 flex items-center gap-3">
              <Search className="w-5 h-5 text-white/50 group-focus-within:text-white transition-colors duration-300 shrink-0" />
              
              <input
                ref={inputRef}
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search anything... (Type '/' to focus)"
                className="flex-1 bg-transparent border-none outline-none font-serif text-white placeholder-white/40 text-base sm:text-lg focus:ring-0 w-full"
              />

              {searchInput && (
                <button
                  onClick={clearSearch}
                  className="p-1 hover:bg-white/10 active:scale-95 text-white/60 hover:text-white rounded-full transition-all shrink-0"
                  title="Clear Search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-md bg-[#5c2331] text-[10px] text-white/50 font-mono border border-white/5 uppercase select-none shrink-0">
                <CornerDownLeft className="w-2.5 h-2.5" /> Enter
              </div>
            </div>
          </div>

          {/* Quick History list */}
          {searchHistory.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 px-3 text-xs text-[#ffd4dc]/60">
              <div className="flex items-center gap-2">
                <History className="w-3.5 h-3.5 text-white/40" />
                <span className="font-serif">Recent:</span>
                <div className="flex flex-wrap gap-1.5">
                  {searchHistory.map((hist, i) => (
                    <button
                      key={i}
                      onClick={() => handleSuggestionClick(hist)}
                      className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 text-white/80 transition-colors border border-white/5 font-serif"
                    >
                      {hist}
                    </button>
                  ))}
                  <button 
                    onClick={clearHistory}
                    className="text-white/40 hover:text-white/80 transition-colors ml-1 font-serif underline underline-offset-2"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Controls and Tabs row */}
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-6 mb-8 select-none">
          <div className="overflow-x-auto no-scrollbar scroll-smooth flex py-1 -my-1 shrink-0">
            <ButtonGroup selected={category} onSelect={handleCategoryChange} size="sm">
              <Button value="all">
                All ({getCategoryCount("all")})
              </Button>
              <Button value="page">
                Pages ({getCategoryCount("page")})
              </Button>
              <Button value="project">
                Projects ({getCategoryCount("project")})
              </Button>
              <Button value="blog">
                Blogs ({getCategoryCount("blog")})
              </Button>
              <Button value="journal">
                Journals ({getCategoryCount("journal")})
              </Button>
              <Button value="docs">
                Docs ({getCategoryCount("docs")})
              </Button>
            </ButtonGroup>
          </div>

          <div className="text-[13px] text-[#ffd4dc]/70 font-serif flex items-center gap-1.5 shrink-0 self-end md:self-auto">
            <SearchCheck className="w-4 h-4 text-white/40" />
            <span>
              {totalResultsCount} results found
            </span>
          </div>
        </div>

        {/* Results Flow Content */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            
            {/* Loading Skeletons */}
            {isPending ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex flex-col gap-6 w-full mb-12"
              >
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className="w-full pb-6 border-b border-white/5 flex flex-col gap-3"
                  >
                    <div className="animate-pulse flex items-center gap-2">
                      <div className="h-4 bg-white/10 rounded-md w-16" />
                      <div className="h-3 bg-white/5 rounded-md w-24" />
                    </div>
                    <div className="animate-pulse h-7 bg-white/10 rounded-md w-2/3" />
                    <div className="animate-pulse h-4 bg-white/5 rounded-md w-full" />
                  </div>
                ))}
              </motion.div>
            ) : searchResults.data.length === 0 ? (
              
              /* Empty State */
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="w-full flex flex-col items-center justify-center text-center py-20 px-6 max-w-lg mx-auto mb-12"
              >
                <div className="w-16 h-16 rounded-full bg-[#4a1a25]/60 flex items-center justify-center border border-white/5 text-white/30 mb-6">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="font-title text-2xl font-bold text-white select-none">No Results Found</h3>
                <p className="font-serif text-[#ffd4dc]/70 text-sm mt-3 leading-relaxed">
                  We couldn&apos;t find matches for <span className="text-[#ffd4dc] font-bold">&quot;{activeQuery}&quot;</span> inside our database. 
                  Try checking the spelling, selecting another category, or trying one of our suggested keywords.
                </p>
                
                <div className="mt-8 w-full">
                  <div className="h-px bg-white/5 w-full mb-6" />
                  <span className="text-[12px] text-white/40 block mb-3 uppercase font-serif">Suggested terms</span>
                  <div className="flex flex-wrap justify-center gap-2">
                    {POPULAR_SUGGESTIONS.map((kw) => (
                      <button
                        key={kw}
                        onClick={() => handleSuggestionClick(kw)}
                        className="px-3.5 py-1.5 rounded-full bg-[#4a1a25]/40 hover:bg-[#6c2838]/80 text-[#ffd4dc] transition-all border border-white/5 text-xs font-serif"
                      >
                        {kw}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              
              /* Results list sequence items 1 and 2 */
              <motion.div
                key="results-top"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="flex flex-col gap-8 w-full"
              >
                {/* 1st Result Item (if exists) */}
                {textItems.length >= 1 && renderTextResult(textItems[0], 0)}

                {/* 2nd Result Item (if exists) */}
                {textItems.length >= 2 && renderTextResult(textItems[1], 1)}

                {/* If there are NO text items and only blogs/journals, show spacer before visual content */}
                {textItems.length === 0 && <div className="h-2" />}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* BLOCK 2: Root-Level Carousel Row (outside of padded layout, matching homepage exactly!) */}
      {!isPending && carouselItems.length > 0 && (
        <div className="w-full relative overflow-hidden py-8 border-y border-white/5 select-none bg-black/5 mt-4">
          {/* Subtitle aligning with standard padding */}
          <div className="px-8 md:px-16 lg:px-[12%] xl:px-[15%] mb-6 select-none flex items-center gap-2">
            <span className="text-[11px] sm:text-xs font-serif uppercase tracking-wider font-bold text-magenta/80 whitespace-nowrap">
              Featured Articles ({carouselItems.length})
            </span>
            <span className="h-px bg-linear-to-r from-magenta/30 via-transparent to-transparent flex-1" />
          </div>

          <CarouselContent>
            {carouselItems.map((item, idx) => (
              <CarouselItem key={idx} className="w-[300px] sm:w-[390px] h-full flex">
                <JournalCard className="w-full h-full">
                  <JournalCardImage />
                  <JournalCardContent>
                    <JournalCardHeader>
                      <JournalCardTitle>{item.title}</JournalCardTitle>
                      {item.readTime && (
                        <BadgeGroup className="shrink-0 pt-1">
                          <Badge>{item.readTime}</Badge>
                        </BadgeGroup>
                      )}
                    </JournalCardHeader>

                    <JournalCardDescription>
                      {renderHighlightedText(item["pseudo-content"])}
                    </JournalCardDescription>

                    <JournalCardFooter>
                      <JournalCardMeta>{item.date} | {item.type}</JournalCardMeta>
                      <a 
                        href={item.href}
                        className="text-[12px] font-bold tracking-[-0.01em] text-[#F0E7E8] transition-opacity hover:opacity-80 font-serif flex items-center gap-1 group/btn"
                      >
                        Read More <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </a>
                    </JournalCardFooter>
                  </JournalCardContent>
                </JournalCard>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      )}

      {/* BLOCK 3: Padded Lower Page Container (text results 3 onwards, and pagination) */}
      <div className="w-full px-8 md:px-16 lg:px-[12%] xl:px-[15%] flex flex-col mt-8">
        
        {!isPending && searchResults.data.length > 0 && (
          <div className="w-full flex flex-col gap-8">
            {/* Render remaining text results (3rd, 4th, 5th, etc.) */}
            {textItems.length > 2 && textItems.slice(2).map((result, idx) => 
              renderTextResult(result, idx + 2)
            )}
          </div>
        )}

        {/* Dynamic Pagination Support */}
        {searchResults.page["total-pages"] > 1 && !isPending && (
          <div className="w-full border-t border-white/5 pb-4 pt-8 flex items-center justify-between select-none">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-xl border border-white/5 bg-[#3a141d]/50 hover:bg-[#3a141d]/80 disabled:opacity-40 disabled:hover:bg-[#3a141d]/50 transition-all font-serif text-xs sm:text-sm text-[#ffd4dc] hover:text-white"
            >
              <ChevronLeft className="w-4 h-4 shrink-0" /> Prev
            </button>

            <span className="font-serif text-xs sm:text-sm text-[#ffd4dc]/80">
              Page <span className="text-white font-bold">{currentPage}</span> of{" "}
              <span className="text-white font-bold">{searchResults.page["total-pages"]}</span>
            </span>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === searchResults.page["total-pages"]}
              className="flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-xl border border-white/5 bg-[#3a141d]/50 hover:bg-[#3a141d]/80 disabled:opacity-40 disabled:hover:bg-[#3a141d]/50 transition-all font-serif text-xs sm:text-sm text-[#ffd4dc] hover:text-white"
            >
              Next <ChevronRight className="w-4 h-4 shrink-0" />
            </button>
          </div>
        )}

      </div>

    </div>
  );
}
