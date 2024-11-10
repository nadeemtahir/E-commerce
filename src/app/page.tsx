

import BrowseTheRangeSection from "@/components/BrowseTheRangeSection";
import HeroSection from "@/components/HeroSection";
import OurProductSection from "@/components/OurProductSection";
import ShareSetupSection from "@/components/ShareSetupSection";


export default function HomePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <div className="flex flex-col gap-[56px] mx-4 md:mx-[130px]">
        <BrowseTheRangeSection />
        <OurProductSection />
      </div>
      <div className="mt-[56px]">
        <ShareSetupSection />
      </div>
    </main>
  );
}
