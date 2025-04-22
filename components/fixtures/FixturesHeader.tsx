"use client"

import Image from "next/image"
import { Calendar, Trophy } from "lucide-react"

interface FixturesHeaderProps {
  activeTab: string
  setActiveTab: (tab: "upcoming" | "past") => void
}

export function FixturesHeader({ activeTab, setActiveTab }: FixturesHeaderProps) {
  return (
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
  )
} 