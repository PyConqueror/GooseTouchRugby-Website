import type { CollectionConfig } from 'payload';
import { revalidatePath } from 'next/cache';

export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      maxLength: 40,
    },
    {
      name: 'position',
      type: 'select',
      options: [
        "Wing",
        "Scrum Half",
        "Fly Half",
        "Center",
        "Full Back",
        "Prop",
        "Hooker",
        "Lock",
        "Flanker",
        "Wing",
        "Center",
        "Founder",
        "co-Founder",
        "Coach",
        "Fitness Coach",
        "Team Manager",
      ],
      required: true,
    },
    {
      name: 'experience',
      type: 'number',
      required: true,
      admin: {
        description: 'Years of experience',
      },
    },
    {
        name: 'image',
        type: 'upload',
        label: 'Featured Image',
        relationTo: 'profile-picture',
        required: true,
        admin: {
            description: 'Profile picture',
        },
      },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        description: 'Display order (lower numbers appear first)',
      },
    },  
  ],
  hooks: {
    afterChange: [
      ({ doc, req: { payload, context } }) => {
        if (!context.disableRevalidate) {
          payload.logger.info(`Revalidating Team Members`);
          revalidatePath('/');
          revalidatePath('/team');
        }
        return doc;
      },
    ],
  },
}; 