import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { FixturesDisplay } from "@/components/fixtures/FixturesDisplay"
import { Fixture } from "@/components/fixtures/FixturesList"
import { SupportSection } from "@/components/fixtures/SupportSection"

async function getFixtures(): Promise<Fixture[]> {
  return [
    {
      id: 1,
      date: "May 15, 2025",
      opponent: "Flying Eagles",
      location: "Goose Field",
      time: "14:00",
      status: "upcoming",
      result: null,
    },
    {
      id: 2,
      date: "May 22, 2025",
      opponent: "Mountain Lions",
      location: "Lion's Den",
      time: "15:30",
      status: "upcoming",
      result: null,
    },
    {
      id: 3,
      date: "May 29, 2025",
      opponent: "River Hawks",
      location: "Goose Field",
      time: "14:00",
      status: "upcoming",
      result: null,
    },
    {
      id: 4,
      date: "June 5, 2025",
      opponent: "Valley Tigers",
      location: "Tiger Stadium",
      time: "16:00",
      status: "upcoming",
      result: null,
    },
    {
      id: 5,
      date: "June 12, 2025",
      opponent: "City Falcons",
      location: "Goose Field",
      time: "14:00",
      status: "upcoming",
      result: null,
    },
    {
      id: 6,
      date: "June 19, 2025",
      opponent: "Seaside Sharks",
      location: "Shark Tank",
      time: "15:30",
      status: "upcoming",
      result: null,
    },
    {
      id: 7,
      date: "June 26, 2025",
      opponent: "Forest Bears",
      location: "Goose Field",
      time: "14:00",
      status: "upcoming",
      result: null,
    },
    {
      id: 8,
      date: "July 3, 2025",
      opponent: "Desert Scorpions",
      location: "Scorpion Arena",
      time: "16:00",
      status: "upcoming",
      result: null,
    },
    {
      id: 9,
      date: "July 10, 2025",
      opponent: "Mountain Eagles",
      location: "Goose Field",
      time: "14:00",
      status: "upcoming",
      result: null,
    },
    {
      id: 10,
      date: "May 8, 2025",
      opponent: "River Hawks",
      location: "Hawk's Nest",
      time: "15:30",
      status: "past",
      result: { goose: 24, opponent: 18, outcome: "win" },
    },
    {
      id: 11,
      date: "May 1, 2025",
      opponent: "Mountain Lions",
      location: "Goose Field",
      time: "14:00",
      status: "past",
      result: { goose: 15, opponent: 22, outcome: "loss" },
    },
    {
      id: 12,
      date: "April 24, 2025",
      opponent: "Valley Tigers",
      location: "Tiger Stadium",
      time: "16:00",
      status: "past",
      result: { goose: 30, opponent: 12, outcome: "win" },
    },
    {
      id: 13,
      date: "April 17, 2025",
      opponent: "City Falcons",
      location: "Goose Field",
      time: "14:00",
      status: "past",
      result: { goose: 18, opponent: 18, outcome: "draw" },
    },
    {
      id: 14,
      date: "April 10, 2025",
      opponent: "Seaside Sharks",
      location: "Shark Tank",
      time: "15:30",
      status: "past",
      result: { goose: 22, opponent: 14, outcome: "win" },
    },
    {
      id: 15,
      date: "April 3, 2025",
      opponent: "Forest Bears",
      location: "Goose Field",
      time: "14:00",
      status: "past",
      result: { goose: 16, opponent: 20, outcome: "loss" },
    },
    {
      id: 16,
      date: "March 27, 2025",
      opponent: "Desert Scorpions",
      location: "Scorpion Arena",
      time: "16:00",
      status: "past",
      result: { goose: 28, opponent: 10, outcome: "win" },
    },
    {
      id: 17,
      date: "March 20, 2025",
      opponent: "Mountain Eagles",
      location: "Goose Field",
      time: "14:00",
      status: "past",
      result: { goose: 22, opponent: 22, outcome: "draw" },
    },
  ]
}

export default async function FixturesPage() {
  const initialFixtures = await getFixtures()

  return (
    <div className="flex min-h-screen flex-col bg-yellow-50 font-comic">
      <Navbar />
      <main className="flex-1">
        <FixturesDisplay initialFixtures={initialFixtures} />
        <SupportSection />
      </main>
      <Footer />
    </div>
  )
}
