"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Mail, Phone, ChevronRight } from "lucide-react"
import { NewsModal } from "@/components/news-modal"
import { Navbar } from "@/components/navbar"
import { Payload } from "payload"
import { HeroSection } from "@/components/home/HeroSection"
import { AboutSection } from "@/components/home/AboutSection"
import { PlayerSection } from "@/components/home/PlayerSection"
import { FixturesResultsSection } from "@/components/home/FixturesResultsSection"
import { NewsSection } from "@/components/home/NewsSection"
import { GetInTouchSection } from "@/components/home/GetInTouchSection"
import { Footer } from "@/components/Footer"
import type { NewsArticle } from "@/types"

export default function Home() {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openArticle = (article: NewsArticle) => {
    setSelectedArticle(article)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedArticle(null)
  }

  // Sample news data for the homepage
  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: "Pre-Season Training Starts Next Week",
      date: "April 18, 2025",
      excerpt: "Get ready for an exciting new season! Our pre-season training sessions begin next Monday at 6:30 PM.",
      content:
        "Get ready for an exciting new season! Our pre-season training sessions begin next Monday at 6:30 PM at Goose Field. All players, both returning and new, are encouraged to attend.\n\nCoach Drew has prepared a comprehensive training program to get everyone in shape for the upcoming season. The sessions will focus on core skills, fitness, and team strategy. Please bring appropriate footwear, water bottle, and weather-appropriate clothing.\n\nThe pre-season schedule will run for four weeks, with sessions every Monday and Thursday evening from 6:30 PM to 8:00 PM. This is a great opportunity for new players to get acquainted with the team and for returning players to shake off the rust before competitive matches begin.\n\nIf you're planning to attend but haven't yet registered for the season, please complete your registration form online or contact our team manager to ensure we have all your details up to date.\n\nWe're looking forward to seeing everyone there and kicking off what promises to be our best season yet!",
      image: "/news-1.svg",
      category: "Announcement",
    },
    {
      id: 2,
      title: "New Team Kit Unveiled",
      date: "April 10, 2025",
      excerpt:
        "We're excited to reveal our brand new team kit for the upcoming season, featuring our iconic goose logo.",
      content:
        "We're excited to reveal our brand new team kit for the upcoming season, featuring our iconic goose logo. The new design combines our traditional yellow and black colors with a modern twist.\n\nThe kit has been designed with both style and performance in mind. Made from high-quality, breathable fabric, the new jerseys will help keep players cool during intense matches. The design features our signature yellow as the primary color with black accents and a subtle goose pattern woven into the fabric.\n\nEach kit includes a jersey, shorts, and socks, all designed to match perfectly. Player names and numbers can be added for a small additional fee.\n\nPre-orders are now available through our online shop, with a special early bird discount of 15% for orders placed before May 1st. Team members can also place orders through the team manager to receive their player discount.\n\nThe new kits are expected to arrive by mid-May, just in time for our first match of the season. Don't miss out on being one of the first to sport our fresh new look!",
      image: "/news-2.svg",
      category: "Team News",
    },
    {
      id: 3,
      title: "Community Rugby Day Success",
      date: "March 28, 2025",
      excerpt:
        "Thank you to everyone who attended our Community Rugby Day. It was a fantastic event with over 200 participants!",
      content:
        "Thank you to everyone who attended our Community Rugby Day. It was a fantastic event with over 200 participants! We had a great time introducing new players to the sport and connecting with the local community.\n\nThe day featured a variety of activities for all ages, including touch rugby games, skills workshops, and a barbecue lunch. It was wonderful to see so many families come out and enjoy the beautiful weather while learning more about rugby.\n\nOur coaching staff did an amazing job running the skills stations, teaching the basics of passing, tackling (with pads!), and game strategy. The exhibition match between our senior players was a highlight, showcasing the excitement and camaraderie of the sport.\n\nSpecial thanks to our sponsors and volunteers who made this event possible. Local businesses provided food, drinks, and prizes for our raffle, while our dedicated volunteers ensured everything ran smoothly throughout the day.\n\nWe're pleased to announce that 15 new players signed up to join our club following the event, and we raised over $1,500 for new training equipment. This truly was a successful day for both our club and the community.\n\nWe're already looking forward to making next year's Community Rugby Day even bigger and better!",
      image: "/news-3.svg",
      category: "Event",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-yellow-50 font-comic">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PlayerSection />
        <FixturesResultsSection />
        <NewsSection newsArticles={newsArticles} openArticle={openArticle} />
        <GetInTouchSection />
      </main>
      <Footer />

      {/* News Modal */}
      <NewsModal article={selectedArticle} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
