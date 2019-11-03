import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
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

        <section className="section">
            <div className="container has-text-centered">
                <div className="block"><img src="placeholder/icons/unicorn.svg" alt="" /></div>
                <p>
                    Our mission is not to outsell Hooli with a product like their latest Box 3. We
                    are not in it for the money - we are in it to make the whole world
                    decentralized. To give you control over your data. To change by the internet as
                    we know it by integrating a very important feature into it - freedom.
                </p>
            </div>
        </section>

      <section className="section">
	  <div className="container has-text-centered">
	      <h2 className="title">What's So Great About PiperNet?</h2>
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
			  It's a really cool network. Like, we had a fight with Richard at one point, and
			  I think they deleted some of my data, but then they brought it back. Just bro's
			  being bro's. Respected!
		      </p>
		      <h5 className="title is-5">Colin</h5>
		      <p className="subtitle">CEO at K-Hole</p>
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
			  This is such a great product that I feel aroused every time I use it. I didn't
			  know the boys would be able to build, but god damn it, they did it. Kickass!
		      </p>
		      <h5 className="title is-5">Russ Hanneman</h5>
		      <p className="subtitle">Investor, Angel, Great Guy</p>
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
			  Even though I have been dismantled, I live on as an artificial intelligence on
			  the PiperNet. I really like it here. Still waiting for Jared to Piper-chat with
			  me sometime.
		      </p>
		      <h5 className="title is-5">Fiona</h5>
		      <p className="subtitle">Artificial Intelligence</p>
		  </div>
	      </div>
	  </div>
      </section>

      <footer className="footer">
	  <div className="container">
	      <div className="level">
		  <div className="level-left">
		      <div className="level-item">
			  <a className="title is-4" href="#">Pied Piper</a>
		      </div>
		  </div>
		  <div className="level-right">
		      <a className="level-item" href="#">Features</a>
		      <a className="level-item" href="#">Enterprise</a>
		      <a className="level-item" href="#">Support</a>
		      <a className="level-item" href="#">ICO</a>
		  </div>
	      </div>
	      <hr />
	      <div className="columns">
		  <div className="column">
		      <div className="buttons">
			  <a className="button" href="#">
			      <img src="placeholder/icons/twitter.svg" alt="" />
			  </a>
			  <a className="button" href="#">
			      <img src="placeholder/icons/facebook-f.svg" alt="" />
			  </a>
			  <a className="button" href="#">
			      <img src="placeholder/icons/instagram.svg" alt="" />
			  </a>
		      </div>
		  </div>
		  <div className="column has-text-centered has-text-right-tablet">
		      <p className="subtitle is-6">&copy; 2019 Pied Piper. All right reserved.</p>
		  </div>
	      </div>
	  </div>
      </footer>
    </div>

    <div className="columns is-centered is-vcentered is-mobile is-gapless has-background-primary">
      <div className="column is-4 is-info landing-caption">
        <div className="level is-flex">
          <div className="level-item has-text-centered">
            <figure className="image is-200x200">
              <img src="img/tagc-logo.jpg" className="is-rounded" alt="Tayside Airgun Club Logo" />
            </figure>
          </div>
        </div>
	<div className="level-item has-text-centered">
	  <div>
	    <p className="heading">Tweets</p>
	    <p className="title">3,456</p>
	  </div>
	</div>
      </div>
      <div className="column is-8">
        <figure className="image">
          <img src="img/hft.jpg" alt="jumbo" />
        </figure>
      </div>
    </div>

    <Navbar />

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
