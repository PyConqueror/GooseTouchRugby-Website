import { GlobalConfig } from 'payload';
import { revalidateTag } from 'next/cache';

export const GetIntouchGlobal: GlobalConfig = {
  slug: 'get-in-touch',
  label: 'Get In Touch Information',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      label: 'Contact Email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Contact Phone Number',
      required: true,
    },
    {
      name: 'address',
      type: 'text',
      label: 'Address',
      required: true,
    },
    {
      name: 'instagram',
      type: 'text',
      label: 'Instagram URL',
      admin: {
        description: 'Enter the full URL for the Instagram profile.',
      },
    },
    {
      name: 'whatsapp',
      type: 'text',
      label: 'WhatsApp Link/Number',
      admin: {
        description: 'Enter the WhatsApp contact link or number.',
      },
    },
  ],
  hooks: {
    afterChange: [
      ({ doc, req: { payload, context } }) => {
        if (!context.disableRevalidate) {
          payload.logger.info(`Revalidating Get In Touch Global`);
          revalidateTag('get-in-touch');
        }
        return doc;
      },
    ],
  },
}; 