import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

const BlogList = ({ allBlogs }) => {
  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd()
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4)
  }

  return (
    <>
      <ul className="list">
        {allBlogs.length > 1 &&
          allBlogs.map( ({frontmatter,
            markdownBody,
            slug}) => (
            <Link key={slug} href={{ pathname: `/project/${slug}` }}>
              <a>
                <li>
                  <div>
                    <img
                      src={frontmatter.content[0]}
                      alt={frontmatter.hero_image}
                    />
                  </div>
                  <div>
                    <h2>{frontmatter.titulo}</h2>
                  </div>
                </li>
              </a>
            </Link>
          ))}
      </ul>
    </>
  )
}

export default BlogList
