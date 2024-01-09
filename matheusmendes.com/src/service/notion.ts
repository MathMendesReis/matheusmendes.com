// 'use server'
// import { env } from '@/env'
// import { NotionDatabaseResponse } from '@/types/notion-response'

// const { Client } = require('@notionhq/client')
// const notion = new Client({ auth: env.NOTION_KEY })
// const DATABASE_ID = env.NOTION_DATABASE_ID

// export async function getPosts() {
//   const response = await notion.databases.query({
//     database_id: DATABASE_ID,
//   })

//   const typedResponse = response as unknown as NotionDatabaseResponse

//   return typedResponse.results.map((post) => {
//     return {
//       id: post.id,
//       title: post.properties.title?.title?.[0]?.plain_text || '',
//       slug: post.properties.slug?.rich_text[0]?.plain_text || '',
//       tags: post.properties.tags?.multi_select?.map((tag) => tag.name) || '',
//       createdAt: post.created_time,
//     }
//   })
// }
