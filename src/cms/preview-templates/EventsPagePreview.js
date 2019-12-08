import React from 'react'
import PropTypes from 'prop-types'
import { EventsPageTemplate } from '../../templates/events-page'

const EventsPagePreview = ({ entry }) => {
  const entryEvents = entry.getIn(['data', 'events'])
  const events = entryEvents ? entryEvents.toJS() : []

  return (
    <EventsPageTemplate
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      events={events}
    />
  )
}

EventsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default EventsPagePreview
