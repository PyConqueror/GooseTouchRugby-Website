import { GlobalConfig } from 'payload';
import { revalidatePath } from 'next/cache';

export const FixturesSectionGlobal: GlobalConfig = {
  slug: 'fixtures-section',
  label: 'Fixtures Section',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'featuredFixtures',
      type: 'relationship',
      label: 'Featured Fixtures',
      relationTo: 'fixtures', 
      hasMany: true,
      maxRows: 4,
      required: true,
      admin: {
        description: 'Select up to 4 fixtures to display in the fixtures section.',
      },
    },
  ],
  hooks: {
    afterChange: [
      ({ doc, req: { payload, context } }) => {
        if (!context.disableRevalidate) {
          payload.logger.info(`Revalidating homepage (Fixtures Section)`);
          revalidatePath('/'); 
        }
        return doc;
      },
    ],
  },
}; 