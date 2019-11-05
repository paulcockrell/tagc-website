import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import SectionHeader from '../components/SectionHeader'
import Notifications from '../components/Notifications'
import BlogRoll from '../components/BlogRoll'
import Navbar from '../components/Navbar'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  notifications,
  mainpitch,
  description,
  intro,
}) => (
  <div className="content is-landing-page">
    <div>
      <div className="columns has-no-margin-bottom">
        <div className="column has-background-primary is-vcentered is-centered is-mobile is-2 logo-container is-flex">
          <figure className="image is-128x128 has-margin-1">
            <PreviewCompatibleImage imageInfo={{ image: 'img/tagc-logo.jpg', alt: 'TAGC logo', style: { borderRadius: '290486px' } }} />
          </figure>
        </div>
        <div className="column is-vcentered is-centered is-10">
          <div className="tile is-ancestor is-flex-wrapped">
            <div className="tile is-parent is-12 has-background-dark has-padding-2">
              <div className="tile is-child has-padding-1">
                <Navbar />
              </div>
            </div>
            <div className="tile is-parent is-12 has-background-light">
              <div className="tile is-child has-padding-1">
                <div className="level">
                  <div className="level-left">
                    <div className="level-item">
                      Tayside Air Gun Club, Auchterhouse, Perthshire
                    </div>
                    <div className="level-item">
                      | enquires@taysideairgunclub.co.uk
                    </div>
                  </div>
                  <div className="level-right">
                    <div className="level-item">
                    F | T | Y
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
          }}
        >
          {title}
        </h2>
      </div>

      <Notifications gridItems={notifications} />

      <SectionHeader text="Welcome" />

      <section className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="container">
              {intro.description}
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
  heading: PropTypes.string,
  subheading: PropTypes.string,
  notices: PropTypes.shape({
    type: PropTypes.string,
    text: PropTypes.string,
  }),
  mainpitch: PropTypes.object,
  description: PropTypes.string,
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
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        notifications={frontmatter.notifications}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
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
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        notifications {
          type
          text
        }
        mainpitch {
          title
          description
        }
        description
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
