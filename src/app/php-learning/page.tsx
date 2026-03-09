"use client";

import { useState } from "react";
import { notebooks } from "@/lib/notebook-data";
import NotebookViewer from "@/components/php-notebook/NotebookViewer";
import NotebookSidebar from "@/components/php-notebook/NotebookSidebar";

export default function PhpLearningPage() {
    const [activeNotebookId, setActiveNotebookId] = useState(notebooks[0].id);

    const activeNotebook = notebooks.find((n) => n.id === activeNotebookId)!;

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-gradient-to-b from-indigo-600/5 via-purple-600/3 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-to-t from-violet-600/5 to-transparent rounded-full blur-3xl" />
            </div>

            {/* Subtle grid */}
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.015]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                }}
            />

            {/* Sidebar */}
            <NotebookSidebar
                notebooks={notebooks}
                activeId={activeNotebookId}
                onSelect={setActiveNotebookId}
            />

            {/* Main Content Area */}
            <main className="relative z-10 lg:ml-72">
                <div className="px-4 sm:px-6 lg:px-10 py-8 md:py-12 pl-16 lg:pl-10">
                    <NotebookViewer
                        key={activeNotebookId}
                        notebook={activeNotebook}
                    />
                </div>
            </main>
        </div>
    );
}
