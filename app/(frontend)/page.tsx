
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

  const payload = getPayload({ config })

  const newsArticles = await (await payload).find({
    collection: "news-articles",
    limit: 3,
    depth: 1,
  })

  const teamMembers = await (await payload).find({
    collection: "team-members",
    limit: 8,
    depth: 1,
    sort: "order",
  })

  const fixtures = await (await payload).findGlobal({
    slug: "fixtures-section",
  })

  const getInTouch = await (await payload).findGlobal({
    slug: "get-in-touch",
  })

  const aboutSection = await (await payload).findGlobal({
    slug: "about-section",
  })

  return (
    <div className="flex min-h-screen flex-col bg-yellow-50 font-comic">
      <Navbar />
      <RefreshRouteOnSave />
      <main className="flex-1">
        <HeroSection />
        <AboutSection aboutSection={aboutSection} />
        <PlayerSection teamMembers={teamMembers.docs}/>
        <FixturesResultsSection data={fixtures} />
        <NewsSection data={newsArticles.docs} />
        <GetInTouchSection data={getInTouch} />
      </main>
      <Footer />
    </div>
  )
}
