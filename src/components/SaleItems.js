import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import moment from 'moment'

const SaleItems = ({ sale_items }) => (
  <table className="table is-bordered is-striped is-fullwidth">
    <thead>
      <tr>
        <th>Date</th>
        <th>Title</th>
        <th>Description</th>
        <th>Images</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {sale_items.map(sale_item => (
        <tr key={v4()}>
          <td>
            {moment(sale_item.date).format('ll')}
          </td>
          <td>
            {sale_item.title}
          </td>
          <td>
            {sale_item.description}
          </td>
          <td>
            {sale_item.images}
          </td>
          <td>
            {sale_item.price}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
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
