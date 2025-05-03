import { Navbar } from "@/components/shared/Navbar"
import { HeroSection } from "@/components/home/HeroSection"
import { AboutSection } from "@/components/home/AboutSection"
import { PlayerSection } from "@/components/home/PlayerSection"
import { FixturesResultsSection } from "@/components/home/FixturesResultsSection"
import { NewsSection } from "@/components/home/NewsSection"
import { GetInTouchSection } from "@/components/home/GetInTouchSection"
import { Footer } from "@/components/shared/Footer"
import { getPayload } from "payload";
import { RefreshRouteOnSave } from "@/utilities/RefreshRouteOnSave";
import config from "@/payload.config"

export default async function Home() {

  const payload = await getPayload({ config })

  const [newsArticles, teamMembers, fixtures, getInTouch, aboutSection] = await Promise.all([
    payload.findGlobal({ slug: "news-global" }),
    payload.findGlobal({ slug: "team-members-section" }),
    payload.findGlobal({ slug: "fixtures-section" }),
    payload.findGlobal({ slug: "get-in-touch" }),
    payload.findGlobal({ slug: "about-section" }),
  ]);

  return (
    <div className="flex min-h-screen flex-col bg-yellow-50 font-comic">
      <Navbar />
      <RefreshRouteOnSave />
      <main className="flex-1">
        <HeroSection />
        <AboutSection data={aboutSection} />
        <PlayerSection data={teamMembers}/>
        <FixturesResultsSection data={fixtures} />
        <NewsSection data={newsArticles} />
        <GetInTouchSection data={getInTouch} />
      </main>
      <Footer />
    </div>
  )
}
