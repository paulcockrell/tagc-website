import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const NotificationGrid = ({ gridItems }) => (
  <div>
    <div
      className="section-wrapper"
      style={{
        backgroundImage: 'url(/img/section-header.jpg)',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'top center',
        backgroundAttachment: 'scroll',
      }}
    >
      <section className="section">
        <h1>Club Notifcations</h1>
      </section>
    </div>

    <section className="section">
      <div className="columns is-multiline notifications">
        {gridItems.map(item => (
          <div key={item.text} className="column is-6">
            <section>
              <div className={ `notification is-${item.type}` }>
                <p>{item.text}</p>
              </div>
            </section>
          </div>
        ))}
      </div>
    </section>
  </div>
)

NotificationGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default NotificationGrid
