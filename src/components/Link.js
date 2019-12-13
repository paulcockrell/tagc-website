import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const LinkGrid = ({ gridItems }) => (
  <section className="section">
    <div className="columns">
      <div className="column is-12">
        <div className="columns is-multiline">
          {(gridItems||[]).map(item => (
            <div key={item.heading} className="column">
                <div className="level">
                    <div className="level-item">
                        <figure className="image is-128x128">
                            <a href={item.url} alt={item.heading} rel="noopener noreferrer" target="_BLANK">
                              <PreviewCompatibleImage imageInfo={item} />
                            </a>
                        </figure>
                    </div>
                </div>
                <p className="block">
                  <a href={item.url} alt={item.heading} rel="noopener noreferrer" target="_BLANK">
                    <span className="is-capitalized has-text-weight-medium">{item.heading}</span>
                  </a>
                </p>
                <p className="block">
                  {item.description}
                </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

LinkGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    })
  ),
}

export default LinkGrid
