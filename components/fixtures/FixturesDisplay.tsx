"use client"

import { useState, useEffect } from "react"
import { FixturesHeader } from "./FixturesHeader"
import { FixturesList, Fixture } from "./FixturesList"

interface FixturesDisplayProps {
  initialFixtures: Fixture[]
}

export function FixturesDisplay({ initialFixtures }: FixturesDisplayProps) {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(4) // Default, will be updated
  const [totalPages, setTotalPages] = useState(1)

  // Update items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      let newItemsPerPage = 2 // sm and below default
      if (window.innerWidth >= 1280) { // xl
        newItemsPerPage = 5
      } else if (window.innerWidth >= 1024) { // lg
        newItemsPerPage = 4
      } else if (window.innerWidth >= 768) { // md
        newItemsPerPage = 3
      }
      setItemsPerPage(newItemsPerPage)
    }

    handleResize() // Set initial value
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize) // Clean up
  }, [])

  // Filter fixtures based on active tab
  const filteredFixtures = initialFixtures.filter(
    (fixture) => fixture.status === activeTab,
  )

  // Calculate total pages whenever filtered fixtures or itemsPerPage change
  useEffect(() => {
    const newTotalPages = Math.ceil(filteredFixtures.length / itemsPerPage)
    setTotalPages(newTotalPages > 0 ? newTotalPages : 1)

    // Reset to first page when changing tabs or if current page is out of bounds
    // Only reset if the currentPage is *not* already 1, to avoid unnecessary re-renders
    if (currentPage !== 1 && currentPage > newTotalPages) {
      setCurrentPage(1)
    }
  }, [filteredFixtures, itemsPerPage, currentPage]) // Include currentPage in dependency array

  // Reset page to 1 when the active tab changes
  useEffect(() => {
    setCurrentPage(1)
  }, [activeTab])

  // Get current items for the current page
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredFixtures.slice(indexOfFirstItem, indexOfLastItem)

  // Pagination handlers
  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  // Handler to set specific page (passed to FixturesList)
  const handleSetCurrentPage = (page: number) => {
    setCurrentPage(page)
  }

  // Handler to set active tab (passed to FixturesHeader)
  const handleSetActiveTab = (tab: "upcoming" | "past") => {
    setActiveTab(tab)
  }

  return (
    <>
      <FixturesHeader activeTab={activeTab} setActiveTab={handleSetActiveTab} />
      <FixturesList
        fixtures={currentItems}
        currentPage={currentPage}
        totalPages={totalPages}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        setCurrentPage={handleSetCurrentPage}
      />
    </>
  )
} 