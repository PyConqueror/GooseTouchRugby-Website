"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type {TeamMember as TeamMemberType } from "@/payload-types"


interface TeamMembersGridProps {
  members: TeamMemberType[]
  currentPage: number
  totalPages: number
  goToPrevPage: () => void
  goToNextPage: () => void
  setCurrentPage: (page: number) => void
}

export function TeamMembersGrid({
  members,
  currentPage,
  totalPages,
  goToPrevPage,
  goToNextPage,
  setCurrentPage,
}: TeamMembersGridProps) {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        {members.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {members.map((member, index) => (
                <div
                  key={member.id}
                  className="group relative flex flex-col items-center space-y-4 rounded-xl border-4 border-black bg-white p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-all hover:-translate-y-2 hover:rotate-1 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]"
                  style={{
                    animationName: "fadeIn",
                    animationDuration: "0.5s",
                    animationTimingFunction: "ease-out",
                    animationFillMode: "forwards",
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                  }}
                >
                  <div className="absolute -top-3 -right-3 bg-yellow-300 rounded-full px-3 py-1 text-xs font-bold border-2 border-black transform rotate-12">
                    {member.experience} Years
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-300 rounded-full transform scale-105 border-4 border-black"></div>
                    <Image
                      src={(typeof member.image === 'object' && member.image?.url) || "/placeholder.svg"}
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
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <div className="relative w-32 h-32">
              <Image
                src="/cartoon-goose1.svg"
                alt="Sad Goose"
                width={150}
                height={150}
                className="transform -rotate-12"
              />
            </div>
            <h3 className="text-xl font-heading">No team members found</h3>
            <p className="text-black text-center max-w-md">
              We couldn't find any team members matching your search criteria. Try adjusting your search query.
            </p>
            {/* Reset button logic might need to be passed down or handled differently */}
            {/* Consider passing setSearchQuery as a prop if needed here */}
            {/* <Button
              onClick={() => {}}
              className="rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1"
            >
              Reset Search
            </Button> */}
          </div>
        )}
      </div>
      {/* Global style needs to be moved or handled differently if this is a shared component */}
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