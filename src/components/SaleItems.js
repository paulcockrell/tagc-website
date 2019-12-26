import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import { Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const SaleItems = ({ sale_items }) => (
  <div className="columns is-multiline">
    {sale_items &&
      sale_items.map(( sale_item ) => (
        <div className="is-parent column is-6" key={v4()}>
          <article
            className='blog-list-item tile is-child box notification'>
            <header>
              {sale_item.image ? (
                <div className="featured-thumbnail">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: sale_item.image,
                      alt: `image thumbnail for item ${sale_item.title}`,
                    }}
                  />
                </div>
              ) : null}
              <p className="post-meta">
                <h1
                  className="title has-text-primary is-size-4">
                  {sale_item.title}
                </h1>
                <span className="is-size-8 is-block">
                    Date listed: {sale_item.date}<br/>
                    Price: £{sale_item.price ? Number(sale_item.price).toFixed(2) : "Contact for price"}
                </span>
              </p>
            </header>
            <p>
              {sale_item.description}
            </p>
            <p>
              Contact: {sale_item.seller_name}
            </p>
          </article>
        </div>
      ))}
  </div>
)

SaleItems.propTypes = {
  sale_items: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      images: PropTypes.array,
      price: PropTypes.string,
    })
  ),
}

export default SaleItems
