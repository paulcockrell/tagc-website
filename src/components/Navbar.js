import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
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

  render() {
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
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
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
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item has-text-weight-medium is-capitalized " to="/membership">
                Membership
              </Link>
              <Link className="navbar-item has-text-weight-medium is-capitalized " to="/events">
                Events
              </Link>
              <Link className="navbar-item has-text-weight-medium is-capitalized " to="/committee">
                Committee
              </Link>
              <Link className="navbar-item has-text-weight-medium is-capitalized " to="/reports">
                Reports
              </Link>
              <Link className="navbar-item has-text-weight-medium is-capitalized " to="/links">
                Links
              </Link>
              <Link className="navbar-item has-text-weight-medium is-capitalized " to="/articles">
                Articles
              </Link>
              <Link className="navbar-item has-text-weight-medium is-capitalized " to="/contact">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
