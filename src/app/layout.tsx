import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devjobs",
  description: "A Frontend Mentor learning project",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${kumbhSans.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background text-tpg-muted flex min-h-full flex-col">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
