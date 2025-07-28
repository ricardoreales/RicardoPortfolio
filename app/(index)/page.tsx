import { CollaboratorsCarrusel } from "@/components/main-page/CollaboratorsCarrusel";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/main-page/Hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen relative bg-[#1a1a1a] text-white overflow-x-hidden z-0">
        <Hero />
      </div>
      <CollaboratorsCarrusel />
    </>
  );
}
