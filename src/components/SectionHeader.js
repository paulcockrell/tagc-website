import React from 'react'
import PropTypes from 'prop-types'

const SectionHeaderStyles = {
  backgroundImage: 'url(/img/section-header.jpg)',
  backgroundRepeat: 'repeat',
  backgroundPosition: 'top center',
  backgroundAttachment: 'scroll',
};

const SectionHeader = ({ text, hasBackgroundImage = true }) => (
  <div
    className="section-wrapper"
    style={(hasBackgroundImage == true ? SectionHeaderStyles : {})}
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
  hasBackgroundImage: PropTypes.string,
  text: PropTypes.string,
}

export default SectionHeader
