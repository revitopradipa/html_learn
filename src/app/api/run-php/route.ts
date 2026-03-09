import { NextRequest, NextResponse } from "next/server";
import { execFile } from "child_process";

export async function POST(request: NextRequest) {
    try {
        const { code } = await request.json();

        if (!code || typeof code !== "string") {
            return NextResponse.json(
                { error: "Kode PHP tidak boleh kosong." },
                { status: 400 }
            );
        }

        // Batas panjang kode untuk keamanan
        if (code.length > 10000) {
            return NextResponse.json(
                { error: "Kode terlalu panjang. Maksimal 10.000 karakter." },
                { status: 400 }
            );
        }

        const output = await new Promise<string>((resolve, reject) => {
            const phpProcess = execFile(
                "php",
                [
                    "-d", "display_errors=On",
                    "-d", "error_reporting=E_ALL",
                    "-d", "max_execution_time=5",
                    "-d", "memory_limit=32M",
                    "-d", "disable_functions=exec,passthru,shell_exec,system,proc_open,popen,curl_exec,curl_multi_exec,parse_ini_file,show_source,file_get_contents,file_put_contents,fopen,fwrite,unlink,rmdir,mkdir",
                    "-r", code.replace(/^<\?php\s*/i, "").replace(/\?>\s*$/i, ""),
                ],
                {
                    timeout: 6000, // 6 detik timeout
                    maxBuffer: 1024 * 512, // 512KB max output
                    env: { ...process.env },
                },
                (error, stdout, stderr) => {
                    if (error) {
                        // Timeout
                        if (error.killed) {
                            reject(new Error("⏱️ Waktu eksekusi habis (timeout 5 detik). Pastikan kode tidak memiliki infinite loop."));
                            return;
                        }
                        // PHP error tapi masih ada output
                        if (stderr) {
                            resolve(stderr);
                            return;
                        }
                        reject(new Error(error.message));
                        return;
                    }
                    resolve(stdout + (stderr ? "\n" + stderr : ""));
                }
            );

            // Safety: kill process jika masih berjalan
            setTimeout(() => {
                phpProcess.kill("SIGTERM");
            }, 6000);
        });

        return NextResponse.json({ output });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Terjadi kesalahan saat menjalankan kode PHP.";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
