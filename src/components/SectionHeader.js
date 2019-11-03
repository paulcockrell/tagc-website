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
      <h1>{text}</h1>
    </section>
  </div>
)

SectionHeader.propTypes = {
  text: PropTypes.string,
}

export default SectionHeader
