import { Hero } from "@/components/main/Hero";
import { Navbar } from "@/components/main/Navbar";

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      	<Navbar/>
        <Hero/>
    </div>
  );
}
