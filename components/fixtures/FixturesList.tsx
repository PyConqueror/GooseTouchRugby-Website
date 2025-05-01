"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import type { Fixture as FixtureType } from "@/payload-types"
import { formatDate, formatTime } from "@/utils/dateUtils"
// Define Fixture type (adjust based on actual data structure)

interface FixturesListProps {
  fixtures: FixtureType[]
  currentPage: number
  totalPages: number
  goToPrevPage: () => void
  goToNextPage: () => void
  setCurrentPage: (page: number) => void
}

export function FixturesList({
  fixtures,
  currentPage,
  totalPages,
  goToPrevPage,
  goToNextPage,
  setCurrentPage,
}: FixturesListProps) {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          {fixtures.length > 0 ? (
            <>
              {fixtures.map((fixture, index) => (
                <div
                  key={fixture.id}
                  className="group relative rounded-xl border-4 border-black bg-white p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-all hover:-translate-y-1 hover:rotate-1 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]"
                  style={{
                    // Inline animation - consider moving to global CSS
                    animationName: "fadeIn",
                    animationDuration: "0.5s",
                    animationTimingFunction: "ease-out",
                    animationFillMode: "forwards",
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                  }}
                >
                  {fixture.status !== "Upcoming" && fixture.result && (
                    <div
                      className={`absolute -top-4 -right-4 px-4 py-2 rounded-xl border-2 border-black font-bold text-white ${
                        fixture.status === "Won"
                          ? "bg-green-500"
                          : fixture.status === "Lost"
                          ? "bg-red-500"
                          : "bg-blue-500"
                      } transform rotate-6`}
                    >
                      {fixture.status.toUpperCase()}
                    </div>
                  )}

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-orange-500" />
                        <span className="text-sm font-bold bg-yellow-200 px-3 py-1 rounded-full border-2 border-black">
                          {formatDate(fixture.date)}
                        </span>
                      </div>
                      <h3 className="text-2xl font-heading">Goose Touch Rugby vs {fixture.opponent}</h3>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-orange-500" />
                        <span className="font-medium">{fixture.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-orange-500" />
                        <span className="font-medium">Kick-off: {formatTime(fixture.time)}</span>
                      </div>
                    </div>

                    {fixture.status !== "Upcoming" && fixture.result ? (
                      <div className="flex items-center justify-center col-span-1 lg:col-span-2">
                        <div className="bg-yellow-100 rounded-xl border-4 border-black p-4 w-full max-w-md">
                          <div className="flex justify-between items-center">
                            <div className="text-center space-y-2">
                              <div className="text-sm font-bold">Goose Touch Rugby</div>
                              <div className="text-4xl font-heading">{fixture.result?.ourScore}</div>
                            </div>
                            <div className="text-xl font-bold">VS</div>
                            <div className="text-center space-y-2">
                              <div className="text-sm font-bold">{fixture.opponent}</div>
                              <div className="text-4xl font-heading">{fixture.result?.opponentScore}</div>
                            </div>
                          </div>
                          <div className="mt-4 text-center">
                            <Button
                              variant="outline"
                              className="rounded-full border-2 border-black text-black hover:bg-yellow-200 shadow-[2px_2px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1"
                              // TODO: Add onClick handler for Match Report if needed
                            >
                              Match Report
                            </Button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center col-span-1 lg:col-span-2">
                        <div className="bg-yellow-100 rounded-xl border-4 border-black p-4 w-full max-w-md">
                          <div className="flex justify-between items-center">
                            <div className="text-center space-y-2">
                              <div className="text-sm font-bold">Goose Touch Rugby</div>
                              <Image
                                src="/logo.svg" // Assuming this path is correct
                                alt="Goose Touch Rugby Logo"
                                width={80}
                                height={80}
                                className="mx-auto"
                              />
                            </div>
                            <div className="text-xl font-bold">VS</div>
                            <div className="text-center space-y-2">
                              <div className="text-sm font-bold">{fixture.opponent}</div>
                              <div className="h-20 w-20 bg-gray-200 rounded-full mx-auto flex items-center justify-center border-2 border-black">
                                {/* Placeholder for opponent logo */}
                                <span className="text-xs">Logo</span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 text-center">
                            <Button className="rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1"
                              // TODO: Add onClick handler for Add to Calendar
                            >
                              Add to Calendar
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-12 flex flex-col items-center space-y-4">
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-2 border-black text-black hover:bg-yellow-200 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1"
                      onClick={goToPrevPage}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="h-5 w-5" />
                      <span className="sr-only">Previous Page</span>
                    </Button>

                    <div className="bg-yellow-200 px-4 py-2 rounded-full border-2 border-black font-bold">
                      Page {currentPage} of {totalPages}
                    </div>

                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-2 border-black text-black hover:bg-yellow-200 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1"
                      onClick={goToNextPage}
                      disabled={currentPage === totalPages}
                    >
                      <ChevronRight className="h-5 w-5" />
                      <span className="sr-only">Next Page</span>
                    </Button>
                  </div>

                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <button
                        key={index}
                        className={`h-3 w-3 rounded-full border-2 border-black ${
                          currentPage === index + 1 ? "bg-yellow-400" : "bg-white"
                        }`}
                        onClick={() => setCurrentPage(index + 1)}
                        aria-label={`Go to page ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl font-heading">No fixtures found for this category.</p>
            </div>
          )}
        </div>
      </div>
      {/* Global style needs to be moved or handled differently */}
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
    </section>
  )
} 