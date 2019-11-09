import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import LinkGrid from '../components/Link'

export const LinksPageTemplate = ({
  title,
  description,
  links,
}) => (
  <div className="content">
    <h2
      className="has-text-weight-bold is-size-1"
      style={{
        boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
        backgroundColor: '#f40',
        color: 'white',
        padding: '1rem',
      }}
    >
      {title}
    </h2>
    <h3>{description}</h3>
    <LinkGrid gridItems={links} />
  </div>
)

LinksPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.array,
}

const LinksPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <LinksPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        links={frontmatter.links}
      />
    </Layout>
  )
}

LinksPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default LinksPage

export const linksPageQuery = graphql`
  query LinksPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        links {
          heading
	  description
	  url
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
