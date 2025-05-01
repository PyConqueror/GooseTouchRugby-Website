import type { CollectionConfig } from 'payload'

export const OpponentPicture: CollectionConfig = {
  slug: 'opponent-picture',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Opponent Name',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    mimeTypes: ['image/jpeg', 'image/png'],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
        height: 300,
        position: 'centre',
      },
    ],
  
  },
}
