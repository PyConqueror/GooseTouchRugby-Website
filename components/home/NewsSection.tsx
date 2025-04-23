"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NewsArticle as NewsArticleType, NewsGlobal as NewsGlobalType } from "@/payload-types"
import { NewsModal } from "@/components/news-modal"

interface NewsSectionProps {
  data: NewsGlobalType;
}

export function NewsSection({ data }: NewsSectionProps) {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticleType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const newsArticles = (data.featuredNews as NewsArticleType[]).slice(0, 3) //temp

  const openArticle = (article: NewsArticleType) => {
    setSelectedArticle(article)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedArticle(null)
  }

  return (
    <>
      <section id="news" className="w-full py-12 md:py-24 lg:py-32 bg-yellow-50 relative">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rotate-[1deg] bg-yellow-300 px-6 py-3 rounded-xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
              <h2 className="text-3xl font-heading tracking-tighter sm:text-4xl md:text-5xl text-black">
                Latest News
              </h2>
            </div>
            <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-medium">
              Stay updated with the latest happenings from Goose Touch Rugby.
            </p>
          </div>

          <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((news, i) => (
              <div
                key={i}
                className="group relative flex flex-col space-y-4 rounded-xl border-4 border-black bg-white p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-2 hover:rotate-1"
              >
                <div className="absolute right-4 top-4 z-10 rounded-full bg-yellow-300 px-3 py-1 text-xs font-bold border-2 border-black">
                  {news.category.toLowerCase()}
                </div>
                <div className="relative h-48 w-full overflow-hidden rounded-lg border-4 border-black">
                  <Image
                    src={typeof news.image === 'object' && news.image?.url ? news.image.url : "/placeholder.svg"}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="inline-block bg-yellow-200 px-3 py-1 text-sm font-bold rounded-full border-2 border-black">
                    {new Date(news.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                  <h3 className="text-xl font-heading">{news.title}</h3>
                  <p className="text-black whitespace-pre-wrap">
                    {news.content.split(' ').slice(0, 40).join(' ')}
                    {news.content.split(' ').length > 30 ? '...' : ''}
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-full rounded-full border-2 border-black text-black hover:bg-yellow-200 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1"
                  onClick={() => openArticle(news)} 
                >
                  Read More
                </Button>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/news">
              <Button className="rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1">
                View All News
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="white">
            <path d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,16C960,11,1056,21,1152,32C1248,43,1344,53,1392,58.7L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
          </svg>
        </div>
      </section>

      <NewsModal article={selectedArticle} isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
} 