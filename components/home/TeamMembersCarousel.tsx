"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { TeamMember as TeamMemberType } from "@/payload-types"


interface TeamMembersCarouselProps {
  teamMembers: TeamMemberType[]
  showViewAllButton?: boolean
}

export function TeamMembersCarousel({ teamMembers, showViewAllButton = true }: TeamMembersCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(4)
  const [totalPages, setTotalPages] = useState(1)

  // Update items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        // xl
        setItemsPerPage(4)
      } else if (window.innerWidth >= 1024) {
        // lg
        setItemsPerPage(3)
      } else if (window.innerWidth >= 640) {
        // sm
        setItemsPerPage(2)
      } else {
        // mobile
        setItemsPerPage(1)
      }
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Calculate total pages
  useEffect(() => {
    setTotalPages(Math.ceil(teamMembers.length / itemsPerPage))
    // Reset to first page if current page would be out of bounds
    if (currentPage >= Math.ceil(teamMembers.length / itemsPerPage)) {
      setCurrentPage(0)
    }
  }, [teamMembers, itemsPerPage, currentPage])

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  // Get current items
  const currentItems = teamMembers.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  return (
    <div className="space-y-8">
      <div className="relative">
        {/* Navigation buttons */}
        <div className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 md:-left-6">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full border-2 border-black bg-white text-black hover:bg-yellow-200 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1"
            onClick={goToPrevPage}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous</span>
          </Button>
        </div>

        <div className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 md:-right-6">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full border-2 border-black bg-white text-black hover:bg-yellow-200 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1"
            onClick={goToNextPage}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next</span>
          </Button>
        </div>

        {/* Team members grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
          {currentItems.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center space-y-3 rounded-xl border-4 border-black bg-white p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1 hover:rotate-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-300 rounded-full transform scale-105 border-4 border-black"></div>
                <Image
                  src={(typeof member.image === 'object' && member.image?.url) || "/placeholder.svg"}
                  alt={`Team member ${member.name}`}
                  width={100}
                  height={100}
                  className="relative rounded-full object-cover border-4 border-black"
                />
              </div>
              <h3 className="text-xl font-heading">{member.name}</h3>
              <p className="text-sm bg-yellow-200 px-3 py-1 rounded-full border-2 border-black font-bold">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination indicators */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full border-2 border-black ${
              currentPage === index ? "bg-yellow-400" : "bg-white"
            }`}
            onClick={() => setCurrentPage(index)}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>

      {/* View all button */}
      {showViewAllButton && (
        <div className="flex justify-center mt-6">
          <Link href="/team">
            <Button className="rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1">
              View All Team Members
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
} 