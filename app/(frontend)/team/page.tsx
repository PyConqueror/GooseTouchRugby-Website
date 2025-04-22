"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/Footer"

export default function TeamPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Sample team data
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      position: "Wing",
      experience: "5 years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Sam Williams",
      position: "Scrum Half",
      experience: "3 years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Jordan Taylor",
      position: "Fly Half",
      experience: "7 years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "Casey Brown",
      position: "Center",
      experience: "4 years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 5,
      name: "Morgan Smith",
      position: "Full Back",
      experience: "6 years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 6,
      name: "Riley Wilson",
      position: "Prop",
      experience: "8 years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 7,
      name: "Jamie Davis",
      position: "Hooker",
      experience: "2 years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 8,
      name: "Taylor Moore",
      position: "Lock",
      experience: "5 years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 9,
      name: "Quinn Martin",
      position: "Flanker",
      experience: "3 years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 10,
      name: "Avery Thompson",
      position: "Number 8",
      experience: "7 years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 11,
      name: "Jordan Lee",
      position: "Wing",
      experience: "4 years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 12,
      name: "Cameron White",
      position: "Center",
      experience: "6 years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 13,
      name: "Drew Harris",
      position: "Coach",
      experience: "10 years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 14,
      name: "Reese Clark",
      position: "Assistant Coach",
      experience: "8 years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 15,
      name: "Finley Adams",
      position: "Team Manager",
      experience: "5 years",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

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
                  Meet Our Team
                </h1>
              </div>
              <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-medium">
                The dedicated players and coaches who make Goose Touch Rugby special.
              </p>
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
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="group relative flex flex-col items-center space-y-4 rounded-xl border-4 border-black bg-white p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-all hover:-translate-y-2 hover:rotate-1 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: "fadeIn 0.5s ease-out forwards",
                    opacity: 0,
                  }}
                >
                  <div className="absolute -top-3 -right-3 bg-yellow-300 rounded-full px-3 py-1 text-xs font-bold border-2 border-black transform rotate-12">
                    {member.experience}
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-300 rounded-full transform scale-105 border-4 border-black"></div>
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="relative rounded-full object-cover border-4 border-black h-36 w-36"
                    />
                  </div>
                  <h3 className="text-xl font-heading text-center">{member.name}</h3>
                  <p className="text-sm bg-yellow-200 px-3 py-1 rounded-full border-2 border-black font-bold">
                    {member.position}
                  </p>
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
                <h2 className="text-3xl font-heading tracking-tighter sm:text-4xl text-black">Join Our Team!</h2>
              </div>
              <p className="max-w-[600px] text-black md:text-xl/relaxed font-medium">
                We're always looking for new players to join our flock! Whether you're experienced or new to the sport,
                there's a place for you at Goose Touch Rugby.
              </p>
              <div className="relative">
                <div className="absolute -top-6 -right-6 transform rotate-12">
                  <div className="bg-white px-4 py-2 rounded-xl border-2 border-black shadow-md">
                    <p className="text-sm font-bold">No experience needed!</p>
                  </div>
                  <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r-2 border-b-2 border-black"></div>
                </div>
                <Button className="rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1 px-8 py-6 text-xl">
                  Sign Up Today!
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
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
