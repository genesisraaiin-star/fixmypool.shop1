import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blue Smile Merch",
  description: "Official merch store — mock products for a quick launch.",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <a href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Logo" width={42} height={42} priority />
              <div className="leading-tight">
                <div className="text-lg font-semibold tracking-tight">Blue Smile</div>
                <div className="text-xs text-slate-300">Merch Store</div>
              </div>
            </a>
            <nav className="flex items-center gap-6 text-sm text-slate-200">
              <a href="#products">Products</a>
              <a href="#faq">FAQ</a>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4">{children}</main>

        <footer className="mt-20 border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} Blue Smile. All rights reserved.</div>
            <div className="flex gap-4">
              <a href="#" aria-label="Privacy">Privacy</a>
              <a href="#" aria-label="Terms">Terms</a>
              <a href="https://vercel.com" aria-label="Vercel">Powered by Vercel</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
