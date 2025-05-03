import { GlobalConfig } from 'payload';
import { revalidatePath } from 'next/cache';

export const TeamMembersSectionGlobal: GlobalConfig = {
  slug: 'team-members-section',
  label: 'Team Members Section',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'featuredTeamMembers',
      type: 'relationship',
      label: 'Featured Team Members',
      relationTo: 'team-members', // Slug for TeamMembers collection
      hasMany: true,
      maxRows: 8, // Limit selection to 8 members
      required: true,
      admin: {
        description: 'Select up to 8 team members to display in the team section.',
      },
    },
  ],
  hooks: {
    afterChange: [
      ({ doc, req: { payload, context } }) => {
        if (!context.disableRevalidate) {
          payload.logger.info(`Revalidating homepage (Team Members Section)`);
          revalidatePath('/'); 
        }
        return doc;
      },
    ],
  },
}; 