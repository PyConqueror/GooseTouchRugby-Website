"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
// Replace the header section with the Navbar component
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/Footer"

export default function JoinPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    experience: "none",
    position: "",
    hearAbout: "",
    message: "",
    agreeTerms: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // Show success message
    setFormSubmitted(true)
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      experience: "none",
      position: "",
      hearAbout: "",
      message: "",
      agreeTerms: false,
    })
  }

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
                  Join Our Flock!
                </h1>
              </div>
              <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-medium">
                Ready to become part of the Goose Touch Rugby family? Fill out the form below and we'll get back to you
                soon!
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
            <div className="mx-auto max-w-3xl">
              {formSubmitted ? (
                <div className="rounded-xl border-4 border-black bg-yellow-100 p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)] text-center">
                  <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-green-100 flex items-center justify-center border-4 border-black">
                    <CheckCircle className="h-12 w-12 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-heading mb-4">Application Submitted!</h2>
                  <p className="mb-6 text-lg">
                    Thanks for your interest in joining Goose Touch Rugby! We've received your application and will be
                    in touch soon.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                      <Button
                        variant="outline"
                        className="rounded-full border-2 border-black text-black hover:bg-yellow-200 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1"
                      >
                        Back to Home
                      </Button>
                    </Link>
                    <Link href="/fixtures">
                      <Button className="rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1">
                        View Upcoming Matches
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="rounded-xl border-4 border-black bg-white p-6 md:p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)] transform rotate-1">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-bold">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="flex h-10 w-full rounded-lg border-2 border-black bg-yellow-50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-bold">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="flex h-10 w-full rounded-lg border-2 border-black bg-yellow-50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="flex h-10 w-full rounded-lg border-2 border-black bg-yellow-50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-bold">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="flex h-10 w-full rounded-lg border-2 border-black bg-yellow-50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="dateOfBirth" className="text-sm font-bold">
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        required
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-lg border-2 border-black bg-yellow-50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="experience" className="text-sm font-bold">
                        Rugby Experience <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-lg border-2 border-black bg-yellow-50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                      >
                        <option value="none">None - Complete Beginner</option>
                        <option value="beginner">Beginner - Played a few times</option>
                        <option value="intermediate">Intermediate - Regular player</option>
                        <option value="advanced">Advanced - Experienced player</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="position" className="text-sm font-bold">
                        Preferred Position (if known)
                      </label>
                      <input
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-lg border-2 border-black bg-yellow-50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="hearAbout" className="text-sm font-bold">
                        How did you hear about us?
                      </label>
                      <input
                        id="hearAbout"
                        name="hearAbout"
                        value={formData.hearAbout}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-lg border-2 border-black bg-yellow-50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold">
                        Anything else you'd like to tell us?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="flex w-full rounded-lg border-2 border-black bg-yellow-50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                      ></textarea>
                    </div>

                    <div className="flex items-start space-x-3 pt-2">
                      <input
                        id="agreeTerms"
                        name="agreeTerms"
                        type="checkbox"
                        required
                        checked={formData.agreeTerms}
                        onChange={handleCheckboxChange}
                        className="h-5 w-5 rounded border-2 border-black accent-yellow-500"
                      />
                      <label htmlFor="agreeTerms" className="text-sm">
                        I agree to the{" "}
                        <Link href="#" className="text-yellow-600 underline hover:text-yellow-700">
                          terms and conditions
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="text-yellow-600 underline hover:text-yellow-700">
                          privacy policy
                        </Link>
                        . <span className="text-red-500">*</span>
                      </label>
                    </div>

                    <div className="relative">
                      <div className="absolute -top-6 -right-6 transform rotate-12">
                        <div className="bg-white px-4 py-2 rounded-xl border-2 border-black shadow-md">
                          <p className="text-sm font-bold">No experience needed!</p>
                        </div>
                        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r-2 border-b-2 border-black"></div>
                      </div>
                      <Button
                        type="submit"
                        className="w-full rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1 py-6 text-xl"
                      >
                        Submit Application
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-yellow-50 relative">
          <div className="absolute top-10 left-10 w-20 h-20 md:w-32 md:h-32 animate-bounce">
            <Image src="/bagoose.png" alt="Cartoon Goose" width={150} height={150} />
          </div>
          <div
            className="absolute bottom-10 right-10 w-20 h-20 md:w-32 md:h-32 animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            <Image src="/membershipcard.png" alt="Cartoon Goose" width={150} height={150} />
          </div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="inline-block rotate-[1deg] bg-yellow-300 px-6 py-3 rounded-xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                <h2 className="text-3xl font-heading tracking-tighter sm:text-4xl text-black">What to Expect Next</h2>
              </div>
              <p className="max-w-[600px] text-black md:text-xl/relaxed font-medium">
                After submitting your application, here's what happens next:
              </p>

              <div className="grid gap-6 md:grid-cols-3 max-w-4xl">
                <div className="bg-white rounded-xl border-4 border-black p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform rotate-1">
                  <div className="bg-yellow-300 h-12 w-12 rounded-full border-2 border-black flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-heading mb-2 text-center">Application Review</h3>
                  <p className="text-center">
                    Our team will review your application and get in touch within 2-3 business days.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-4 border-black p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform -rotate-1">
                  <div className="bg-yellow-300 h-12 w-12 rounded-full border-2 border-black flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-heading mb-2 text-center">Welcome Session</h3>
                  <p className="text-center">
                    You'll be invited to attend a welcome session to meet the team and learn the basics.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-4 border-black p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform rotate-1">
                  <div className="bg-yellow-300 h-12 w-12 rounded-full border-2 border-black flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-heading mb-2 text-center">Join the Flock</h3>
                  <p className="text-center">
                    Start attending regular training sessions and become an official member of Goose Touch Rugby!
                  </p>
                </div>
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
