import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import LinksPagePreview from './preview-templates/LinksPagePreview'
import BasicPagePreview from './preview-templates/BasicPagePreview'
import EventsPagePreview from './preview-templates/EventsPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('reports', BasicPagePreview)
CMS.registerPreviewTemplate('membership', BasicPagePreview)
CMS.registerPreviewTemplate('committee', BasicPagePreview)
CMS.registerPreviewTemplate('articles', BasicPagePreview)
CMS.registerPreviewTemplate('links', LinksPagePreview)
CMS.registerPreviewTemplate('events', EventsPagePreview)
