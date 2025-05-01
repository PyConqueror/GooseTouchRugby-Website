
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/home/HeroSection"
import { AboutSection } from "@/components/home/AboutSection"
import { PlayerSection } from "@/components/home/PlayerSection"
import { FixturesResultsSection } from "@/components/home/FixturesResultsSection"
import { NewsSection } from "@/components/home/NewsSection"
import { GetInTouchSection } from "@/components/home/GetInTouchSection"
import { Footer } from "@/components/Footer"
import { getPayload } from "payload";
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

  return (
    <div className="flex min-h-screen flex-col bg-yellow-50 font-comic">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PlayerSection teamMembers={teamMembers.docs}/>
        <FixturesResultsSection />
        <NewsSection data={newsArticles.docs} />
        <GetInTouchSection />
      </main>
      <Footer />
    </div>
  )
}
