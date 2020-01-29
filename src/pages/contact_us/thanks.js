import React from 'react'
import Layout from '../../components/Layout'
import SectionHeader from '../../components/SectionHeader'

export default () => (
  <Layout pageId="contact us">
    <div className="content">
      <SectionHeader text={"Thank you!"} />
      <section className="section section--gradient">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <p>Thank you for sending us a message, will will try to respond as soon as we can, but this can be a few days.</p>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)
