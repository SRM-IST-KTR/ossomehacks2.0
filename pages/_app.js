import "@/styles/globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";
import Scroll from "@/components/Shared/Scroll";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-[#1E002E]">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Scroll />
    </div>
  );
}
