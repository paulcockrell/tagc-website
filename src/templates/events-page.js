import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Events from '../components/Events'

export const EventsPageTemplate = ({
  title,
  description,
  events,
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
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-7 is-offset-1">
              <p>{description}</p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Events events={events} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

EventsPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  events: PropTypes.shape({
    heading: PropTypes.string,
    date: PropTypes.string,
    type: PropTypes.string,
    league: PropTypes.string
  }),
}

const EventsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <EventsPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        events={frontmatter.events}
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
        description
        events_list {
          club
          date
          type
          league
        }
      }
    }
  }
`
