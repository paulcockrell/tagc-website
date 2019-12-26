import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SectionHeader from '../components/SectionHeader'
import SaleItems from '../components/SaleItems'

export const ForSalePageTemplate = ({
  title,
  description,
  sale_items,
}) => (
  <div className="content">
    <SectionHeader text={title} />
    <section className="section section--gradient">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <p>{description}</p>
          <SaleItems sale_items={sale_items} />
        </div>
      </div>
    </section>
  </div>
)

ForSalePageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  sale_items: PropTypes.array,
}

const ForSalePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ForSalePageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        sale_items={frontmatter.sale_items}
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
      frontmatter {
        title
        description
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
        }
      }
    }
  }
`
