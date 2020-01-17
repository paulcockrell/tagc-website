import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import LinksPagePreview from './preview-templates/LinksPagePreview'
import BasicPagePreview from './preview-templates/BasicPagePreview'
import EventsPagePreview from './preview-templates/EventsPagePreview'
import ForSalePagePreview from './preview-templates/ForSalePagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('reports', BasicPagePreview)
CMS.registerPreviewTemplate('membership', BasicPagePreview)
CMS.registerPreviewTemplate('committee', BasicPagePreview)
CMS.registerPreviewTemplate('articles', BasicPagePreview)
CMS.registerPreviewTemplate('links', LinksPagePreview)
CMS.registerPreviewTemplate('events', EventsPagePreview)
CMS.registerPreviewTemplate('for sale', ForSalePagePreview)
