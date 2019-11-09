import React from 'react'
import PropTypes from 'prop-types'
import { MembershipPageTemplate } from '../../templates/membership-page'

const MembershipPagePreview = ({ entry, widgetFor }) => (
  <MembershipPageTemplate
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
