//file for setting the layout of the app
//like base in django
import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

//setting up fonts for the web app
const inter = Inter({ subsets: ["latin"] , variable: '--font-inter'});
const ibmPlexSerif=IBM_Plex_Serif({
  subsets: ["latin"],
  weight:['400', '700'],
  variable:'--font-ibm-plex-serif'
})

//setting up metadata for the app
export const metadata: Metadata = {
  title: "Horizon",
  description: "A modern day mobile banking web application",
  icons:{
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //initiating the fonts setup
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body> 
    </html>
  );
}
