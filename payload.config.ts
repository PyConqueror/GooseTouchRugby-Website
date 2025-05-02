// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { NewsArticles } from './collections/NewsArticles.ts'
import { TeamMembers } from './collections/TeamMembers.ts'
import { Fixtures } from './collections/Fixtures.ts'
import { NewsGlobal } from './globals/NewsGlobal.ts'
import { GetIntouchGlobal } from './globals/GetInTouchGlobal.ts'
import { AboutSectionGlobal } from './globals/AboutGlobal.ts'
import { ProfilePicture } from './collections/ProfilePicture.ts'
import { OpponentPicture } from './collections/OpponentPicture.ts'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      url: ({ globalConfig }) => {
        const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || '';
        if (globalConfig?.slug === 'get-in-touch') {
          return `${baseUrl}/#contact`;
        } 
        if (globalConfig?.slug === 'about-section') {
          return `${baseUrl}/#about`;
        }
        return baseUrl;
      },
      globals: ['get-in-touch', 'about-section'],
    },
  },
  collections: [Users, Media, NewsArticles, TeamMembers, Fixtures, ProfilePicture, OpponentPicture],
  globals: [GetIntouchGlobal, AboutSectionGlobal],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  sharp: sharp as any,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  plugins: [
    payloadCloudPlugin(),
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
        'profile-picture': true,
        'opponent-picture': true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
    // storage-adapter-placeholder
  ],
})
