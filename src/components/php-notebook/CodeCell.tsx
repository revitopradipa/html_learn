"use client";

import { useState, useCallback } from "react";
import Editor from "@monaco-editor/react";
import { Play, RotateCcw, Loader2, Terminal, Copy, Check } from "lucide-react";

interface CodeCellProps {
    defaultCode: string;
    cellIndex: number;
}

export default function CodeCell({ defaultCode, cellIndex }: CodeCellProps) {
    const [code, setCode] = useState(defaultCode);
    const [output, setOutput] = useState<string | null>(null);
    const [isError, setIsError] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [hasRun, setHasRun] = useState(false);
    const [copied, setCopied] = useState(false);

    const runCode = useCallback(async () => {
        setIsRunning(true);
        setIsError(false);
        setOutput(null);

        try {
            const res = await fetch("/api/run-php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code }),
            });

            const data = await res.json();

            if (data.error) {
                setOutput(data.error);
                setIsError(true);
            } else {
                setOutput(data.output || "(Tidak ada output)");
                setIsError(false);
            }
        } catch {
            setOutput("Gagal terhubung ke server. Pastikan server berjalan.");
            setIsError(true);
        } finally {
            setIsRunning(false);
            setHasRun(true);
        }
    }, [code]);

    const resetCode = useCallback(() => {
        setCode(defaultCode);
        setOutput(null);
        setHasRun(false);
        setIsError(false);
    }, [defaultCode]);

    const copyCode = useCallback(async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }, [code]);

    // Hitung jumlah baris untuk tinggi editor
    const lineCount = code.split("\n").length;
    const editorHeight = Math.max(120, Math.min(lineCount * 20 + 20, 400));

    return (
        <div className="group relative my-4 rounded-xl border border-white/[0.08] bg-[#0d1117] overflow-hidden transition-all duration-300 hover:border-white/[0.15]">
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] opacity-70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] opacity-70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] opacity-70" />
                    </div>
                    <span className="text-[11px] text-gray-500 font-mono ml-2">
                        In [{cellIndex}] — PHP
                    </span>
                </div>

                <div className="flex items-center gap-1">
                    {/* Tombol Salin */}
                    <button
                        onClick={copyCode}
                        className="flex items-center gap-1 px-2 py-1 text-[11px] text-gray-400 hover:text-gray-200 rounded-md hover:bg-white/[0.06] transition-all"
                        title="Salin kode"
                    >
                        {copied ? (
                            <Check className="w-3.5 h-3.5 text-green-400" />
                        ) : (
                            <Copy className="w-3.5 h-3.5" />
                        )}
                    </button>

                    {/* Tombol Reset */}
                    <button
                        onClick={resetCode}
                        className="flex items-center gap-1 px-2 py-1 text-[11px] text-gray-400 hover:text-gray-200 rounded-md hover:bg-white/[0.06] transition-all"
                        title="Reset kode"
                    >
                        <RotateCcw className="w-3.5 h-3.5" />
                    </button>

                    {/* Tombol Jalankan */}
                    <button
                        onClick={runCode}
                        disabled={isRunning}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white shadow-lg shadow-green-500/20 hover:shadow-green-500/30"
                    >
                        {isRunning ? (
                            <>
                                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                <span>Menjalankan...</span>
                            </>
                        ) : (
                            <>
                                <Play className="w-3.5 h-3.5" />
                                <span>Jalankan</span>
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Monaco Editor */}
            <div className="border-b border-white/[0.04]">
                <Editor
                    height={editorHeight}
                    language="php"
                    theme="vs-dark"
                    value={code}
                    onChange={(value) => setCode(value || "")}
                    options={{
                        minimap: { enabled: false },
                        fontSize: 13,
                        fontFamily: "var(--font-geist-mono), 'JetBrains Mono', 'Fira Code', monospace",
                        lineNumbers: "on",
                        scrollBeyondLastLine: false,
                        padding: { top: 12, bottom: 12 },
                        renderLineHighlight: "gutter",
                        lineDecorationsWidth: 0,
                        overviewRulerLanes: 0,
                        hideCursorInOverviewRuler: true,
                        overviewRulerBorder: false,
                        scrollbar: {
                            vertical: "auto",
                            horizontal: "auto",
                            verticalScrollbarSize: 8,
                            horizontalScrollbarSize: 8,
                        },
                        wordWrap: "on",
                        automaticLayout: true,
                        contextmenu: false,
                        tabSize: 4,
                    }}
                />
            </div>

            {/* Output Area */}
            {hasRun && (
                <div className="border-t border-white/[0.06] animate-in slide-in-from-top-2 duration-300">
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#0d1117] border-b border-white/[0.04]">
                        <Terminal className="w-3.5 h-3.5 text-gray-500" />
                        <span className="text-[11px] text-gray-500 font-mono">
                            Output
                        </span>
                    </div>
                    <pre
                        className={`px-4 py-3 text-[13px] font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap ${isError
                                ? "text-red-400 bg-red-500/[0.05]"
                                : "text-emerald-300/90 bg-[#0a0f14]"
                            }`}
                    >
                        {output}
                    </pre>
                </div>
            )}
        </div>
    );
}
