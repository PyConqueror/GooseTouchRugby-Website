import type { CollectionConfig } from 'payload'
import { revalidateTag } from 'next/cache';
export const Fixtures: CollectionConfig = {
  slug: 'fixtures',
  admin: {
    useAsTitle: 'modifedTitle',
    defaultColumns: ['opponent', 'date', 'status', 'location'],
    description: 'Upcoming and past rugby match details.',
  },
  fields: [
    {
      name: 'date',
      label: 'Match Date', 
      type: 'date',
      required: true,
      admin: {
        description: 'The date the match is scheduled for or was played.', 
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'dd/MM/yyyy',
        },
      },
    },
    {
      name: 'time',
      label: 'Kick-off Time',
      type: 'date',
      admin: {
        description: 'The scheduled kick-off time for the match.', 
        date: {
          pickerAppearance: 'timeOnly',
          displayFormat: 'HH:mm',
        },
      },
      required: true,
    },
    {
      name: 'modifedTitle',
      label: 'Modified Title', 
      type: 'text',
      required: false,
      admin: {
        description: 'The name of the opposing team.', 
        hidden: true,
      },
    },
    {
      name: 'opponent',
      label: 'Opponent Team', 
      type: 'text',
      required: true,
      admin: {
        description: 'The name of the opposing team.', 
      },
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Featured Image',
      relationTo: 'opponent-picture',
      required: false,
      admin: {
          description: 'Opponent Team Logo',
      },
    },
    {
      name: 'location',
      label: 'Match Location', 
      type: 'text',
      maxLength: 40,
      required: true,
      admin: {
        description: 'The venue or location where the match will be played.', 
      },
    },
    {
      name: 'status',
      label: 'Match Status', 
      type: 'select',
      options: [
        { label: 'Upcoming', value: 'Upcoming' },
        { label: 'Won', value: 'Won' },
        { label: 'Lost', value: 'Lost' },
        { label: 'Draw', value: 'Draw' },
      ],
      required: true,
      defaultValue: 'Upcoming',
      admin: {
        description: 'The current status of the match.', 
      },
    },
    {
      name: 'result',
      label: 'Final Result', 
      type: 'group',
      fields: [
        {
          name: 'ourScore',
          label: 'Our Score',
          type: 'number',
          required: false, 
          min: 0,
          defaultValue: 0,
          admin: {
              description: 'The final score achieved by our team.', 
          }
        },
        {
          name: 'opponentScore',
          label: 'Opponent Score',
          type: 'number',
          required: false, 
          min: 0,
          defaultValue: 0,
          admin: {
              description: 'The final score achieved by the opponent team.', // Added description
          }
        },
      ],
    },
  ],
  hooks: {
    afterRead: [
      ({ doc }) => {
        doc.modifedTitle = `Goose VS ${doc.opponent}`;
        return doc;
      }
    ],
    afterChange: [
      ({ doc, req: { payload, context } }) => {
        if (!context.disableRevalidate) {
          payload.logger.info(`Revalidating Fixtures`);
          revalidateTag('fixtures');
        }
        return doc;
      },
    ],
  },
};
