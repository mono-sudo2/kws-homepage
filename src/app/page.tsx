import HeroSection from "@/components/HeroSection";
import ErlebnisSection from "@/components/ErlebnisSection";
import ParcoursSection from "@/components/ParcoursSection";
import PreisSection from "@/components/PreisSection";
import EventsSection from "@/components/EventsSection";
import ReservierungSection from "@/components/ReservierungSection";
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<ErlebnisSection />
			<ParcoursSection />
			<PreisSection />
			<ReservierungSection />
			<FAQSection />
		</>
	);
}
