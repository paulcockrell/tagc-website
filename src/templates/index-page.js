import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import SectionHeader from '../components/SectionHeader'
import Notifications from '../components/Notifications'
import Content from '../components/Content'

export const IndexPageTemplate = ({
  image,
  title,
  notificationsHeading,
  notifications,
  intro,
}) => (
  <div className="content is-landing-page">
    <div>
      <div
        className="is-jumbotron full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        }}
      >
        <h2
          className="is-jumbotron-text has-text-weight-bold is-size-4 has-background-polkadot"
          style={{
            boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
            color: 'white',
            padding: '1rem',
            maxWidth: '80%',
          }}
        >
          {title}
        </h2>
      </div>

      <Notifications header={notificationsHeading} gridItems={notifications} />

      <SectionHeader text={intro.heading} />

      <section className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="container">
              <Content className="paul" content={intro.description} />
            </div>
          </div>
        </div>
      </section>

      <Features gridItems={intro.blurbs} />
    </div>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  notificationsHeading: PropTypes.string,
  notifications: PropTypes.array,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        notificationsHeading={frontmatter.notificationsHeading}
        notifications={frontmatter.notifications}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        notificationsHeading
        notifications {
          type
          text
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
