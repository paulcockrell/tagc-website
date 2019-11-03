import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import SectionHeader from '../components/SectionHeader'
import Notifications from '../components/Notifications'
import BlogRoll from '../components/BlogRoll'
import Navbar from '../components/Navbar'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  notifications,
  mainpitch,
  description,
  intro,
}) => (
  <div className="content is-landing-page">
    <div>
	<div className="columns has-no-margin-bottom">
	  <div className="column has-background-primary is-vcentered is-centered is-mobile is-2 logo-container is-flex">
	    <figure className="image is-128x128 has-margin-1">
	      <img src="img/tagc-logo.jpg" class="is-rounded" alt="Tayside Airgun Club Logo" />
	    </figure>
	  </div>
	  <div className="column is-vcentered is-centered is-10">
	    <div className="tile is-ancestor is-flex-wrapped">
	      <div className="tile is-parent is-12 has-background-dark has-padding-2">
	        <div className="tile is-child has-padding-2">
		  <Navbar />
		</div>
	      </div>
	      <div className="tile is-parent is-12 has-background-light">
	        <div className="tile is-child has-padding-1">
		  <div className="level">
		    <div className="level-left">
		      <div className="level-item">
		        Tayside Air Gun Club, Auchterhouse, Perthshire
		      </div>
		      <div className="level-item">
		        | enquires@taysideairgunclub.co.uk
		      </div>
		    </div>
		    <div className="level-right">
		      <div className="level-item">
		      F | T | Y
		      </div>
		    </div>
		  </div>
		</div>
	      </div>
	    </div>
	  </div>
	</div>

        <div
          className="is-jumbotron full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
          }}
        >
          <h2
            className="is-jumbotron-text has-text-weight-bold is-size-4 has-background-polkadot"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            {title}
          </h2>
        </div>

        <Notifications gridItems={notifications} />

        <SectionHeader text="Welcome" />

        <section className="section">
            <div className="container">
                <p>
                  Tayside Airgun Club was formed in the spring of 2000 by a
                  group of like minded people who required a safe, secure and
                  reliable place to shoot at static targets.
                </p>

                <p>
                  Auchterhouse Country Sports was able to provide all of
                  these and, thanks to their support, the Club has
                  flourished, becoming one of Scotlands leading airgun clubs.
                </p>

                <p>
                  We also hold Corporate Events on behalf of Auchterhouse Country Sports, and host youth organisation team bonding events. Corporate or bonding, these events can become very hotly contested.
                  Several of our members compete, with some success, in Scottish HFT competitions.
                </p>

                <p>
                  The Club is affiliated to Scottish Target Shooting, UK Association for Hunter Field Target, and National Small-Bore Rifle Association.
                  Tayside Airgun Club is approved and certificated by Police Scotland.
                </p>
            </div>
        </section>

      <section className="section">
	  <div className="container has-text-centered">
	      <h2 className="title">What does the club offer?</h2>
	      <div className="columns">
		  <div className="column">
		      <div className="level">
			  <div className="level-item">
			      <figure className="image is-128x128">
				  <img className="is-rounded" src="https://bulma.dev/placeholder/pictures/bg_circle.svg?primary=00d1b2" alt="" />
			      </figure>
			  </div>
		      </div>
		      <p className="block">
                        We provide our members with a variety of shooting
                        disciplines 24 hours per day, 365 days per year.
		      </p>
		  </div>
		  <div className="column">
		      <div className="level">
			  <div className="level-item">
			      <figure className="image is-128x128">
				  <img className="is-rounded" src="https://bulma.dev/placeholder/pictures/bg_circle.svg?primary=00d1b2" alt="" />
			      </figure>
			  </div>
		      </div>
		      <p className="block">
                        We have a full HFT 30 target course, laid out to
                        UKAHFT specification, a 30 target plinking course,
                        and a 45 yard indoor range.
		      </p>
		  </div>
		  <div className="column">
		      <div className="level">
			  <div className="level-item">
			      <figure className="image is-128x128">
				  <img className="is-rounded" src="https://bulma.dev/placeholder/pictures/bg_circle.svg?primary=00d1b2" alt="" />
			      </figure>
			  </div>
		      </div>
		      <p className="block">
                        There is a very active pistol section within the Club which
                        meets every Friday evening and we meet every Sunday
                        for outdoor rifle shooting.
		      </p>
		  </div>
	      </div>
	  </div>
      </section>
    </div>

    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  notices: PropTypes.shape({
    type: PropTypes.string,
    text: PropTypes.string,
  }),
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        notifications={frontmatter.notifications}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        notifications {
          type
          text
        }
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
