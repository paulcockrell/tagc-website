import React from 'react'
import PropTypes from 'prop-types'
import { EventsPageTemplate } from '../../templates/events-page'

const EventsPagePreview = ({ entry }) => {
  const entryEventsList = entry.getIn(['data', 'events_list'])
  const events_list = entryEventsList ? entryEventsList.toJS() : []

  return (
    <EventsPageTemplate
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      events_list={events_list}
    />
  )
}

EventsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default EventsPagePreview
