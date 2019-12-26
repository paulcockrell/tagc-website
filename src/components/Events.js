import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import moment from 'moment'
import Modal from 'react-modal'

Modal.setAppElement(`#___gatsby`)

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.58)",
    zIndex: 999,
  },
  content: {
    position: "relative",
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    maxWidth: "960px",
    margin: "32px auto",
    padding: 0,
    border: 0,
  }
}

const Events = ({ events_list }) => {
  const [modal, setModal] = useState(false)
  const toggleModal = () => setModal(previousValue => !previousValue)
  const modalCloseTimeout = 300

  return (
    <div>
      <div className="#___gatsby"></div>
      <Modal
        isOpen={modal}
        onRequestClose={toggleModal}
        style={modalStyles}
        contentLabel="Modal"
        closeTimeoutMS={modalCloseTimeout}>
        <div>Hello</div>
      </Modal>
      <table className="table is-bordered is-striped is-fullwidth">
        <thead>
          <tr>
            <th>Date</th>
            <th>Club</th>
            <th>Type</th>
            <th>League</th>
            <th>Results</th>
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
              <td className="has-text-centered">
                {event.results ? (
                  <button className="button is-primary" onClick={() => toggleModal()}>
                    View results
                  </button>
                ) : <i>Not posted</i>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

Events.propTypes = {
  events_list: PropTypes.arrayOf(
    PropTypes.shape({
      club: PropTypes.string,
      type: PropTypes.string,
      league: PropTypes.string,
      date: PropTypes.string,
      results: PropTypes.array,
    })
  ),
}

export default Events
