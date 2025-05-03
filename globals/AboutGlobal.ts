import { GlobalConfig } from 'payload';
import { revalidatePath } from 'next/cache';

// Helper function for word count validation
type ValidateFn = (value: string | null | undefined) => true | string;

const validateWordCount = (maxWords: number): ValidateFn => (value) => {
  if (value && typeof value === 'string') {
    const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
    if (wordCount > maxWords) {
      return `This field must contain no more than ${maxWords} words.`;
    }
  }
  return true;
};

export const AboutSectionGlobal: GlobalConfig = {
  slug: 'about-section',
  label: 'About Section Information',
  access: {
    read: () => true,
  },
  versions: {
    drafts: {
      autosave: true,
    },
  },
  fields: [
    {
      name: 'description',
      type: 'textarea',
      label: 'Section Description',
      required: true,
      validate: validateWordCount(40),
      admin: {
        description: 'The main introductory paragraph for the About section.',
      },
    },
    {
      name: 'firstBoxTitle',
      label: '1st Box Title',
      type: 'text',
      required: true,
      validate: validateWordCount(2),
    },
    {
      name: 'firstBoxDescription',
      label: '1st Box Description',
      type: 'textarea',
      required: true,
      validate: validateWordCount(20),
    },
    {
      name: 'secondBoxTitle',
      label: '2nd Box Title',
      type: 'text',
      required: true,
      validate: validateWordCount(2),
    },
    {
      name: 'secondBoxDescription',
      label: '2nd Box Description',
      type: 'textarea',
      required: true,
      validate: validateWordCount(20),
    },
    {
      name: 'thirdBoxTitle',
      label: '3rd Box Title',
      type: 'text',
      required: true,
      validate: validateWordCount(2),
    },
    {
      name: 'thirdBoxDescription',
      label: '3rd Box Description',
      type: 'textarea',
      required: true,
      validate: validateWordCount(20),
    },
  ],
  hooks: {
    afterChange: [
      ({ doc, req: { payload, context } }) => {
        if (!context.disableRevalidate) {
          payload.logger.info(`Revalidating homepage (About Section)`);
          revalidatePath('/');
        }
        return doc;
      },
    ],
  },
}; 