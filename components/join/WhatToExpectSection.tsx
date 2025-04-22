import Image from "next/image"

export function WhatToExpectSection() {
  return (
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
  )
} 