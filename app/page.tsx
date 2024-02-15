import Navbar from "@/components/Navbar";
import SectionHero from "@/components/SectionHero";
import Wheel from "@/components/ui/Wheel";
import GuestStar from "@/components/SectionGuestStars";
import Rundown from "@/components/SectionRundown";
import Tenants from "@/components/SectionTenants";
import Banners from "@/components/SectionBanners";
import Portfolio from "@/components/SectionPortfolio";
import MeetnGreet from "@/components/SectionMeetAndGreet";
import BePart from "@/components/SectionBePartOfICC";
import CTA from "@/components/SectionCTA";
import Sponsors from "@/components/SectionSponsors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-custom-black-primary">
      <div
        style={{
          backgroundImage:
            "url('https://indonesiacomiccon.com/_nuxt/img/icc-2023-bg-pattern.38380c4.svg')",
          backgroundColor: "rgba(0, 0, 0, 1)",
        }}
        className="bg-cover bg-no-repeat h-full"
      >
        <div className="bg-gradient-to-b from-custom-black-primary/90 to-custom-black-primary h-fit">
          <Navbar />
          <div className="pt-1 lg:pt-24">
            <SectionHero />
          </div>
        </div>
      </div>
      <div className="px-1 lg:px-32">
        <Wheel />
        <GuestStar />
        <Rundown />
      </div>
      <Tenants />
      <Banners />
      <Portfolio />
      <MeetnGreet />
      <BePart />
      <CTA />
      <Sponsors />
      <Footer />
    </div>
  );
}
