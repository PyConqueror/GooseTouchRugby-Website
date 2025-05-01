"use client"

import { useState, useEffect } from "react"
import { NewsHeader } from "./NewsHeader"
import { NewsList } from "./NewsList"
import { NewsModal } from "@/components/shared/NewsModal" // Assuming modal path
import type { NewsArticle as NewsArticleType, NewsGlobal as NewsGlobalType } from "@/payload-types"

interface NewsDisplayProps {
  data: NewsGlobalType[]
}

export function NewsDisplay({ data }: NewsDisplayProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedArticle, setSelectedArticle] = useState<NewsArticleType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const itemsPerPage = 6 // Or make this dynamic based on screen size if needed

  // Helper type guard to check if an item is a NewsArticleType
  const isNewsArticle = (item: any): item is NewsArticleType => {
    return typeof item === 'object' && item !== null && 'id' in item && 'title' in item;
  };

  const filteredNews = data.filter(
    (article): article is NewsArticleType => {
      if (!isNewsArticle(article)) {
        return false // Skip if it's not a valid NewsArticle object
      }
      // Now TypeScript knows 'article' is NewsArticleType
      if (
        searchQuery &&
        !article.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        // Ensure content exists and is searchable (might be RichText, adjust as needed)
        article.content && typeof article.content === 'string' && // Basic check, adjust if content is complex
        !article.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false
      return true
    }
  );

  // Calculate total pages whenever filtered news change
  useEffect(() => {
    const count = filteredNews?.length || 0;
    const newTotalPages = Math.ceil(count / itemsPerPage)
    setTotalPages(newTotalPages > 0 ? newTotalPages : 1)
    // Reset to first page if current page is out of bounds
    if (currentPage > newTotalPages && newTotalPages > 0) {
      setCurrentPage(1)
    } else if (count === 0) {
      // Handle case where filter results in zero items
      setCurrentPage(1);
    }
  }, [filteredNews, itemsPerPage, currentPage])

  // Reset page to 1 when search query changes
  useEffect(() => {
      setCurrentPage(1);
  }, [searchQuery]);

  // Get current items for the current page
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  // Ensure currentArticles is always an array, even if filteredNews is undefined
  const currentArticles = filteredNews?.slice(indexOfFirstItem, indexOfLastItem) || [];

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
  const openArticle = (article: NewsArticleType) => {
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
        totalFilteredCount={filteredNews?.length || 0}
      />
      {/* Render modal conditionally based on selectedArticle to allow fade-out */}
      {isModalOpen && (
          <NewsModal article={selectedArticle} isOpen={isModalOpen} onClose={closeModal} />
      )}
    </>
  )
} 