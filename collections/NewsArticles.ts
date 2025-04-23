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
        { label: 'Announcement', value: 'Announcement' },
        { label: 'Team News', value: 'Team News' },
        { label: 'Player Spotlight', value: 'Player Spotlight' },
        { label: 'Match Report', value: 'Match Report' },
        { label: 'Sponsorship', value: 'Sponsorship' },
        { label: 'Event', value: 'Event' },
        { label: 'Match', value: 'Match' },
        { label: 'Common', value: 'Common' },
        { label: 'Training', value: 'Training' },
      ],
      admin: {
        description: 'The category of the news article.',
      },
    },
  ],
}

