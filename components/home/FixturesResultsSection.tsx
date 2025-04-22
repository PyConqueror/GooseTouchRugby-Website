"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ChevronRight } from "lucide-react"

// Sample data - consider moving this to a separate file or fetching from an API
const matches = [
  {
    date: "May 15, 2025",
    opponent: "Flying Eagles",
    location: "Home",
    time: "14:00",
    result: "Upcoming",
  },
  { date: "May 8, 2025", opponent: "River Hawks", location: "Away", time: "15:30", result: "Won 24-18" },
  {
    date: "May 1, 2025",
    opponent: "Mountain Lions",
    location: "Home",
    time: "14:00",
    result: "Lost 15-22",
  },
  {
    date: "April 24, 2025",
    opponent: "Valley Tigers",
    location: "Away",
    time: "16:00",
    result: "Won 30-12",
  },
]

export function FixturesResultsSection() {
  return (
    <section id="fixtures" className="w-full py-12 md:py-24 lg:py-32 bg-white relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rotate-[-1deg] bg-yellow-300 px-6 py-3 rounded-xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-heading tracking-tighter sm:text-4xl md:text-5xl text-black">
              Fixtures & Results
            </h2>
          </div>
          <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-medium">
            Stay updated with our upcoming matches and recent results.
          </p>
        </div>
        <div className="mx-auto max-w-3xl space-y-6 mt-8">
          {matches.map((match, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 rounded-xl border-4 border-black p-4 bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1 hover:rotate-1"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-orange-500" />
                  <span className="text-sm font-bold bg-yellow-200 px-2 py-1 rounded-full border-2 border-black">
                    {match.date}
                  </span>
                </div>
                <h3 className="text-xl font-heading mt-2">Goose Touch Rugby vs {match.opponent}</h3>
              </div>
              <div className="flex flex-col sm:items-end gap-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  <span className="text-sm font-medium">
                    {match.location} • {match.time}
                  </span>
                </div>
                <span
                  className={`text-sm font-bold px-3 py-1 rounded-full border-2 border-black ${match.result === "Upcoming"
                      ? "bg-blue-200"
                      : match.result.includes("Won")
                        ? "bg-yellow-300"
                        : "bg-red-200"
                    }`}
                >
                  {match.result}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/fixtures">
            <Button
              variant="outline"
              className="rounded-full gap-1 border-2 border-black text-black hover:bg-yellow-200 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1"
            >
              View Full Schedule
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#FEF9E7">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,64C1248,64,1344,64,1392,64L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  )
} 