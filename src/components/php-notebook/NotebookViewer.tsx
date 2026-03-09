"use client";

import { Notebook } from "@/lib/notebook-data";
import MarkdownCell from "./MarkdownCell";
import CodeCell from "./CodeCell";
import { BookOpen } from "lucide-react";

interface NotebookViewerProps {
    notebook: Notebook;
}

export default function NotebookViewer({ notebook }: NotebookViewerProps) {
    let codeIndex = 0;

    return (
        <div className="max-w-4xl mx-auto">
            {/* Notebook Header */}
            <div className="mb-8 pb-6 border-b border-white/[0.06]">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center text-2xl">
                        {notebook.icon}
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                            {notebook.title}
                        </h1>
                        <p className="text-gray-400 mt-1.5 text-sm leading-relaxed">
                            {notebook.description}
                        </p>
                        <div className="flex items-center gap-2 mt-3">
                            <BookOpen className="w-3.5 h-3.5 text-gray-500" />
                            <span className="text-xs text-gray-500">
                                {notebook.cells.filter((c) => c.type === "code").length} blok
                                kode interaktif
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cells */}
            <div className="space-y-2">
                {notebook.cells.map((cell, index) => {
                    if (cell.type === "markdown") {
                        return <MarkdownCell key={index} content={cell.content} />;
                    }

                    // Code cell
                    codeIndex++;
                    return (
                        <CodeCell
                            key={index}
                            defaultCode={cell.defaultCode}
                            cellIndex={codeIndex}
                        />
                    );
                })}
            </div>

            {/* Notebook Footer */}
            <div className="mt-12 pt-6 border-t border-white/[0.06] text-center">
                <p className="text-gray-500 text-sm">
                    🎉 Selesai! Lanjutkan ke notebook berikutnya untuk mempelajari konsep
                    baru.
                </p>
            </div>
        </div>
    );
}
