import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Hirwa Pie — Portfolio",
  description: "Engineer & Full-stack developer. I build clean, fast, accessible web apps.",
  // ⬇️ Replace with your live domain before deploying
  metadataBase: new URL("https://example.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hirwa Pie — Portfolio",
    description: "Engineer & Full-stack developer. I build clean, fast, accessible web apps.",
    url: "https://example.com",
    siteName: "Hirwa Pie Portfolio",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hirwa Pie — Portfolio",
    description: "Engineer & Full-stack developer. I build clean, fast, accessible web apps.",
    images: ["/og.png"],
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0f19" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="relative min-h-screen">
        {/* Background layer behind everything */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-night-grid bg-night-grid-fade"
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
