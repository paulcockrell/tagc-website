import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Navbar from '../components/Navbar'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const Header = class extends React.Component {
  render() {
    const {
      navBarActiveMenuItem
    } = this.props

    return (
      <div className="columns has-no-margin has-no-margin-bottom">
        <div className="column has-background-primary is-vcentered is-centered is-mobile is-2 logo-container is-flex">
          <figure className="image is-128x128 has-margin-1">
            <PreviewCompatibleImage imageInfo={{ image: '/img/tagc-logo.jpg', alt: 'TAGC logo', style: { borderRadius: '290486px' } }} />
          </figure>
        </div>
        <div className="column is-vcentered is-centered is-10">
          <div className="tile is-ancestor is-flex-wrapped">
            <div className="tile is-parent is-12 has-background-dark has-padding-2">
              <div className="tile is-child has-padding-1">
                <Navbar navBarActiveMenuItem={navBarActiveMenuItem} />
              </div>
            </div>
            <div className="tile is-parent is-12 has-background-light">
              <div className="tile is-child has-padding-1">
                <div className="level">
                  <div className="level-left">
                    <div className="level-item">
                      Tayside Air Gun Club, Auchterhouse, Perthshire
                    </div>
                    <div className="level-item is-hidden-touch">
                      |&nbsp;&nbsp;<a href="/contact_us" alt="Contact us">tagcenquires@outlook.com</a>
                    </div>
                  </div>
                  <div className="level-right">
                    <div className="level-item is-size-7 is-italic">
                        Updated: {moment().format('ll')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  navBarActiveMenuItem: PropTypes.string,
}
export default Header
