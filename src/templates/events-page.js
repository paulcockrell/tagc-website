import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SectionHeader from '../components/SectionHeader'
import Events from '../components/Events'

export const EventsPageTemplate = ({
  title,
  description,
  events_list,
}) => (
  <div className="content">
    <SectionHeader text={title} />
    <section className="section section--gradient">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <p>{description}</p>
          <Events events_list={events_list} />
        </div>
      </div>
    </section>
  </div>
)

EventsPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.array,
}

const EventsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout pageId={frontmatter.pageId}>
      <EventsPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        events_list={frontmatter.events_list}
      />
    </Layout>
  )
}

EventsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default EventsPage

export const eventsPageQuery = graphql`
  query EventsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
	pageId
        description
        events_list {
          club
          date
          type
          league
          results {
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
