import Services from "@/components/coreServices/services";
import Hero from "@/components/herosection/hero";
import Ourwork from "@/components/ourwork/ourwork";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <div className="w-[85%] lg:w-[90%] mx-auto">
      <Ourwork />
      </div>
    </main>
  );
}