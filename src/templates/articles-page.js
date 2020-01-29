import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SectionHeader from '../components/SectionHeader'
import Content, { HTMLContent } from '../components/Content'
import { v4 } from 'uuid'

export const ArticlesPageTemplate = ({
  title,
  content,
  contentComponent,
  articles
}) => {
  const PageContent = contentComponent || Content

  return (
    <div className="content">
      <SectionHeader text={title} />
      <section className="section section--gradient">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <PageContent className="content" content={content} />
              { articles.length < 1 && ("There are currently no articlese published.") }
              { articles.length > 0 && (
                <div className="articles">
                  <strong>Click on the links to download the PDF articles:</strong>
                  <ul>
                    {articles.map(article => (
                      <li key={v4()}>
                        <a href={article["file"]["publicURL"]}>{article["title"]}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        </div>
      </section>
    </div>
  )
}

ArticlesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  articles: PropTypes.array,
}

const ArticlesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout pageId={post.frontmatter.pageId}>
      <ArticlesPageTemplate
        title={post.frontmatter.title}
        content={post.html}
        contentComponent={HTMLContent}
        articles={post.frontmatter.articles}
      />
    </Layout>
  )
}

ArticlesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ArticlesPage

export const articlesPageQuery = graphql`
  query ArticlesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
	pageId
        articles {
          title
          file {
            id
            publicURL
            relativeDirectory
            dir
            name
          }
        }
      }
    }
  }
`
