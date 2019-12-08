import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Events = ({ events_list }) => (
  <div>
    {events_list.map(event => (
      <article key={v4()} className="message">
        <div className="message-body">
          {event.club}
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
  events_list: PropTypes.arrayOf(
    PropTypes.shape({
      club: PropTypes.string,
      type: PropTypes.string,
      league: PropTypes.string,
      date: PropTypes.string,
    })
  ),
}

export default Events
