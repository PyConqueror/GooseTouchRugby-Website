"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-yellow-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 -mt-8 -mr-8 md:-mt-12 md:-mr-12">
        <Image src="/cartoon-sun.svg" alt="Cartoon Sun" width={200} height={200} />
      </div>
      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rotate-[-2deg] bg-white px-4 py-2 rounded-xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
              <h1 className="text-3xl font-heading tracking-tighter sm:text-5xl xl:text-6xl/none text-black">
                Welcome to Goose Touch Rugby!
              </h1>
            </div>
            <p className="max-w-[600px] text-black md:text-xl font-medium">
              Join our flock of rugby enthusiasts where fun, fitness, and friendship come together on the field!
            </p>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Link href="/join">
                <Button className="rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1">
                  Join Our Team
                </Button>
              </Link>
              <Link href="/fixtures">
                <Button
                  variant="outline"
                  className="rounded-full border-2 border-black text-black hover:bg-yellow-200 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1"
                >
                  View Fixtures
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-full transform rotate-3 scale-105 border-4 border-black"></div>
              <Image
                src="/hero-image.svg"
                alt="Rugby players in action"
                width={500}
                height={400}
                className="relative rounded-3xl border-4 border-black transform -rotate-2"
              />
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