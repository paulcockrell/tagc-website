import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import moment from 'moment'
import Modal from 'react-modal'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

Modal.setAppElement('#eventResults')

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.58)",
    zIndex: 999,
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  content: {
    position: "absolute",
    top: "20px",
    left: "20px",
    right: "20px",
    bottom: "20px",
    maxWidth: "960px",
    maxHeight: "95%",
    margin: "auto auto",
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
      <div id="eventResults"></div>
      <Modal
        isOpen={modal}
        onRequestClose={toggleModal}
        style={modalStyles}
        contentLabel="Modal"
        closeTimeoutMS={modalCloseTimeout}>
        {modal &&
          modalContent.map(resultImgSrc => (
            <div key={v4()}>
              <button onClick={toggleModal}>Close results</button>
              <PreviewCompatibleImage imageInfo={resultImgSrc} />
            </div>
          ))
        }
      </Modal>
      <p className="is-hidden-tablet">
        <i>Scroll right to view the whole table.</i>
      </p>
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
