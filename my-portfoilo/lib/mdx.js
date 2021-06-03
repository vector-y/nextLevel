import fs from 'fs'
import matter from 'gray-matter'
import mdxPrism from 'mdx-prism'
import path from 'path'
import readingTime from 'reading-time'
import renderToString from 'next-mdx-remote/render-to-string'

import MDXComponents from '../components/MDXComponents'

const root = process.cwd()

export async function getFiles(type){
    // reads in the files from our data folder!
    return fs.readdirSync(path.join(root, 'data', type))
}

export async function getFileBySlug(type, slug) {
    const source = slug 
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8')

    const { data, content } = matter(source)

    const mdxSource = await renderToString(content, {
        components: MDXComponents,
        mdxOptions: {
            remarkPlugins: [
                require('remark-autolink-headings'),
                require('remark-slug'),
                require('remark-code-titles'),
            ],
            rehypePlugins: [mdxPrism]
        }
    })

    return {    
        mdxSource,
        frontMatter: {
            wordCount: content.split(/\s+/gu).length,
            readingTime: readingTime(content),
            slug: slug || null,
            ...data
        }
    }
}