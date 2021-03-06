import React from 'react'
import moment from 'moment'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-dark has-text-white-ter">
        <div className="content has-text-centered">
          <div className="columns">
            <div className="column">
              &copy; {moment().format("YYYY")} Tayside Airgun Club
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
