"use client"

import type React from "react"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { JoinHero } from "@/components/join/JoinHero"
import { JoinFormSection } from "@/components/join/JoinFormSection"
import { WhatToExpectSection } from "@/components/join/WhatToExpectSection"

export default function JoinPage() {
  return (
    <div className="flex min-h-screen flex-col bg-yellow-50 font-comic">
      <Navbar />
      <main className="flex-1">
        <JoinHero />
        <JoinFormSection />
        <WhatToExpectSection />
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
