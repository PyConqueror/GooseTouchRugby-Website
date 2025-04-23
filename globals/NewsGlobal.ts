import { GlobalConfig } from 'payload';

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
}; 