import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spaceGrotesk",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Zeeshan Asif",
  description:
    "Zeeshan Asif - Full Stack Web Developer | Specializing in custom web solutions, SaaS platforms, and MVPs for startups using React.js, Next.js, Vue.js, Svelte, Node.js, Nest.js, Laravel, MongoDB, and MySQL. Available for freelance projects on Fiverr & Upwork.",
  keywords:
    "Zeeshan Asif, Full Stack Web Developer, React.js, Next.js, Vue.js, Svelte, Node.js, Nest.js, Laravel, MongoDB, MySQL, Freelancer, Fiverr, Upwork, Web Developer, Web Development, Software Developer, Software Development, Web Solutions, SaaS Platforms, MVPs, Startups",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zeeshan-rho.vercel.app/",
    siteName: "Zeeshan Asif",
    title: "Zeeshan Asif",
    description:
      "Zeeshan Asif - Full Stack Web Developer | Specializing in custom web solutions, SaaS platforms, and MVPs for startups using React.js, Next.js, Vue.js, Svelte, Node.js, Nest.js, Laravel, MongoDB, and MySQL. Available for freelance projects on Fiverr & Upwork.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body
        className={`${spaceGrotesk.variable} ${outfit.variable} antialiased hide-scrollbar`}
      >
        <div className="size-[500px] rounded-full bg-primary fixed top-0 left-0 blur-[300px] opacity-60 -z-10"></div>
        <div className="size-60 rounded-full bg-primary fixed bottom-0 right-0 blur-[200px] opacity-70 -z-10"></div>
        {children}
      </body>
      <Toaster visibleToasts={2} />
    </html>
  );
}
