import type { Metadata } from "next";
import { cookies } from "next/headers";
import ThemeProvider from "@/components/ThemeProvider";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harry Tjahja's Website",
  description: "Website all about Harry Tjahja's professional career",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultDark = cookieStore.get('darkMode')?.value === 'true';

  return (
    <html lang="en" className={defaultDark ? 'dark' : ''}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider defaultDark={defaultDark}>
          <div className="bg-bg min-h-screen text-primary">
            <Sidebar />
            <MobileNav />
            <main className="md:ml-[220px] px-6 md:px-16 pt-16 max-w-[860px]">
              <div className="flex flex-col gap-[72px]">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
