"use client";

interface MarkdownCellProps {
    content: string;
}

// Parser sederhana: mengubah markdown menjadi HTML
function parseMarkdown(md: string): string {
    let html = md;

    // Code blocks (```)
    html = html.replace(
        /```(\w+)?\n([\s\S]*?)```/g,
        (_match, lang, code) => {
            const escapedCode = code
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
            return `<div class="code-block-wrapper"><div class="code-block-header">${lang || "code"
                }</div><pre class="code-block"><code>${escapedCode}</code></pre></div>`;
        }
    );

    // Inline code
    html = html.replace(
        /`([^`]+)`/g,
        '<code class="inline-code">$1</code>'
    );

    // Headings
    html = html.replace(/^### (.+)$/gm, '<h3 class="md-h3">$1</h3>');
    html = html.replace(/^## (.+)$/gm, '<h2 class="md-h2">$1</h2>');
    html = html.replace(/^# (.+)$/gm, '<h1 class="md-h1">$1</h1>');

    // Bold & Italic
    html = html.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");
    html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

    // Horizontal rule
    html = html.replace(/^---$/gm, '<hr class="md-hr" />');

    // Blockquotes with alerts
    html = html.replace(
        /^> \[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\n((?:^> .*\n?)*)/gm,
        (_match, type, content) => {
            const cleanContent = content.replace(/^> ?/gm, "").trim();
            const alertClass = `alert-${type.toLowerCase()}`;
            const icons: Record<string, string> = {
                NOTE: "📝",
                TIP: "💡",
                IMPORTANT: "❗",
                WARNING: "⚠️",
                CAUTION: "🔴",
            };
            return `<div class="alert ${alertClass}"><span class="alert-icon">${icons[type]}</span><div class="alert-content">${cleanContent}</div></div>`;
        }
    );

    // Regular blockquotes
    html = html.replace(
        /(^> .+\n?)+/gm,
        (match) => {
            const content = match.replace(/^> ?/gm, "").trim();
            // Proses bold/italic di dalam blockquote
            const processedContent = content
                .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                .replace(/\*(.+?)\*/g, "<em>$1</em>")
                .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');
            return `<blockquote class="md-blockquote">${processedContent}</blockquote>`;
        }
    );

    // Tables
    html = html.replace(
        /^\|(.+)\|\n\|[-\s|:]+\|\n((?:\|.+\|\n?)*)/gm,
        (_match, headerRow, bodyRows) => {
            const headers = headerRow
                .split("|")
                .map((h: string) => h.trim())
                .filter(Boolean);
            const headerHtml = headers
                .map((h: string) => `<th>${h}</th>`)
                .join("");

            const rows = bodyRows
                .trim()
                .split("\n")
                .map((row: string) => {
                    const cols = row
                        .split("|")
                        .map((c: string) => c.trim())
                        .filter(Boolean);
                    return `<tr>${cols
                        .map((c: string) => {
                            // Proses inline code di dalam sel tabel
                            const processed = c.replace(
                                /`([^`]+)`/g,
                                '<code class="inline-code">$1</code>'
                            );
                            return `<td>${processed}</td>`;
                        })
                        .join("")}</tr>`;
                })
                .join("");

            return `<div class="table-wrapper"><table class="md-table"><thead><tr>${headerHtml}</tr></thead><tbody>${rows}</tbody></table></div>`;
        }
    );

    // Unordered lists
    html = html.replace(
        /(^- .+\n?)+/gm,
        (match) => {
            const items = match
                .trim()
                .split("\n")
                .map((line) => {
                    const content = line.replace(/^- /, "");
                    return `<li>${content}</li>`;
                })
                .join("");
            return `<ul class="md-list">${items}</ul>`;
        }
    );

    // Ordered lists
    html = html.replace(
        /(^\d+\. .+\n?)+/gm,
        (match) => {
            const items = match
                .trim()
                .split("\n")
                .map((line) => {
                    const content = line.replace(/^\d+\. /, "");
                    return `<li>${content}</li>`;
                })
                .join("");
            return `<ol class="md-olist">${items}</ol>`;
        }
    );

    // Paragraphs — wrap non-block-level lines
    html = html
        .split("\n\n")
        .map((block) => {
            const trimmed = block.trim();
            if (!trimmed) return "";
            // Jangan bungkus elemen blok
            if (
                trimmed.startsWith("<h") ||
                trimmed.startsWith("<div") ||
                trimmed.startsWith("<blockquote") ||
                trimmed.startsWith("<ul") ||
                trimmed.startsWith("<ol") ||
                trimmed.startsWith("<table") ||
                trimmed.startsWith("<hr") ||
                trimmed.startsWith("<pre")
            ) {
                return trimmed;
            }
            return `<p class="md-p">${trimmed}</p>`;
        })
        .join("\n");

    return html;
}

export default function MarkdownCell({ content }: MarkdownCellProps) {
    const html = parseMarkdown(content);

    return (
        <div className="my-4 px-1">
            <div
                className="markdown-content"
                dangerouslySetInnerHTML={{ __html: html }}
            />

            {/* Scoped styles */}
            <style jsx>{`
        .markdown-content :global(.md-h1) {
          font-size: 1.75rem;
          font-weight: 800;
          color: #f0f0f5;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
          line-height: 1.3;
        }
        .markdown-content :global(.md-h2) {
          font-size: 1.3rem;
          font-weight: 700;
          color: #e0e0e8;
          margin-top: 1.75rem;
          margin-bottom: 0.5rem;
          letter-spacing: -0.01em;
        }
        .markdown-content :global(.md-h3) {
          font-size: 1.1rem;
          font-weight: 600;
          color: #d0d0d8;
          margin-top: 1.25rem;
          margin-bottom: 0.4rem;
        }
        .markdown-content :global(.md-p) {
          color: #a0a0b0;
          line-height: 1.75;
          margin-bottom: 0.75rem;
          font-size: 0.925rem;
        }
        .markdown-content :global(.md-hr) {
          border: none;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          margin: 1.5rem 0;
        }
        .markdown-content :global(.inline-code) {
          background: rgba(139, 92, 246, 0.12);
          color: #c4b5fd;
          padding: 0.15em 0.4em;
          border-radius: 5px;
          font-size: 0.85em;
          font-family: var(--font-geist-mono), "JetBrains Mono", monospace;
          border: 1px solid rgba(139, 92, 246, 0.15);
        }
        .markdown-content :global(.code-block-wrapper) {
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.06);
          margin: 1rem 0;
        }
        .markdown-content :global(.code-block-header) {
          padding: 0.4rem 0.75rem;
          background: #161b22;
          font-size: 0.7rem;
          text-transform: uppercase;
          color: #6e7681;
          letter-spacing: 0.05em;
          font-family: var(--font-geist-mono), monospace;
        }
        .markdown-content :global(.code-block) {
          background: #0d1117;
          padding: 0.85rem 1rem;
          overflow-x: auto;
          margin: 0;
        }
        .markdown-content :global(.code-block code) {
          font-size: 0.825rem;
          color: #c9d1d9;
          font-family: var(--font-geist-mono), "JetBrains Mono", monospace;
          line-height: 1.6;
        }
        .markdown-content :global(.md-blockquote) {
          border-left: 3px solid rgba(139, 92, 246, 0.4);
          padding: 0.75rem 1rem;
          margin: 1rem 0;
          background: rgba(139, 92, 246, 0.05);
          border-radius: 0 8px 8px 0;
          color: #b0b0c0;
          font-size: 0.9rem;
          line-height: 1.7;
        }
        .markdown-content :global(.alert) {
          border-radius: 10px;
          padding: 0.85rem 1rem;
          margin: 1rem 0;
          display: flex;
          gap: 0.75rem;
          font-size: 0.875rem;
          line-height: 1.6;
          color: #c0c0d0;
        }
        .markdown-content :global(.alert-important) {
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.15);
        }
        .markdown-content :global(.alert-note) {
          background: rgba(59, 130, 246, 0.08);
          border: 1px solid rgba(59, 130, 246, 0.15);
        }
        .markdown-content :global(.alert-tip) {
          background: rgba(34, 197, 94, 0.08);
          border: 1px solid rgba(34, 197, 94, 0.15);
        }
        .markdown-content :global(.alert-warning) {
          background: rgba(234, 179, 8, 0.08);
          border: 1px solid rgba(234, 179, 8, 0.15);
        }
        .markdown-content :global(.alert-caution) {
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.15);
        }
        .markdown-content :global(.alert-icon) {
          flex-shrink: 0;
          font-size: 1.1rem;
        }
        .markdown-content :global(.table-wrapper) {
          overflow-x: auto;
          margin: 1rem 0;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
        .markdown-content :global(.md-table) {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }
        .markdown-content :global(.md-table th) {
          background: rgba(255, 255, 255, 0.04);
          padding: 0.6rem 0.85rem;
          text-align: left;
          color: #d0d0d8;
          font-weight: 600;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .markdown-content :global(.md-table td) {
          padding: 0.5rem 0.85rem;
          color: #a0a0b0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }
        .markdown-content :global(.md-table tr:last-child td) {
          border-bottom: none;
        }
        .markdown-content :global(.md-list),
        .markdown-content :global(.md-olist) {
          padding-left: 1.25rem;
          margin: 0.5rem 0;
          color: #a0a0b0;
          font-size: 0.9rem;
          line-height: 1.8;
        }
        .markdown-content :global(.md-list li),
        .markdown-content :global(.md-olist li) {
          margin-bottom: 0.25rem;
        }
        .markdown-content :global(strong) {
          color: #e0e0f0;
          font-weight: 600;
        }
        .markdown-content :global(em) {
          color: #b8b8d0;
          font-style: italic;
        }
      `}</style>
        </div>
    );
}
