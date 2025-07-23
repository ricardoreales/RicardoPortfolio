import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/main-page/Hero/Hero";
import "./main-page.css";
export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="min-h-screen relative bg-[#1a1a1a] text-white overflow-x-hidden z-0">
        <Hero />
      </div>
      <div className="h-screen bg-black">
        <h1>Hello</h1>
      </div>
    </div>
  );
}
