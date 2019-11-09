import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import SectionHeader from '../components/SectionHeader'

const NotificationGrid = ({ header, gridItems }) => (
  <div>
    <SectionHeader text={header} />

    <div className="is-primary is-info"></div>
    <section className="section">
      <div className="columns">
        <div className="column is-10 is-offset-1">
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
        </div>
      </div>
    </section>
  </div>
)

NotificationGrid.propTypes = {
  header: PropTypes.string,
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default NotificationGrid
