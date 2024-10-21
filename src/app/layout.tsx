import type { Metadata } from "next";
import { Roboto_Condensed, Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
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
      <body
        className={`${robotoCondensed.variable} ${roboto.variable} antialiased hide-scrollbar`}
      >
        {children}
      </body>
      <Toaster
        richColors
        visibleToasts={2}
        toastOptions={{
          className: "rounded-none",
        }}
      />
    </html>
  );
}
