import React from 'react'
import PropTypes from 'prop-types'
import { BasicPageTemplate } from '../../templates/basic-page'

const MembershipPagePreview = ({ entry, widgetFor }) => (
  <BasicPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

MembershipPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MembershipPagePreview
