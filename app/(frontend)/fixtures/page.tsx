import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { FixturesDisplay } from "@/components/fixtures/FixturesDisplay"
import { SupportSection } from "@/components/fixtures/SupportSection"
import { getPayload } from "payload";
import config from "@/payload.config"  

export default async function FixturesPage() {
  
  const payload = getPayload({ config })
  const fixtures = await (await payload).find({
    collection: "fixtures",
    limit: 1000,
    depth: 1,
    sort: "date",
  })

  return (
    <div className="flex min-h-screen flex-col bg-yellow-50 font-comic">
      <Navbar />
      <main className="flex-1">
        <FixturesDisplay data={fixtures.docs} />
        <SupportSection />
      </main>
      <Footer />
    </div>
  )
}
