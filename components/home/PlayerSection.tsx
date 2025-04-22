"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TeamMembersCarousel } from "./TeamMembersCarousel"

// Placeholder data - replace with your actual data fetching logic
const sampleTeamMembers = [
  { id: 1, name: "Goose 1", position: "Wing", image: "" },
  { id: 2, name: "Goose 2", position: "Center", image: "" },
  { id: 3, name: "Goose 3", position: "Link", image: "" },
  { id: 4, name: "Goose 4", position: "Wing", image: "" },
  { id: 5, name: "Goose 5", position: "Center", image: "" },
  { id: 6, name: "Goose 6", position: "Link", image: "" },
  { id: 7, name: "Goose 7", position: "Wing", image: "" },
  { id: 8, name: "Goose 8", position: "Center", image: "" },
]

export function PlayerSection() {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-yellow-50 relative">
      <div className="absolute top-10 left-10 w-20 h-20 md:w-32 md:h-32">
        <Image src="/membershipcard.png" alt="Cartoon Goose" width={150} height={150} />
      </div>
      <div className="absolute bottom-10 right-10 w-20 h-20 md:w-32 md:h-32">
        <Image src="/logoooo.png" alt="Cartoon Goose" width={150} height={150} />
      </div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
          <div className="inline-block rotate-[1deg] bg-yellow-300 px-6 py-3 rounded-xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-heading tracking-tighter sm:text-4xl md:text-5xl text-black">
              Meet Our Team
            </h2>
          </div>
          <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-medium">
            The dedicated players and coaches who make Goose Touch Rugby special.
          </p>
        </div>
        <TeamMembersCarousel teamMembers={sampleTeamMembers} showViewAllButton={true} />
      </div>
    </section>
  )
} 