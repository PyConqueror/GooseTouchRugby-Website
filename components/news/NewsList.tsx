"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import type { NewsArticle as NewsArticleType } from "@/payload-types"
interface NewsListProps {
  articles: NewsArticleType[]
  currentPage: number
  totalPages: number
  goToPrevPage: () => void
  goToNextPage: () => void
  setCurrentPage: (page: number) => void
  openArticle: (article: NewsArticleType) => void
  totalFilteredCount: number // Pass the total count for the header
}

export function NewsList({
  articles,
  currentPage,
  totalPages,
  goToPrevPage,
  goToNextPage,
  setCurrentPage,
  openArticle,
  totalFilteredCount,
}: NewsListProps) {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-heading">All News</h2>
            <div className="h-1 flex-1 mx-4 bg-yellow-300 rounded-full"></div>
            {totalFilteredCount > 0 && (
              <div className="bg-yellow-200 px-3 py-1 rounded-full border-2 border-black font-bold">
                {totalFilteredCount} {totalFilteredCount === 1 ? "Article" : "Articles"}
              </div>
            )}
          </div>

          {articles.length > 0 ? (
            <>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article, index) => (
                  <div
                    key={article.id}
                    className="group relative flex flex-col space-y-4 rounded-xl border-4 border-black bg-white p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-all hover:-translate-y-2 hover:rotate-1 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]"
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
                    <div className="absolute right-4 top-4 z-10 rounded-full bg-yellow-300 px-3 py-1 text-xs font-bold border-2 border-black">
                      {article.category}
                    </div>
                    <div className="relative h-40 w-full overflow-hidden rounded-lg border-4 border-black">
                      <Image
                        src={typeof article.image === 'object' && article.image?.url ? article.image.url : "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-orange-500" />
                        <div className="inline-block bg-yellow-200 px-3 py-1 text-sm font-bold rounded-full border-2 border-black">
                        {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}                        </div>
                      </div>
                      <h3 className="text-xl font-heading">{article.title}</h3>
                      <p className="text-black line-clamp-3 break-all">{article.content}</p>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-2 border-black text-black hover:bg-yellow-200 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1"
                      onClick={() => openArticle(article)}
                    >
                      Read More
                    </Button>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-12">
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
              )}
            </>
          ) : (
             <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <div className="relative w-32 h-32">
                <Image
                  src="/prttt.png" // Assuming this is the intended sad goose image
                  alt="Sad Goose"
                  width={150}
                  height={150}
                  className="transform -rotate-12"
                />
              </div>
              <h3 className="text-xl font-heading">No articles found</h3>
              <p className="text-black text-center max-w-md">
                We couldn't find any articles matching your search criteria.
              </p>
              {/* Reset button is now handled in the parent component */}
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