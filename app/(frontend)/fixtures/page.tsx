"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Trophy, Clock } from "lucide-react"
// Replace the header section with the Navbar component
import { Navbar } from "@/components/navbar"

export default function FixturesPage() {
  const [activeTab, setActiveTab] = useState("upcoming")

  // Sample fixtures data
  const fixtures = [
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
      date: "May 8, 2025",
      opponent: "River Hawks",
      location: "Hawk's Nest",
      time: "15:30",
      status: "past",
      result: { goose: 24, opponent: 18, outcome: "win" },
    },
    {
      id: 7,
      date: "May 1, 2025",
      opponent: "Mountain Lions",
      location: "Goose Field",
      time: "14:00",
      status: "past",
      result: { goose: 15, opponent: 22, outcome: "loss" },
    },
    {
      id: 8,
      date: "April 24, 2025",
      opponent: "Valley Tigers",
      location: "Tiger Stadium",
      time: "16:00",
      status: "past",
      result: { goose: 30, opponent: 12, outcome: "win" },
    },
    {
      id: 9,
      date: "April 17, 2025",
      opponent: "City Falcons",
      location: "Goose Field",
      time: "14:00",
      status: "past",
      result: { goose: 18, opponent: 18, outcome: "draw" },
    },
    {
      id: 10,
      date: "April 10, 2025",
      opponent: "Seaside Sharks",
      location: "Shark Tank",
      time: "15:30",
      status: "past",
      result: { goose: 22, opponent: 14, outcome: "win" },
    },
  ]

  const filteredFixtures = fixtures.filter((fixture) => fixture.status === activeTab)

  return (
    <div className="flex min-h-screen flex-col bg-yellow-50 font-comic">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-yellow-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 -mt-8 -mr-8 md:-mt-12 md:-mr-12">
            <Image src="/cartoon-sun.svg" alt="Cartoon Sun" width={200} height={200} />
          </div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rotate-[-2deg] bg-white px-6 py-3 rounded-xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                <h1 className="text-3xl font-heading tracking-tighter sm:text-4xl md:text-5xl text-black">
                  Fixtures & Results
                </h1>
              </div>
              <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-medium">
                Stay updated with all our upcoming matches and recent results.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="bg-white p-4 rounded-xl border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  <div className="flex gap-4">
                    <button
                      onClick={() => setActiveTab("upcoming")}
                      className={`px-4 py-2 rounded-xl border-2 border-black font-bold ${
                        activeTab === "upcoming" ? "bg-yellow-400" : "bg-yellow-200 hover:bg-yellow-300"
                      } transition-colors`}
                    >
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        <span>Upcoming Matches</span>
                      </div>
                    </button>
                    <button
                      onClick={() => setActiveTab("past")}
                      className={`px-4 py-2 rounded-xl border-2 border-black font-bold ${
                        activeTab === "past" ? "bg-yellow-400" : "bg-yellow-200 hover:bg-yellow-300"
                      } transition-colors`}
                    >
                      <div className="flex items-center gap-2">
                        <Trophy className="h-5 w-5" />
                        <span>Past Results</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="white">
              <path d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path>
            </svg>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              {filteredFixtures.map((fixture, index) => (
                <div
                  key={fixture.id}
                  className="group relative rounded-xl border-4 border-black bg-white p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-all hover:-translate-y-1 hover:rotate-1 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: "fadeIn 0.5s ease-out forwards",
                    opacity: 0,
                  }}
                >
                  {fixture.status === "past" && (
                    <div
                      className={`absolute -top-4 -right-4 px-4 py-2 rounded-xl border-2 border-black font-bold text-white ${
                        fixture.result?.outcome === "win"
                          ? "bg-green-500"
                          : fixture.result?.outcome === "loss"
                            ? "bg-red-500"
                            : "bg-blue-500"
                      } transform rotate-6`}
                    >
                      {fixture.result?.outcome === "win"
                        ? "WIN!"
                        : fixture.result?.outcome === "loss"
                          ? "LOSS"
                          : "DRAW"}
                    </div>
                  )}

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-orange-500" />
                        <span className="text-sm font-bold bg-yellow-200 px-3 py-1 rounded-full border-2 border-black">
                          {fixture.date}
                        </span>
                      </div>
                      <h3 className="text-2xl font-heading">Goose Touch Rugby vs {fixture.opponent}</h3>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-orange-500" />
                        <span className="font-medium">{fixture.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-orange-500" />
                        <span className="font-medium">Kick-off: {fixture.time}</span>
                      </div>
                    </div>

                    {fixture.status === "past" ? (
                      <div className="flex items-center justify-center col-span-1 lg:col-span-2">
                        <div className="bg-yellow-100 rounded-xl border-4 border-black p-4 w-full max-w-md">
                          <div className="flex justify-between items-center">
                            <div className="text-center space-y-2">
                              <div className="text-sm font-bold">Goose Touch Rugby</div>
                              <div className="text-4xl font-heading">{fixture.result?.goose}</div>
                            </div>
                            <div className="text-xl font-bold">VS</div>
                            <div className="text-center space-y-2">
                              <div className="text-sm font-bold">{fixture.opponent}</div>
                              <div className="text-4xl font-heading">{fixture.result?.opponent}</div>
                            </div>
                          </div>
                          <div className="mt-4 text-center">
                            <Button
                              variant="outline"
                              className="rounded-full border-2 border-black text-black hover:bg-yellow-200 shadow-[2px_2px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1"
                            >
                              Match Report
                            </Button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center col-span-1 lg:col-span-2">
                        <div className="bg-yellow-100 rounded-xl border-4 border-black p-4 w-full max-w-md">
                          <div className="flex justify-between items-center">
                            <div className="text-center space-y-2">
                              <div className="text-sm font-bold">Goose Touch Rugby</div>
                              <Image
                                src="/logo.svg"
                                alt="Goose Touch Rugby Logo"
                                width={80}
                                height={80}
                                className="mx-auto"
                              />
                            </div>
                            <div className="text-xl font-bold">VS</div>
                            <div className="text-center space-y-2">
                              <div className="text-sm font-bold">{fixture.opponent}</div>
                              <div className="h-20 w-20 bg-gray-200 rounded-full mx-auto flex items-center justify-center border-2 border-black">
                                <span className="text-xs">Logo</span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 text-center">
                            <Button className="rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1">
                              Add to Calendar
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-yellow-50 relative">
          <div className="absolute top-10 left-10 w-20 h-20 md:w-32 md:h-32 animate-bounce">
            <Image src="/cartoon-goose1.svg" alt="Cartoon Goose" width={150} height={150} />
          </div>
          <div
            className="absolute bottom-10 right-10 w-20 h-20 md:w-32 md:h-32 animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            <Image src="/cartoon-goose2.svg" alt="Cartoon Goose" width={150} height={150} />
          </div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="inline-block rotate-[1deg] bg-yellow-300 px-6 py-3 rounded-xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                <h2 className="text-3xl font-heading tracking-tighter sm:text-4xl text-black">Support Our Team!</h2>
              </div>
              <p className="max-w-[600px] text-black md:text-xl/relaxed font-medium">
                Come cheer us on at our next match! Bring your friends and family for a fun day of rugby.
              </p>
              <div className="relative">
                <div className="absolute -top-6 -right-6 transform rotate-12">
                  <div className="bg-white px-4 py-2 rounded-xl border-2 border-black shadow-md">
                    <p className="text-sm font-bold">Free entry for kids!</p>
                  </div>
                  <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r-2 border-b-2 border-black"></div>
                </div>
                <Button className="rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1 px-8 py-6 text-xl">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t-4 border-dashed border-yellow-400 py-6 md:py-0 bg-yellow-100">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Goose Touch Rugby Logo" width={40} height={40} className="h-10 w-auto" />
            <p className="text-sm font-bold text-black">© 2025 Goose Touch Rugby. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium text-black hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium text-black hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm font-medium text-black hover:underline underline-offset-4">
              Cookie Policy
            </Link>
          </nav>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
