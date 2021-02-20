import React from 'react'
import matter from 'gray-matter'

import Layout from '../components/Layout'
import BlogList from '../components/BlogList'

const Index = ({ title, description, allBlogs }) => (
  <Layout pathname="/" siteTitle={title} siteDescription={description}>
    <section>
      <BlogList allBlogs={allBlogs} />
    </section>
  </Layout>
)

export default Index

export function getStaticProps() {
  // get posts & context from folder
  const posts = (context => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../projects', true, /\.md$/))

  return {
    props: {
      allBlogs: posts,
    },
  }
}
