import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Avatar from "../components/avatar"
import SEO from "../components/seo"
import Img from "gatsby-image"

const IndexPage = () => {
  const workData = useStaticQuery(graphql`
    query {
      raheemImage: file(relativePath: { eq: "raheem-thumbnail.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, cropFocus: NORTH) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      rideReportImage: file(relativePath: { eq: "ride-report-thumbnail.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, cropFocus: NORTH) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      teachingBooksImage: file(
        relativePath: { eq: "teaching-books-thumbnail.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, cropFocus: NORTH) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      pensoCoImage: file(relativePath: { eq: "pensoco-thumbnail.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, cropFocus: NORTH) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      atlassianImage: file(
        relativePath: { eq: "plant-your-code-thumbnail.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, cropFocus: NORTH) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      leportalImage: file(relativePath: { eq: "netflix-leportal.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, cropFocus: NORTH) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      megaphoneImage: file(relativePath: { eq: "megaphone-thumb.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, cropFocus: NORTH) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      googleImage: file(relativePath: { eq: "google-thumb.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, cropFocus: NORTH) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />

      <div className="text-center">
        <span className="d-none d-md-block">
          <Avatar />
        </span>
        <h1 className="display-1">Jared Moran</h1>
        <p>
          <strong>Father / Husband / Friend / Engineer / Web Developer</strong>
        </p>
        <p>
          <strong>Visalia, CA, USA</strong>
        </p>
      </div>

      <h2 className="mt-5 mb-4">About Me</h2>
      <p>
        I enjoy making designs a reality. I am an engineer who specializes in
        taking responsible, thoughtful designs and turning them into responsive,
        user-friendly experiences using HTML, CSS and JavaScript.
      </p>
      <p>
        When I&rsquo;m not working it&rsquo;s a pretty safe bet that
        you&rsquo;ll find me spending time with my wife and our two daughters.
        On the side I consider myself a bit of an amateur woodworker and a very
        occasional gamer.{" "}
        <span role="img" aria-label="smiley face emoji">
          😄
        </span>
      </p>

      <h2 className="mt-5 pt-5 mb-4">Currently</h2>
      <p>
        Currently working for{" "}
        <a href="https://commsor.com" target="_blank" rel="noopener noreferrer">
          Commsor
        </a>{" "}
        as a Full Stack Engineer on the hyper-focused networking application{" "}
        <a href="https://matcha.so" target="_blank" rel="noopener noreferrer">
          Matcha
        </a>
        , not taking on any new projects at this time.
      </p>

      <h2 className="mt-5 pt-5 mb-4">Recent Work (that I can share)</h2>

      <div className="row">
        <div className="work col-md-6">
          <a
            href="https://design.google/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={{
                ...workData.googleImage.childImageSharp.fluid,
                aspectRatio: 4 / 3,
              }}
              alt="Google Design screenshot"
            />
            <span className="sr-only">Visit Google Design site</span>
          </a>
          <figcaption>
            <h3>Google Design</h3>
            <p>
              With Instrument, I helped build out a fully customizable website
              to showcase Design at Google. Primary tech: NextJS/React and
              Wagtail.
            </p>
            <p>
              <a
                href="https://design.google/"
                target="_blank"
                rel="noopener noreferrer"
                className="curtains"
              >
                Visit Site
              </a>
            </p>
          </figcaption>
        </div>
        <div className="work col-md-6">
          <a
            href="https://megaphone.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={{
                ...workData.megaphoneImage.childImageSharp.fluid,
                aspectRatio: 4 / 3,
              }}
              alt="Megaphone screenshot"
            />
            <span className="sr-only">Visit Megaphone site</span>
          </a>
          <figcaption>
            <h3>Megaphone by Spotify</h3>
            <p>
              With Penso Co (engineering) and The Brigade (design), I built out
              a shiny new site for the Megaphone team to help market their great
              product. Primary tech: NextJS/React and Contentful.
            </p>
            <p>
              <a
                href="https://megaphone.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="curtains"
              >
                Visit Site
              </a>
            </p>
          </figcaption>
        </div>
        <div className="work col-md-6">
          <a
            href="https://leportal.netflix.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={{
                ...workData.leportalImage.childImageSharp.fluid,
                aspectRatio: 4 / 3,
              }}
              alt="LE Portal screenshot"
            />
            <span className="sr-only">Visit Netflix LE Portal</span>
          </a>
          <figcaption>
            <h3>Netflix - Law Enforcement Request Portal</h3>
            <p>
              Via BlueInGreen, we built out an application for law enforcement
              officials in 20+ countries to submit formal, legal requests to
              Netflix in order to assist in ongoing investigations. I handled
              the front end while working with another BiG engineer who built
              out our API. Primary tech: NextJS/React.
            </p>
            <p>
              <a
                href="https://leportal.netflix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="curtains"
              >
                Visit Site
              </a>
            </p>
          </figcaption>
        </div>
        <div className="work col-md-6">
          <Img
            fluid={{
              ...workData.atlassianImage.childImageSharp.fluid,
              aspectRatio: 4 / 3,
            }}
            alt="Plant Your Code screenshot"
          />
          <figcaption>
            <h3>Atlassian - Plant Your Code, v2</h3>
            <p>
              Penso Co. was tasked with making some UX improvements to
              Atlassian's PYC coding challenge. We adjusted the design, reworked
              the application flow and elevated the real winners of the coding
              challenges - the charities.
            </p>
          </figcaption>
        </div>
        <div className="work col-md-6">
          <a href="https://penso.co" target="_blank" rel="noopener noreferrer">
            <Img
              fluid={{
                ...workData.pensoCoImage.childImageSharp.fluid,
                aspectRatio: 4 / 3,
              }}
              alt="Penso Co. screenshot"
            />
            <span className="sr-only">Visit Penso Co. site</span>
          </a>
          <figcaption>
            <h3>Penso Co.</h3>
            <p>
              New portofolio site to showcase new work, a new studio, and some
              new faces.
            </p>
            <p>
              <a
                href="https://penso.co"
                target="_blank"
                rel="noopener noreferrer"
                className="curtains"
              >
                Visit Site
              </a>
            </p>
          </figcaption>
        </div>
        <div className="work col-md-6">
          <a
            href="https://raheem.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={{
                ...workData.raheemImage.childImageSharp.fluid,
                aspectRatio: 4 / 3,
              }}
              alt="Raheem homepage screenshot"
            />
            <span className="sr-only">Visit Raheem site</span>
          </a>
          <figcaption>
            <h3>Raheem</h3>
            <p>
              An independent service for collecting data on police encounters in
              the US. We created the MVP to get the app up and running.
            </p>
            <p>
              <a
                href="https://raheem.org"
                target="_blank"
                rel="noopener noreferrer"
                className="curtains"
              >
                Visit Site
              </a>
            </p>
          </figcaption>
        </div>
        <div className="work col-md-6">
          <a
            href="https://teachingbooks.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={{
                ...workData.teachingBooksImage.childImageSharp.fluid,
                aspectRatio: 4 / 3,
              }}
              alt="TeachingBooks homepage screenshot"
            />
            <span className="sr-only">Visit TeachingBooks site</span>
          </a>
          <figcaption>
            <h3>TeachingBooks</h3>
            <p>
              Complete redesign and modernization of a web app that's been
              around since 2001.
            </p>
            <p>
              <a
                href="https://teachingbooks.net"
                target="_blank"
                rel="noopener noreferrer"
                className="curtains"
              >
                Visit Site
              </a>
            </p>
          </figcaption>
        </div>
        <div className="work col-md-6">
          <Img
            fluid={{
              ...workData.rideReportImage.childImageSharp.fluid,
              aspectRatio: 4 / 3,
            }}
            alt="Ride Report homepage screenshot"
          />
          <figcaption>
            <h3>Ride Report</h3>
            <p>
              Marketing site refresh for the Portland-based micromobility
              startup.
            </p>
          </figcaption>
        </div>
      </div>

      <h2 className="mt-5 pt-5 mb-4">Work History</h2>

      <div className="job">
        <h3>Commsor</h3>
        <p>
          <strong>Full Stack Engineer (Matcha)</strong>
        </p>
        <time>2023-Present</time>
      </div>

      <div className="job">
        <h3>Netflix</h3>
        <p>
          <strong>Software Engineer (Contract)</strong>
        </p>
        <time>April 2020 - May 2022</time>
      </div>

      <div className="job">
        <h3>Independent contractor</h3>
        <time>2020-2023</time>
      </div>

      <div className="job">
        <h3>Penso Co.</h3>
        <p>
          <strong>Technology Lead</strong>
        </p>
        <time>2018-2020</time>
        <p>
          <a
            href="https://penso.co"
            target="_blank"
            rel="noopener noreferrer"
            className="curtains"
          >
            Visit Site
          </a>
        </p>
      </div>

      <div className="job">
        <h3>Cozy</h3>
        <p>
          <strong>Senior Engineer</strong>
        </p>
        <time>2014-2018</time>
      </div>

      <div className="job">
        <h3>Instrument</h3>
        <p>
          <strong>Senior Web Developer</strong>
        </p>
        <time>2010-2014</time>
        <p>
          <a
            href="https://instrument.com"
            target="_blank"
            rel="noopener noreferrer"
            className="curtains"
          >
            Visit Site
          </a>
        </p>
      </div>

      <div className="job">
        <h3>Opus Creative</h3>
        <p>
          <strong>Web Developer</strong>
        </p>
        <time>2008-2010</time>
      </div>

      <div className="job">
        <h3>TheBigDay.com</h3>
        <p>
          <strong>Web Developer</strong>
        </p>
        <time>2005-2008</time>
      </div>
    </Layout>
  )
}

export default IndexPage
