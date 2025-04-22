"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, X } from "lucide-react"
import type { NewsArticle } from "@/types"

interface NewsModalProps {
  article: NewsArticle | null
  isOpen: boolean
  onClose: () => void
}

export function NewsModal({ article, isOpen, onClose }: NewsModalProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Don't render on server
  if (!isMounted) return null

  if (!isOpen || !article) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-xl border-4 border-black bg-white p-6 shadow-[8px_8px_0px_rgba(0,0,0,1)] transform rotate-1"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-10 rounded-full border-2 border-black hover:bg-yellow-200"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </Button>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-yellow-300 px-3 py-1 text-sm font-bold border-2 border-black">
              {article.category}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-orange-500" />
              <div className="text-sm font-bold">{article.date}</div>
            </div>
          </div>

          <h2 className="text-3xl font-heading">{article.title}</h2>

          <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg border-4 border-black">
            <Image
              src={article.image || "/placeholder.svg?height=400&width=800"}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-4">
            <p className="font-medium">{article.excerpt}</p>

            <div className="prose max-w-none">
              {/* Split content into paragraphs */}
              {article.content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button
              variant="outline"
              className="rounded-full border-2 border-black text-black hover:bg-yellow-200 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
