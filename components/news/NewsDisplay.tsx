"use client"

import { useState, useEffect } from "react"
import { NewsHeader } from "./NewsHeader"
import { NewsList } from "./NewsList"
import { NewsModal } from "@/components/news-modal" // Assuming modal path
import type { NewsArticle } from "@/types" // Assuming types path

interface NewsDisplayProps {
  initialArticles: NewsArticle[]
}

export function NewsDisplay({ initialArticles }: NewsDisplayProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const itemsPerPage = 6 // Or make this dynamic based on screen size if needed

  // Filtering logic
  const filteredNews = initialArticles.filter((article) => {
    if (
      searchQuery &&
      !article.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !(article.content && article.content.toLowerCase().includes(searchQuery.toLowerCase())) // Also search content
    )
      return false
    return true
  })

  // Calculate total pages whenever filtered news change
  useEffect(() => {
    const newTotalPages = Math.ceil(filteredNews.length / itemsPerPage)
    setTotalPages(newTotalPages > 0 ? newTotalPages : 1)
    // Reset to first page if current page is out of bounds
    if (currentPage > newTotalPages && newTotalPages > 0) {
      setCurrentPage(1)
    }
  }, [filteredNews, itemsPerPage, currentPage])

  // Reset page to 1 when search query changes
  useEffect(() => {
      setCurrentPage(1);
  }, [searchQuery]);

  // Get current items for the current page
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentArticles = filteredNews.slice(indexOfFirstItem, indexOfLastItem)

  // Pagination handlers
  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

   // Handler to set specific page (passed to NewsList)
  const handleSetCurrentPage = (page: number) => {
    setCurrentPage(page)
  }

  // Modal handlers
  const openArticle = (article: NewsArticle) => {
    setSelectedArticle(article)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    // Delay setting article to null to allow modal fade-out animation
    setTimeout(() => setSelectedArticle(null), 300) 
  }

  return (
    <>
      <NewsHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NewsList
        articles={currentArticles}
        currentPage={currentPage}
        totalPages={totalPages}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        setCurrentPage={handleSetCurrentPage}
        openArticle={openArticle}
        totalFilteredCount={filteredNews.length}
      />
      {/* Render modal conditionally based on selectedArticle to allow fade-out */}
      {isModalOpen && (
          <NewsModal article={selectedArticle} isOpen={isModalOpen} onClose={closeModal} />
      )}
    </>
  )
} 