import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import moment from 'moment'
import Modal from 'react-modal'

if (document.getElementById('eventResults')) {
  Modal.setAppElement('#eventResults')
}

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
    padding: "10px",
    border: 0,
  }
}

const Events = ({ events_list }) => {
  const [modal, setModal] = useState(false)
  const [modalContent, setModalContent] = useState("")
  const toggleModal = (content) => {
    setModal(previousValue => !previousValue)
    setModalContent(content || "")
  }
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
        {modal &&
          modalContent.map(results => (
            <div key={v4()}>
              <h1 className="has-text-weight-semibold is-size-5 heading">{results.group}</h1>
              <div className="table-container">
                <table className="table is-bordered is-striped is-fullwidth">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Club</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results && results.participants.map(participant => (
                      <tr key={v4()}>
                        <td>
                          {participant.name}
                        </td>
                        <td>
                          {participant.club}
                        </td>
                        <td>
                          {participant.score}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))
        }
      </Modal>
      <div className="table-container">
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
                    <button className="button is-primary" onClick={() => toggleModal(event.results)}>
                      View results
                    </button>
                  ) : <i>Not posted</i>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
