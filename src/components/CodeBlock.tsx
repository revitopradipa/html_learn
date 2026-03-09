"use client";

import { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-twilight.css";

interface CodeBlockProps {
    code: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
    const codeRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (codeRef.current) {
            // Gunakan PHP language jika tersedia (di-load oleh Playground),
            // fallback ke markup untuk HTML highlighting
            const lang = Prism.languages.php || Prism.languages.markup;
            if (lang) {
                Prism.highlightElement(codeRef.current);
            }
        }
    }, [code]);

    // Tentukan class language berdasarkan ketersediaan
    const langClass = Prism.languages.php ? "language-php" : "language-markup";

    return (
        <div className="rounded-lg overflow-hidden border border-gray-800">
            <div className="bg-gray-900/80 px-3 py-1.5 border-b border-gray-800 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">
                    PHP + HTML
                </span>
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <div className="w-2 h-2 rounded-full bg-green-500/60" />
                </div>
            </div>
            <pre className="!m-0 !rounded-none !bg-[#1e1e2e] !p-4 overflow-x-auto" style={{ fontSize: "0.8rem", lineHeight: "1.65" }}>
                <code ref={codeRef} className={langClass}>
                    {code}
                </code>
            </pre>
        </div>
    );
}
