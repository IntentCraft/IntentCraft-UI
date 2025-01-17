import Applications from '@/components/landing-page/applications';
import Capabilities from '@/components/landing-page/capabilities';
import Features from '@/components/landing-page/features';
import Footer from '@/components/landing-page/footer';
import HeroSection from '@/components/landing-page/hero-section';
import JoinNow from '@/components/landing-page/join-now';

export default function Home() {
    return (
        <>
            <HeroSection />
            <Features />
            <Capabilities />
            <Applications />
            <JoinNow />
            <Footer />
        </>
    );
}
