import Image from "next/image";
import { Geist, Geist_Mono, DM_Sans, Poppins } from "next/font/google";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Tracks from "@/components/Tracks";
import Tracks1 from "@/components/Tracks1";
import Prizes from "@/components/Prizes";
import Schedule from "@/components/Schedule";
import Sponsors from "@/components/Sponsors";
import Faq from "@/components/Faq";
import CodeOfConduct from "@/components/codeOfConduct";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Gallery />
      {/* <Tracks /> */}
      <Tracks1 />
      <Prizes />
      <Schedule />
      <Sponsors />
      {/* <CodeOfConduct /> */}
      <Faq />
    </div>
  );
}
