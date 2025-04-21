"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Mail, Phone, ChevronRight } from "lucide-react"
import { NewsModal } from "@/components/news-modal"
// Replace the entire header section with the Navbar component
import { Navbar } from "@/components/navbar"

export default function Home() {
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openArticle = (article) => {
    setSelectedArticle(article)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Sample news data for the homepage
  const newsArticles = [
    {
      title: "Pre-Season Training Starts Next Week",
      date: "April 18, 2025",
      excerpt: "Get ready for an exciting new season! Our pre-season training sessions begin next Monday at 6:30 PM.",
      content:
        "Get ready for an exciting new season! Our pre-season training sessions begin next Monday at 6:30 PM at Goose Field. All players, both returning and new, are encouraged to attend.\n\nCoach Drew has prepared a comprehensive training program to get everyone in shape for the upcoming season. The sessions will focus on core skills, fitness, and team strategy. Please bring appropriate footwear, water bottle, and weather-appropriate clothing.\n\nThe pre-season schedule will run for four weeks, with sessions every Monday and Thursday evening from 6:30 PM to 8:00 PM. This is a great opportunity for new players to get acquainted with the team and for returning players to shake off the rust before competitive matches begin.\n\nIf you're planning to attend but haven't yet registered for the season, please complete your registration form online or contact our team manager to ensure we have all your details up to date.\n\nWe're looking forward to seeing everyone there and kicking off what promises to be our best season yet!",
      image: "/news-1.svg",
      category: "Announcement",
    },
    {
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
              {[
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
              ].map((match, i) => (
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
                      className={`text-sm font-bold px-3 py-1 rounded-full border-2 border-black ${
                        match.result === "Upcoming"
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

        <section id="news" className="w-full py-12 md:py-24 lg:py-32 bg-yellow-50 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rotate-[1deg] bg-yellow-300 px-6 py-3 rounded-xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                <h2 className="text-3xl font-heading tracking-tighter sm:text-4xl md:text-5xl text-black">
                  Latest News
                </h2>
              </div>
              <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-medium">
                Stay updated with the latest happenings from Goose Touch Rugby.
              </p>
            </div>

            <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
              {newsArticles.map((news, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col space-y-4 rounded-xl border-4 border-black bg-white p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-2 hover:rotate-1"
                >
                  <div className="absolute right-4 top-4 z-10 rounded-full bg-yellow-300 px-3 py-1 text-xs font-bold border-2 border-black">
                    {news.category}
                  </div>
                  <div className="relative h-48 w-full overflow-hidden rounded-lg border-4 border-black">
                    <Image
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="inline-block bg-yellow-200 px-3 py-1 text-sm font-bold rounded-full border-2 border-black">
                      {news.date}
                    </div>
                    <h3 className="text-xl font-heading">{news.title}</h3>
                    <p className="text-black">{news.excerpt}</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-2 border-black text-black hover:bg-yellow-200 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1"
                    onClick={() => openArticle(news)}
                  >
                    Read More
                  </Button>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Link href="/news">
                <Button className="rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1">
                  View All News
                </Button>
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="white">
              <path d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,16C960,11,1056,21,1152,32C1248,43,1344,53,1392,58.7L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
            </svg>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white relative">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rotate-[-1deg] bg-yellow-300 px-6 py-3 rounded-xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                  <h2 className="text-3xl font-heading tracking-tighter sm:text-4xl md:text-5xl text-black">
                    Get In Touch
                  </h2>
                </div>
                <p className="text-black md:text-xl font-medium">
                  Have questions about joining our team or attending our matches? We'd love to hear from you!
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-yellow-100 p-3 rounded-xl border-2 border-black">
                    <div className="bg-yellow-300 p-2 rounded-full border-2 border-black">
                      <Mail className="h-5 w-5 text-black" />
                    </div>
                    <span className="font-medium">info@goosetouvhrugby.com</span>
                  </div>
                  <div className="flex items-center gap-3 bg-yellow-100 p-3 rounded-xl border-2 border-black">
                    <div className="bg-yellow-300 p-2 rounded-full border-2 border-black">
                      <Phone className="h-5 w-5 text-black" />
                    </div>
                    <span className="font-medium">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 bg-yellow-100 p-3 rounded-xl border-2 border-black">
                    <div className="bg-yellow-300 p-2 rounded-full border-2 border-black">
                      <MapPin className="h-5 w-5 text-black" />
                    </div>
                    <span className="font-medium">123 Rugby Field Lane, Sportsville</span>
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-2 border-black text-black hover:bg-yellow-200 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-2 border-black text-black hover:bg-yellow-200 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-2 border-black text-black hover:bg-yellow-200 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Button>
                </div>
              </div>
              <div className="rounded-xl border-4 border-black bg-white p-6 shadow-[8px_8px_0px_rgba(0,0,0,1)] transform rotate-2">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-bold">
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-lg border-2 border-black bg-yellow-50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-bold">
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-lg border-2 border-black bg-yellow-50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-lg border-2 border-black bg-yellow-50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-lg border-2 border-black bg-yellow-50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                    ></textarea>
                  </div>
                  <Button className="w-full rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1">
                    Send Message
                  </Button>
                </form>
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

      {/* News Modal */}
      <NewsModal article={selectedArticle} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
