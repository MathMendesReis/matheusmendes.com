import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_BASE_URL_GITHUB: z.string().url(),
  NOTION_KEY: z.string(),
  NOTION_DATABASE_ID: z.string(),
})

const parsEnv = envSchema.safeParse(process.env)

if (!parsEnv.success) {
  console.error(
    'Invalid enviroment variables',
    parsEnv.error.flatten().fieldErrors,
  )

  throw new Error('Invalid enviroment variables')
}

export const env = parsEnv.data
