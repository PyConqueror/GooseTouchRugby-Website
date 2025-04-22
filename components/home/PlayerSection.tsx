"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PlayerSection() {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-yellow-50 relative">
      <div className="absolute top-10 left-10 w-20 h-20 md:w-32 md:h-32">
        <Image src="/cartoon-goose1.svg" alt="Cartoon Goose" width={150} height={150} />
      </div>
      <div className="absolute bottom-10 right-10 w-20 h-20 md:w-32 md:h-32">
        <Image src="/cartoon-goose2.svg" alt="Cartoon Goose" width={150} height={150} />
      </div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rotate-[1deg] bg-yellow-300 px-6 py-3 rounded-xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-heading tracking-tighter sm:text-4xl md:text-5xl text-black">
              Meet Our Team
            </h2>
          </div>
          <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-medium">
            The dedicated players and coaches who make Goose Touch Rugby special.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="flex flex-col items-center space-y-3 rounded-xl border-4 border-black bg-white p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1 hover:rotate-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-300 rounded-full transform scale-105 border-4 border-black"></div>
                <Image
                  src={`/placeholder.svg?height=200&width=200`}
                  alt={`Team member ${i}`}
                  width={100}
                  height={100}
                  className="relative rounded-full object-cover border-4 border-black"
                />
              </div>
              <h3 className="text-xl font-heading">Player Name</h3>
              <p className="text-sm bg-yellow-200 px-3 py-1 rounded-full border-2 border-black font-bold">
                Position
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/team">
            <Button className="rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1">
              View All Team Members
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 