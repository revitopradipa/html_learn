"use client";

import { useState } from "react";
import { Terminal, Play, Layout } from "lucide-react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-markup"; // HTML/XML
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-twilight.css"; // A nice dark theme


const defaultHTML = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Laravel HTML Playground</title>
</head>
<body>
  <h1>Selamat Datang di HTML Sandbox!</h1>
  <p>Coba tuliskan kode HTML untuk dipelajari di editor (kiri).</p>
</body>
</html>`;

export default function Playground() {
    const [code, setCode] = useState(defaultHTML);

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-[600px]">

            {/* Playground Header */}
            <div className="bg-gray-900 border-b border-gray-800 p-4 shrink-0 flex items-center justify-between">
                <div className="flex items-center text-white font-medium">
                    <Terminal className="w-5 h-5 mr-2 text-[#FF2D20]" />
                    Interactive HTML Editor
                </div>
                <div className="text-gray-400 text-sm flex items-center">
                    <Layout className="w-4 h-4 mr-1" />
                    Split View
                </div>
            </div>

            {/* Editor & Preview Split Screen */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:divide-x divide-gray-200 overflow-hidden">

                {/* Left: Code Editor */}
                <div className="h-[300px] md:h-full bg-[#141414] relative overflow-auto custom-scrollbar">
                    <div className="sticky top-0 z-10 p-2 bg-[#141414]/90 backdrop-blur border-b border-gray-800 text-xs text-gray-400 font-mono text-right">
                        index.html
                    </div>
                    <div className="min-h-max">
                        <Editor
                            value={code}
                            onValueChange={code => setCode(code)}
                            highlight={code => Prism.highlight(code, Prism.languages.markup, 'markup')}
                            padding={24}
                            className="font-mono text-sm"
                            style={{
                                fontFamily: '"Fira Code", "JetBrains Mono", monospace',
                                backgroundColor: "transparent",
                                color: "#d4d4d4",
                            }}
                        />
                    </div>
                </div>

                {/* Right: Live Preview */}
                <div className="flex flex-col h-[300px] md:h-full bg-white relative">
                    <div className="absolute top-0 right-0 p-2 bg-white/90 backdrop-blur border-b border-l border-gray-200 text-xs text-[#FF2D20] font-bold rounded-bl-lg z-10 flex items-center shadow-sm">
                        <Play className="w-3 h-3 mr-1 fill-current" />
                        Live Preview Browser
                    </div>
                    <iframe
                        title="sandbox-preview"
                        srcDoc={code}
                        className="flex-1 w-full h-full border-none"
                        sandbox="allow-scripts allow-modals"
                    ></iframe>
                </div>

            </div>
        </div>
    );
}
