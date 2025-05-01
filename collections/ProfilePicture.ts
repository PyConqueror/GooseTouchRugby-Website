import type { CollectionConfig } from 'payload'

export const ProfilePicture: CollectionConfig = {
  slug: 'profile-picture',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Name',
      type: 'text',
      required: false,
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
