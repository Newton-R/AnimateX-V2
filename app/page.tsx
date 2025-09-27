import { Hero } from "@/components/main/Hero";
import { Navbar } from "@/components/main/Navbar";

export default function Home() {
  return (
    <div className="w-full">
      	<Navbar/>
        <Hero/>
        <div className="h-[1200px]"></div>
    </div>
  );
}
