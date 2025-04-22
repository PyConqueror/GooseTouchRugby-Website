import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function NewsletterSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-yellow-50 relative">
      <div className="absolute top-10 left-10 w-20 h-20 md:w-32 md:h-32 animate-bounce">
        {/* Ensure image paths are correct */}
        <Image src="/prttt.png" alt="Cartoon Goose" width={150} height={150} />
      </div>
      <div
        className="absolute bottom-10 right-10 w-20 h-20 md:w-32 md:h-32 animate-bounce"
        style={{ animationDelay: "0.5s" }}
      >
        <Image src="/arng.png" alt="Cartoon Goose" width={150} height={150} />
      </div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="inline-block rotate-[1deg] bg-yellow-300 px-6 py-3 rounded-xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-heading tracking-tighter sm:text-4xl text-black">
              Subscribe to Our Newsletter
            </h2>
          </div>
          <p className="max-w-[600px] text-black md:text-xl/relaxed font-medium">
            Get the latest news, match updates, and team announcements delivered straight to your inbox!
          </p>
          <div className="relative max-w-md w-full">
            <div className="absolute -top-6 -right-6 transform rotate-12">
              <div className="bg-white px-4 py-2 rounded-xl border-2 border-black shadow-md">
                <p className="text-sm font-bold">Join our WhatsApp group!</p>
              </div>
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r-2 border-b-2 border-black"></div>
            </div>
            <div className="bg-white p-6 rounded-xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
              <div className="flex justify-center">
                {/* Ensure the WhatsApp link is correct */}
                <a href="https://whatsapp.com/channel/example-link" target="_blank" rel="noopener noreferrer">
                  <Button className="rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1 px-8 py-3">
                    Subscribe via WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 