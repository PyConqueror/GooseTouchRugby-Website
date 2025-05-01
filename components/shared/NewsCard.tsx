import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { NewsArticle as NewsArticleType } from "@/payload-types";
import { formatDate } from "@/utils/dateUtils";

interface NewsCardProps {
  news: NewsArticleType;
  openArticle: (article: NewsArticleType) => void;
}

export function NewsCard({ news, openArticle }: NewsCardProps) {
  return (
    <div
      className="group relative flex flex-col space-y-4 rounded-xl border-4 border-black bg-white p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-2 hover:rotate-1"
    >
      <div className="absolute right-4 top-4 z-10 rounded-full bg-yellow-300 px-3 py-1 text-xs font-bold border-2 border-black">
        {news.category}
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
          {formatDate(news.date)}
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
  );
} 