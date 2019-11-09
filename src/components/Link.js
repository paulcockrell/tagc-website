import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const LinkGrid = ({ gridItems }) => (
  <section className="section">
    <div className="columns">
      <div className="column is-10 is-offset-1">
        <div className="columns is-multiline">
          {(gridItems||[]).map(item => (
            <div key={item.heading} className="column is-6">
              <div className="card">
                <div className="card-image">
                  <a href={item.url} alt={item.heading} target="_BLANK">
                    <figure className="image is-128x128">
                      <PreviewCompatibleImage imageInfo={item} />
                    </figure>
                  </a>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <a href={item.url} alt={item.heading} target="_BLANK">
                        <p className="is-capitalized has-text-weight-medium">{item.heading}</p>
                      </a>
                    </div>
                  </div>
                  <div className="content">
                    {item.description}
                  </div>
                </div>
              </div>
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
