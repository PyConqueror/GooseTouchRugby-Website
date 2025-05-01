import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/Footer"
import { NewsDisplay } from "@/components/news/NewsDisplay"
import { NewsletterSection } from "@/components/news/NewsletterSection"
import { getPayload } from "payload";
import config from "@/payload.config"


export default async function NewsPage() {
  const payload = getPayload({ config })
  const newsArticles = await (await payload).find({
    collection: "news-articles",
    limit: 1000,
    depth: 1,
  })


  return (
    <div className="flex min-h-screen flex-col bg-yellow-50 font-comic">
      <Navbar />
      <main className="flex-1">
        <NewsDisplay data={newsArticles.docs} />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
