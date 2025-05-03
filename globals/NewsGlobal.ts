import { GlobalConfig } from 'payload';
import { revalidatePath } from 'next/cache';
import type { NewsArticle } from '../payload-types';

export const NewsGlobal: GlobalConfig = {
  slug: 'news-global',
  label: 'News Section Information',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'featuredNews',
      type: 'relationship',
      label: 'Featured News Articles',
      relationTo: 'news-articles',
      hasMany: true,
      maxRows: 3, // Limit selection to 3 articles
      admin: {
        description: 'Select up to 3 news articles to feature globally.',
      },
    },
  ],
  hooks: {
    afterChange: [
      ({ doc, req: { payload, context } }) => {
        if (!context.disableRevalidate) {
          payload.logger.info(`Revalidating homepage (News Global)`);
          revalidatePath('/');
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