import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

import { remark } from 'remark'
import html from 'remark-html'

const servicesDirectory = path.join(process.cwd(), 'app/services/content')

export async function getService(slug: string) {
  const fullPath = path.join(servicesDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)

  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return { slug, contentHtml, ...data as {
    title: string,
    date: string
  } }
}