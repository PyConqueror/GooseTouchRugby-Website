"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export function JoinFormSection() {
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
    // Reset form (optional, consider if you want to keep data or clear)
    // setFormData({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   phone: "",
    //   dateOfBirth: "",
    //   experience: "none",
    //   position: "",
    //   hearAbout: "",
    //   message: "",
    //   agreeTerms: false,
    // })
  }

  return (
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
                Thanks for your interest in joining Goose Touch Rugby! We've received your application and will be in
                touch soon.
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
  )
} 