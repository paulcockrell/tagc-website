import React from 'react'
import PropTypes from 'prop-types'
import { ForSalePageTemplate } from '../../templates/for-sale-page'

const ForSalePagePreview = ({ entry }) => {
  const entrySaleItems = entry.getIn(['data', 'sale_items'])
  const sale_items = entrySaleItems ? entrySaleItems.toJS() : []

  return (
    <ForSalePageTemplate
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      sale_items={sale_items}
    />
  )
}

ForSalePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default ForSalePagePreview
