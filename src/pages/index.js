import React from "react"
import { graphql, Link } from "gatsby"

export default function MyFiles({ data }) {
  console.log(data)
  return (<>
      <div>My blog posts</div>
      <ul>
        {data.allMarkdownRemark.edges.map(foo => (<li>
          <Link
          to={foo.node.fields.slug}
          >
            {foo.node.frontmatter.title} - {foo.node.frontmatter.date}
          </Link>
          </li>))}
      </ul>
    </>
  )
}
export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`