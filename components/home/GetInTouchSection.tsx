"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

// Consider creating separate components for social media icons if reused elsewhere
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
  )
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  )
}

export function GetInTouchSection() {
  // TODO: Implement form submission logic
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Add form submission handling here (e.g., API call)
    console.log("Form submitted")
  }

  return (
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
              {/* Consider making contact details configurable */}
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
              {/* Add actual links to social media pages */}
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-2 border-black text-black hover:bg-yellow-200 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1"
              >
                <FacebookIcon className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-2 border-black text-black hover:bg-yellow-200 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1"
              >
                <InstagramIcon className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-2 border-black text-black hover:bg-yellow-200 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1"
              >
                <TwitterIcon className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>
          <div className="rounded-xl border-4 border-black bg-white p-6 shadow-[8px_8px_0px_rgba(0,0,0,1)] transform rotate-2">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-bold">
                    First name
                  </label>
                  <input
                    id="first-name"
                    name="firstName" // Added name attribute
                    required // Added required attribute
                    className="flex h-10 w-full rounded-lg border-2 border-black bg-yellow-50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-bold">
                    Last name
                  </label>
                  <input
                    id="last-name"
                    name="lastName" // Added name attribute
                    required // Added required attribute
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
                  name="email" // Added name attribute
                  type="email"
                  required // Added required attribute
                  className="flex h-10 w-full rounded-lg border-2 border-black bg-yellow-50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message" // Added name attribute
                  required // Added required attribute
                  className="flex min-h-[120px] w-full rounded-lg border-2 border-black bg-yellow-50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                ></textarea>
              </div>
              <Button type="submit" className="w-full rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 