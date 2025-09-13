import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Tath Waitlist",
   description: "Join the waitlist for Tath!",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         >
            {children}
            <Toaster
               toastOptions={{
                  style: {
                     background: "rgb(51 0 102)",
                     color: "white",
                     border: "1px solid rgb(179 7 198)",
                  },
                  className: "rounded-xl",
                  duration: 5000,
               }}
            />
         </body>
      </html>
   );
}
