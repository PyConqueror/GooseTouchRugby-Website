import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/Footer"
import { JoinTeamSection } from "@/components/team/JoinTeamSection"
import { TeamDisplay } from "@/components/team/TeamDisplay"
import { getPayload } from "payload";
import config from "@/payload.config"

export default async function TeamPage() {
  const payload = getPayload({ config })

  const teamMembers = await (await payload).find({
    collection: "team-members",
    limit: 1000,
    depth: 1,
    sort: "order",
  })

  return (
    <div className="flex min-h-screen flex-col bg-yellow-50 font-comic">
      <Navbar />
      <main className="flex-1">
        <TeamDisplay initialTeamMembers={teamMembers.docs} />
        <JoinTeamSection />
      </main>
      <Footer />
    </div>
  )
}
