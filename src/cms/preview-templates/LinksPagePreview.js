import React from 'react'
import PropTypes from 'prop-types'
import { LinksPageTemplate } from '../../templates/links-page'

const LinksPagePreview = ({ entry, getAsset }) => {
  const entryLinks = entry.getIn(['data', 'links'])
  const links = entryLinks ? entryLinks.toJS() : []

  return (
    <LinksPageTemplate
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      links={links}
    />
  )
}

LinksPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default LinksPagePreview
