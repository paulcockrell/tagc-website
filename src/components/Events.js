import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import moment from 'moment'

const Events = ({ events_list }) => (
  <table className="table is-bordered is-striped is-fullwidth">
    <thead>
      <tr>
        <th>Date</th>
        <th>Club</th>
        <th>Type</th>
        <th>League</th>
      </tr>
    </thead>
    <tbody>
      {events_list.map(event => (
        <tr key={v4()}>
          <td>
            {moment(event.date).format('ll')}
          </td>
          <td>
            {event.club}
          </td>
          <td>
            {event.type}
          </td>
          <td>
            {event.league}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
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
