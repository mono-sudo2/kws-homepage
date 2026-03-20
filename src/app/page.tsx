"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ErlebnisSection from "@/components/ErlebnisSection";
import ParcoursSection from "@/components/ParcoursSection";
import PreisSection from "@/components/PreisSection";
import ReservierungSection from "@/components/ReservierungSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main>
				<HeroSection />
				<ErlebnisSection />
				<ParcoursSection />
				<PreisSection />
				<ReservierungSection />
				<FAQSection />
			</main>
			<Footer />
		</div>
	);
};

export default Index;
