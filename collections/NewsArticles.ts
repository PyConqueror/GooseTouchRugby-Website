import { CollectionConfig } from 'payload'

export const NewsArticles: CollectionConfig = {
  slug: 'news-articles',
  admin: {
    useAsTitle: 'title',
    description: 'Collection for news articles related to the team.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      maxLength: 70,
      admin: {
        description: 'The title of the news article (max 70 characters).',
      },
    },
    {
      name: 'date',
      type: 'date',
      label: 'Date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly', // Or 'dayAndTime' if needed
          displayFormat: 'dd-MM-yyyy', // Adjust format as needed
        },
        description: 'The publication date of the article.',
      },
    },
    {
      name: 'content',
      type: 'textarea',
      label: 'Content',
      required: true,
      admin: {
        description: 'The main body content of the news article.',
      },
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Featured Image',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'The main image for the news article.',
      },
    },
    {
      name: 'category',
      type: 'select',
      label: 'Category',
      required: true,
      options: [
        { label: 'Announcement', value: 'announcement' },
        { label: 'Team News', value: 'team-news' },
        { label: 'Player Spotlight', value: 'player-spotlight' },
        { label: 'Match Report', value: 'match-report' },
        { label: 'Sponsorship', value: 'sponsorship' },
        { label: 'Event', value: 'event' },
        { label: 'Match', value: 'match' },
        { label: 'Common', value: 'common' },
        { label: 'Training', value: 'training' },
      ],
      admin: {
        description: 'The category of the news article.',
      },
    },
  ],
}

