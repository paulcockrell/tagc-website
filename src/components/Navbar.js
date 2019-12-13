import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const UNSELECTED_MENU_ITEM = "navbar-item has-text-weight-medium is-capitalized"
const SELECTED_MENI_ITEM = `${UNSELECTED_MENU_ITEM} has-text-white`
const MENU_ITEMS = [
  "membership",
  "events",
  "committee",
  "reports",
  "links",
  "articles",
  "for sale",
  "contact us",
]

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
      navBarActiveMenuItem: props.navBarActiveMenuItem,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  capitalizeFirstLetter([first, ...rest]) {
    return first ? first.toUpperCase() + rest : ''
  }

  setMenuItemClass(menuItem) {
    const {
      navBarActiveMenuItem,
    } = this.state

    const menuItemClass = menuItem === navBarActiveMenuItem ? SELECTED_MENI_ITEM : UNSELECTED_MENU_ITEM

    return menuItemClass
  }

  buildMenuItem(item) {
    const menuItemClass = this.setMenuItemClass(item)
    const menuItemPath = `/${item.replace(" ","_")}`
    const menuItemLabel = this.capitalizeFirstLetter(item)

    return (
      <Link key={menuItemLabel} className={menuItemClass} to={menuItemPath}>
        {menuItemLabel}
      </Link>
    )
  }

  render() {
    const {
      navBarActiveClass,
    } = this.state

    return (
      <nav
        className="navbar is-transparent "
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item has-text-weight-medium has-text-white is-capitalized" title="Logo">
              Tayside Air Gun Club
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              {MENU_ITEMS.map((item) => this.buildMenuItem(item))}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

Navbar.propTypes = {
  navBarActiveMenuItem: PropTypes.string,
}

export default Navbar
