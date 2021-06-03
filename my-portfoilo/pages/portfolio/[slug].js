import hydrate from 'next-mdx-remote/hydrate'
import { getFiles, getFileBySlug } from '../../lib/mdx'
import PortfolioLayout from '../../layouts/portfolio'
import MDXComponents from '../../components/MDXComponents'

export default function Blog({ mdxSource, frontMatter }) {
    const content = hydrate(mdxSource, {
        components: MDXComponents
    })

    return <PortfolioLayout frontMatter={frontMatter}>{content}</PortfolioLayout>
}
//
export async function getStaticPaths() {
    const posts = await getFiles('portfolio')

    return {
        paths: posts.map((p) => ({
            params: {
                slug: p.replace(/\.mdx/, '')
            }
        })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const post = await getFileBySlug('portfolio', params.slug)

    return { props: post }
}