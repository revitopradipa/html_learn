"use client";

import { Notebook } from "@/lib/notebook-data";
import { ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";

interface NotebookSidebarProps {
    notebooks: Notebook[];
    activeId: string;
    onSelect: (id: string) => void;
}

export default function NotebookSidebar({
    notebooks,
    activeId,
    onSelect,
}: NotebookSidebarProps) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const activeIndex = notebooks.findIndex((n) => n.id === activeId);

    const sidebarContent = (
        <nav className="flex flex-col gap-1 p-3">
            <div className="px-3 py-2 mb-2">
                <h2 className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold">
                    Daftar Notebook
                </h2>
            </div>
            {notebooks.map((notebook, index) => {
                const isActive = notebook.id === activeId;
                const isCompleted = index < activeIndex;

                return (
                    <button
                        key={notebook.id}
                        onClick={() => {
                            onSelect(notebook.id);
                            setMobileOpen(false);
                        }}
                        className={`flex items-start gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group ${isActive
                                ? "bg-indigo-500/10 border border-indigo-500/20"
                                : "hover:bg-white/[0.04] border border-transparent"
                            }`}
                    >
                        {/* Nomor / indikator */}
                        <div
                            className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${isActive
                                    ? "bg-indigo-500/20 text-indigo-300"
                                    : isCompleted
                                        ? "bg-emerald-500/10 text-emerald-400"
                                        : "bg-white/[0.05] text-gray-500"
                                }`}
                        >
                            {isCompleted ? "✓" : index + 1}
                        </div>

                        {/* Konten */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                                <span className="text-base leading-none">{notebook.icon}</span>
                                <span
                                    className={`text-[13px] font-medium truncate ${isActive ? "text-indigo-200" : "text-gray-300"
                                        }`}
                                >
                                    {notebook.title}
                                </span>
                            </div>
                            <p className="text-[11px] text-gray-500 mt-1 line-clamp-2 leading-snug">
                                {notebook.description}
                            </p>
                        </div>

                        {/* Arrow */}
                        {isActive && (
                            <ChevronRight className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                        )}
                    </button>
                );
            })}

            {/* Progress */}
            <div className="mt-4 mx-3 pt-4 border-t border-white/[0.06]">
                <div className="flex justify-between text-[11px] text-gray-500 mb-2">
                    <span>Progres</span>
                    <span>
                        {activeIndex + 1} / {notebooks.length}
                    </span>
                </div>
                <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                        style={{
                            width: `${((activeIndex + 1) / notebooks.length) * 100}%`,
                        }}
                    />
                </div>
            </div>
        </nav>
    );

    return (
        <>
            {/* Tombol Mobile */}
            <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2.5 rounded-xl bg-[#161b22] border border-white/[0.08] text-gray-400 hover:text-white transition-colors shadow-xl"
            >
                {mobileOpen ? (
                    <X className="w-5 h-5" />
                ) : (
                    <Menu className="w-5 h-5" />
                )}
            </button>

            {/* Mobile Overlay */}
            {mobileOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            {/* Sidebar Desktop */}
            <aside className="hidden lg:block fixed top-0 left-0 h-screen w-72 bg-[#0a0a12]/95 backdrop-blur-xl border-r border-white/[0.06] overflow-y-auto z-30">
                <div className="p-4 border-b border-white/[0.06]">
                    <a
                        href="/"
                        className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                    >
                        ← Kembali ke Beranda
                    </a>
                    <h1 className="text-base font-bold text-white mt-2 flex items-center gap-2">
                        <span className="text-lg">🐘</span>
                        PHP Notebook
                    </h1>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                        Belajar PHP untuk Laravel
                    </p>
                </div>
                {sidebarContent}
            </aside>

            {/* Sidebar Mobile */}
            <aside
                className={`lg:hidden fixed top-0 left-0 h-screen w-72 bg-[#0a0a12] border-r border-white/[0.06] overflow-y-auto z-50 transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="p-4 pt-16 border-b border-white/[0.06]">
                    <a
                        href="/"
                        className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                    >
                        ← Kembali ke Beranda
                    </a>
                    <h1 className="text-base font-bold text-white mt-2 flex items-center gap-2">
                        <span className="text-lg">🐘</span>
                        PHP Notebook
                    </h1>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                        Belajar PHP untuk Laravel
                    </p>
                </div>
                {sidebarContent}
            </aside>
        </>
    );
}
