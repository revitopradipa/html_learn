"use client";

import { useState } from "react";
import { Code, Eye, RefreshCw } from "lucide-react";

type TagExample = {
    code: string;
    html: string;
};

type ComparisonData = {
    id: string;
    label: string;
    tag1: TagExample;
    tag2: TagExample;
    explanation: string;
};

const comparisons: ComparisonData[] = [
    {
        id: "ul-vs-ol",
        label: "<ul> vs <ol>",
        tag1: {
            code: "<ul>\n  <li>Buka browser</li>\n  <li>Ketik kode program</li>\n  <li>Tekan tombol simpan</li>\n</ul>",
            html: "<ul style='list-style-type: disc; padding-left: 20px;'><li>Buka browser</li><li>Ketik kode program</li><li>Tekan tombol simpan</li></ul>"
        },
        tag2: {
            code: "<ol>\n  <li>Buka browser</li>\n  <li>Ketik kode program</li>\n  <li>Tekan tombol simpan</li>\n</ol>",
            html: "<ol style='list-style-type: decimal; padding-left: 20px;'><li>Buka browser</li><li>Ketik kode program</li><li>Tekan tombol simpan</li></ol>"
        },
        explanation: "<ul> (Unordered List) digunakan untuk daftar tanpa urutan spesifik, biasanya ditampilkan dengan simbol 'bullet'. <ol> (Ordered List) digunakan untuk urutan atau langkah-langkah yang memiliki arti berurutan, ditampilkan dengan angka/huruf."
    },
    {
        id: "b-vs-strong",
        label: "<b> vs <strong>",
        tag1: {
            code: "<p>PERINGATAN: <b>Jangan Hapus Database!</b></p>",
            html: "<p>PERINGATAN: <b style='font-weight: bold;'>Jangan Hapus Database!</b></p>"
        },
        tag2: {
            code: "<p>PERINGATAN: <strong>Jangan Hapus Database!</strong></p>",
            html: "<p>PERINGATAN: <strong style='font-weight: bold; color: #FF2D20;'>Jangan Hapus Database!</strong></p>"
        },
        explanation: "Secara visual (default browser), <b> dan <strong> keduanya membuat teks menjadi tebal. Namun, <strong> memberitahu 'Screen Reader' (alat bantu tunanetra) bahwa kata ini sangat PENTING secara konteks (penekanan semantik). <b> murni hanya instruksi style visual."
    },
    {
        id: "div-vs-span",
        label: "<div> vs <span>",
        tag1: {
            code: "<div style=\"background: #fecaca; padding: 4px;\">\n  Teks Sorotan\n</div>",
            html: "<div style=\"background: #fecaca; padding: 4px;\">Teks Sorotan</div>"
        },
        tag2: {
            code: "<span style=\"background: #fecaca; padding: 4px;\">\n  Teks Sorotan\n</span>",
            html: "<span style=\"background: #fecaca; padding: 4px;\">Teks Sorotan</span>"
        },
        explanation: "<div> adalah elemen 'Block-Level'. Ia akan mengambil seluruh sisa ruang horizontal dan otomatis memulai baris baru. Digunakan untuk Layout utama. <span> adalah 'Inline'. Ia hanya mengambil ruang sebesar konten di dalamnya dan tidak memutus baris. Sangat ideal untuk mewarnai atau menebalkan sepenggal kata di dalam kalimat."
    }
];

export default function TagVisualizer() {
    const [activeId, setActiveId] = useState(comparisons[0].id);

    const activeData = comparisons.find((c) => c.id === activeId) || comparisons[0];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Top Navigation */}
            <div className="bg-gray-50 border-b border-gray-200 p-4 flex flex-wrap gap-2 items-center">
                <span className="text-sm font-semibold text-gray-500 mr-2 flex items-center">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Komparasi Tag:
                </span>
                {comparisons.map((c) => (
                    <button
                        key={c.id}
                        onClick={() => setActiveId(c.id)}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeId === c.id
                            ? "bg-[#FF2D20] text-white shadow-md shadow-red-200"
                            : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
                            }`}
                    >
                        {c.label}
                    </button>
                ))}
            </div>

            {/* Split Screen Concept */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x divide-gray-200">

                {/* Left Panel - Tag 1 */}
                <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                        <Code className="w-5 h-5 mr-2 text-gray-400" />
                        Kode: {activeData.label.split(" vs ")[0]}
                    </h3>
                    <div className="bg-gray-900 rounded-lg p-4 mb-6 shadow-inner">
                        <pre className="text-sm text-green-400 font-mono overflow-auto whitespace-pre-wrap">
                            {activeData.tag1.code}
                        </pre>
                    </div>

                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                        <Eye className="w-5 h-5 mr-2 text-gray-400" />
                        Hasil Render
                    </h3>
                    <div
                        className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50 min-h-[100px]"
                        dangerouslySetInnerHTML={{ __html: activeData.tag1.html }}
                    />
                </div>

                {/* Right Panel - Tag 2 */}
                <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                        <Code className="w-5 h-5 mr-2 text-gray-400" />
                        Kode: {activeData.label.split(" vs ")[1]}
                    </h3>
                    <div className="bg-gray-900 rounded-lg p-4 mb-6 shadow-inner">
                        <pre className="text-sm text-green-400 font-mono overflow-auto whitespace-pre-wrap">
                            {activeData.tag2.code}
                        </pre>
                    </div>

                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                        <Eye className="w-5 h-5 mr-2 text-gray-400" />
                        Hasil Render
                    </h3>
                    <div
                        className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50 min-h-[100px]"
                        dangerouslySetInnerHTML={{ __html: activeData.tag2.html }}
                    />
                </div>
            </div>

            {/* Explanation Footer */}
            <div className="bg-[#fff5f4] border-t border-red-100 p-6">
                <h4 className="font-bold text-[#FF2D20] mb-2 text-lg">💡 Penjelasan Semantik</h4>
                <p className="text-gray-700 leading-relaxed">
                    {activeData.explanation}
                </p>
            </div>
        </div>
    );
}
