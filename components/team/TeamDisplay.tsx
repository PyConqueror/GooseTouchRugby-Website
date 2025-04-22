"use client"

import { useState, useEffect } from "react"
import { TeamHeader } from "./TeamHeader"
import { TeamMembersGrid } from "./TeamMembersGrid"

// Define TeamMember type here or import from a shared types file
export interface TeamMember {
  id: number
  name: string
  position: string
  experience: string
  image: string
}

interface TeamDisplayProps {
  initialTeamMembers: TeamMember[]
}

export function TeamDisplay({ initialTeamMembers }: TeamDisplayProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(8) // Default value
  const [totalPages, setTotalPages] = useState(1)

  // Update items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      let newItemsPerPage = 4
      if (window.innerWidth >= 1280) { // xl
        newItemsPerPage = 12
      } else if (window.innerWidth >= 1024) { // lg
        newItemsPerPage = 9
      } else if (window.innerWidth >= 768) { // md
        newItemsPerPage = 6
      }
      setItemsPerPage(newItemsPerPage)
    }

    handleResize() // Set initial value
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize) // Clean up
  }, [])

  // Filter team members based on search query
  const filteredTeamMembers = initialTeamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.position.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Calculate total pages
  useEffect(() => {
    const newTotalPages = Math.ceil(filteredTeamMembers.length / itemsPerPage)
    setTotalPages(newTotalPages > 0 ? newTotalPages : 1) // Ensure totalPages is at least 1
    // Reset to first page if current page is out of bounds after filtering/resize
    if (currentPage > newTotalPages && newTotalPages > 0) {
      setCurrentPage(1)
    }
  }, [filteredTeamMembers, itemsPerPage, currentPage])

  // Get current items for the current page
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredTeamMembers.slice(indexOfFirstItem, indexOfLastItem)

  // Pagination handlers
  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  // Handler to set specific page (passed to TeamMembersGrid)
  const handleSetCurrentPage = (page: number) => {
      setCurrentPage(page);
  }

  return (
    <>
      <TeamHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TeamMembersGrid
        members={currentItems}
        currentPage={currentPage}
        totalPages={totalPages}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        setCurrentPage={handleSetCurrentPage} // Pass the handler
      />
    </>
  )
} 