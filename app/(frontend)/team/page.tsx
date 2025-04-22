import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/Footer"
import { JoinTeamSection } from "@/components/team/JoinTeamSection"
import { TeamDisplay, TeamMember } from "@/components/team/TeamDisplay"

// Define TeamMember type here or import from a shared types file
// Moved TeamMember interface to TeamDisplay.tsx

// Fetch data here in a real app (Server Component context)
async function getTeamMembers(): Promise<TeamMember[]> {
  // Replace with actual data fetching logic
  return [
    { id: 1, name: "Alex Johnson", position: "Wing", experience: "5 years", image: "/placeholder.svg?height=300&width=300" },
    { id: 2, name: "Sam Williams", position: "Scrum Half", experience: "3 years", image: "/placeholder.svg?height=300&width=300" },
    { id: 3, name: "Jordan Taylor", position: "Fly Half", experience: "7 years", image: "/placeholder.svg?height=300&width=300" },
    { id: 4, name: "Casey Brown", position: "Center", experience: "4 years", image: "/placeholder.svg?height=300&width=300" },
    { id: 5, name: "Morgan Smith", position: "Full Back", experience: "6 years", image: "/placeholder.svg?height=300&width=300" },
    { id: 6, name: "Riley Wilson", position: "Prop", experience: "8 years", image: "/placeholder.svg?height=300&width=300" },
    { id: 7, name: "Jamie Davis", position: "Hooker", experience: "2 years", image: "/placeholder.svg?height=300&width=300" },
    { id: 8, name: "Taylor Moore", position: "Lock", experience: "5 years", image: "/placeholder.svg?height=300&width=300" },
    { id: 9, name: "Quinn Martin", position: "Flanker", experience: "3 years", image: "/placeholder.svg?height=300&width=300" },
    { id: 10, name: "Avery Thompson", position: "Number 8", experience: "7 years", image: "/placeholder.svg?height=300&width=300" },
    { id: 11, name: "Jordan Lee", position: "Wing", experience: "4 years", image: "/placeholder.svg?height=300&width=300" },
    { id: 12, name: "Cameron White", position: "Center", experience: "6 years", image: "/placeholder.svg?height=300&width=300" },
    { id: 13, name: "Drew Harris", position: "Coach", experience: "10 years", image: "/placeholder.svg?height=300&width=300" },
    { id: 14, name: "Reese Clark", position: "Assistant Coach", experience: "8 years", image: "/placeholder.svg?height=300&width=300" },
    { id: 15, name: "Finley Adams", position: "Team Manager", experience: "5 years", image: "/placeholder.svg?height=300&width=300" },
  ]
}

export default async function TeamPage() {
  // Fetch or define initial data
  const initialTeamMembers = await getTeamMembers()

  // Remove all state, effects, filtering, pagination logic

  return (
    <div className="flex min-h-screen flex-col bg-yellow-50 font-comic">
      <Navbar />
      <main className="flex-1">
        {/* Pass initial data to the client component wrapper */}
        <TeamDisplay initialTeamMembers={initialTeamMembers} />
        <JoinTeamSection />
      </main>
      <Footer />
    </div>
  )
}
