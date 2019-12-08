import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Events = ({ events }) => (
  <div>
    {events.map(event => (
      <article key={v4()} className="message">
        <div className="message-body">
          {event.title}
          {event.type}
          {event.league}
          <br />
          <cite> – {event.date}</cite>
        </div>
      </article>
    ))}
  </div>
)

Events.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      type: PropTypes.string,
      league: PropTypes.string,
      date: PropTypes.string,
    })
  ),
}

export default Events