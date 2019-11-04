import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <section className="section">
    <div className="columns">
      <div className="column is-10 is-offset-1">
        <h2 className="title">What does the club offer?</h2>
        <div className="columns is-multiline">
          {gridItems.map(item => (
            <div key={item.text} className="column">
                <div className="level">
                    <div className="level-item">
                        <figure className="image is-128x128">
                            <PreviewCompatibleImage imageInfo={item} />
                        </figure>
                    </div>
                </div>
                <p className="block">
                  {item.text}
                </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
