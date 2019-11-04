import React from 'react'
import PropTypes from 'prop-types'

const SectionHeader = ({ text }) => (
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
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <h1>{text}</h1>
        </div>
      </div>
    </section>
  </div>
)

SectionHeader.propTypes = {
  text: PropTypes.string,
}

export default SectionHeader
