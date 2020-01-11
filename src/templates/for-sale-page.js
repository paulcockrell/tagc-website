import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SectionHeader from '../components/SectionHeader'
import Content, { HTMLContent } from '../components/Content'
import SaleItems from '../components/SaleItems'

export const ForSalePageTemplate = ({
  title,
  content,
  sale_items,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <div className="content">
      <SectionHeader text={title} />
      <section className="section section--gradient">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <PageContent className="content" content={content} />
            <SaleItems sale_items={sale_items} />
          </div>
        </div>
      </section>
    </div>
  )
}

ForSalePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  sale_items: PropTypes.array,
}

const ForSalePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ForSalePageTemplate
        contentComponent={HTMLContent}
        sale_items={post.frontmatter.sale_items}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

ForSalePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ForSalePage

export const forSalePageQuery = graphql`
  query ForSalePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        sale_items {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          image {
            childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          price
          seller_name
        }
      }
    }
  }
`
