import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import LinkGrid from '../components/Link'
import SectionHeader from '../components/SectionHeader'

export const LinksPageTemplate = ({
  title,
  description,
  links,
}) => (
  <div className="content">
    <SectionHeader text={title} />
    <section className="section section--gradient">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <p>{description}</p>
          <LinkGrid gridItems={links} />
        </div>
      </div>
    </section>
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
