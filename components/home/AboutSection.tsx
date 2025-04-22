"use client"

import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rotate-[-1deg] bg-yellow-300 px-6 py-3 rounded-xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-heading tracking-tighter sm:text-4xl md:text-5xl text-black">
              About Our Club
            </h2>
          </div>
          <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-medium">
            Goose Touch Rugby was founded in 2020 with a mission to create an inclusive environment for rugby
            enthusiasts of all skill levels.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-200 rounded-3xl transform rotate-3 scale-105 border-4 border-black"></div>
            <Image
              src="/about-image.svg"
              alt="Team huddle"
              width={550}
              height={310}
              className="relative mx-auto aspect-video overflow-hidden rounded-3xl border-4 border-black transform -rotate-2 sm:w-full"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-white rounded-xl border-4 border-black p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform rotate-1">
              <h3 className="text-xl font-heading">Our Philosophy</h3>
              <p className="text-black">
                We believe in the power of rugby to build character, promote fitness, and create lasting
                friendships.
              </p>
            </div>
            <div className="bg-white rounded-xl border-4 border-black p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform -rotate-1">
              <h3 className="text-xl font-heading">Inclusive Environment</h3>
              <p className="text-black">
                Whether you're a seasoned player or new to the sport, there's a place for you in our team.
              </p>
            </div>
            <div className="bg-white rounded-xl border-4 border-black p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform rotate-1">
              <h3 className="text-xl font-heading">Community Focus</h3>
              <p className="text-black">
                Beyond the field, we're committed to giving back to our local community through various initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#FEF9E7">
          <path d="M0,32L48,37.3C96,43,192,53,288,69.3C384,85,480,107,576,101.3C672,96,768,64,864,48C960,32,1056,32,1152,42.7C1248,53,1344,75,1392,85.3L1440,96L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  )
} 