import { GlobalConfig } from 'payload';
import { revalidateTag } from 'next/cache';
import type { NewsArticle } from '../payload-types';
export const NewsGlobal: GlobalConfig = {
  slug: 'news-global',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'featuredNews',
      type: 'relationship',
      label: 'Featured News Articles',
      relationTo: 'news-articles',
      hasMany: true, // Allow selecting multiple articles
      admin: {
        description: 'Select news articles to feature globally.',
      },
    },
  ],
  hooks: {
    afterChange: [
      ({ doc, req: { payload, context } }) => {
        if (!context.disableRevalidate) {
          payload.logger.info(`Revalidating`)
          revalidateTag('news-global')
        }
        return doc
      },
    ],  
    afterRead: [
      ({ doc, req: { payload, context } }) => {
        doc.featuredNews.sort((a: NewsArticle, b: NewsArticle) => new Date(b.date).getTime() - new Date(a.date).getTime())
        return doc
      },
    ],
  },
}; 