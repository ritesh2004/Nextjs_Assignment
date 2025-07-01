import Image from "next/image";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div>
      <div className="my-10 w-[90%] mx-auto">
        <span className="text-2xl"> <span className="text-4xl text-[#118ab2]">D</span>r. <span className="text-4xl text-[#118ab2]">S</span>erena <span className="text-4xl text-[#118ab2]">B</span>lake</span>
        <br />
        <span className="text-2xl text-[#118ab2]">Clinical Psychologist</span>
      </div>
      <HeroSection />
    </div>
  );
}
