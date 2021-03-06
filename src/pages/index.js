import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const IndexPage = () => {
  const allTheThingsLogo = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "open-all-the-things.jpg" }) {
        childImageSharp {
          id
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h2 style={{ textAlign: 'center' }}>What is Open Eugene Festival?</h2>
      <p style={{ textAlign: 'center' }}>
        Welcome to the Open Eugene Festival web page!{' '}
        <span role="img" aria-label="party emojis">
          🎉
        </span>{' '}
        We’re glad you’re here!
      </p>
      {/* textAlign-ed div added to center youTube iframe
        Media query in Layout.css changes width to 100% at 560px so it will be responsive on mobile */}
      <div style={{ textAlign: 'center' }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xsluofCHmTQ"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Open Eugene Español 'Splainer Vid"
        />
        <p>
          Is English you first language?{' '}
          <a
            href="https://youtu.be/PZojOfxjPPg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out the OG version!
          </a>
        </p>
      </div>
      <p>
        The Open Eugene Festival is the first (that we know of) intentional
        gathering of open enthusiasts in the Eugene Oregon region. Our theme is
        “Open all the Things!”
      </p>
      <h3>
        We're sold out! Fill out{' '}
        <a href="https://goo.gl/forms/DDeWAavvSMAtT28u1">this form</a> to get on
        the mailing list for the next time.
      </h3>
      <h3>
        {' '}
        Signup as a Contributor, Volunteer, or Buy a Ticket on{' '}
        <a
          href="https://www.eventbrite.com/e/open-eugene-festival-tickets-52110392587"
          target="_blank"
          rel="noopener noreferrer"
        >
          Eventbrite
        </a>{' '}
        or{' '}
        <a
          href="https://www.facebook.com/events/196679251226823/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </h3>
      <Img
        style={{ float: 'right', width: '350px' }}
        className="allTheThingsLogo"
        fluid={allTheThingsLogo.logo.childImageSharp.fluid}
        alt="OPEN ALL THE THINGS"
      />

      <h3>What kind of things are we talking about?</h3>
      <ul>
        <li>Open source software</li>
        <li>Open hardware</li>
        <li>Open data</li>
        <li>Working Open on any project</li>
      </ul>

      <h4>What does “open” mean?</h4>

      <ul>
        <li>Easy to understand,</li>
        <li>Easy to share, remix and build on, and</li>
        <li>Welcoming to all participants, from any background.</li>
      </ul>
      <h4> Who should come to Open Eugene Fest?</h4>

      <ul>
        <li>Folks who are open curious and want to learn.</li>
        <li>Folks with a project idea to share with the world</li>
        <li>
          Folks currently running open projects and would like to get more
          collaborators
        </li>
        <li>
          Folks who know all-the-thing about working open and want to share
          knowledge.
        </li>
      </ul>

      <h3>
        Join the conversation on the #open-eugene channel of the <br />
        <a href="http://eugslack.com" target="_blank" rel="noopener noreferrer">
          EugeneTech Slack http://eugslack.com
        </a>
      </h3>
      <hr />

      <h3>When and Where</h3>
      {/* made responsive in layout.css */}
      <div style={{ display: 'flex' }} className="mapContainer">
        <p>
          Open Eugene Fest will be happening Friday-Saturday December 14th &
          15th 2018 at{' '}
          <a
            href="https://www.trifoia.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trifoia
          </a>
          .
        </p>
        <iframe
          title="Trifoia map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.7874124852015!2d-123.09462638451642!3d44.04644667910977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c11e151476cab1%3A0x21f72062e230b3cd!2sTrifoia!5e0!3m2!1sen!2sus!4v1542760773176"
          width="300"
          height="200"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>
      <hr />

      <h4>
        <Link to="/projects">
          Check out what projects are coming or even... Submit your own!
        </Link>
      </h4>
      <hr />

      <h4>
        <a href="https://github.com/EugTech/Open-Eugene/blob/master/CODE_OF_CONDUCT.md">
          View Code of Conduct
        </a>
      </h4>
    </Layout>
  )
}

export default IndexPage
