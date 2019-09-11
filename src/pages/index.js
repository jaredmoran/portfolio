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
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />

      <div className="row align-items-center">
        <div className="col-12 col-md-10">
          <h1 className="display-1">Jared Moran</h1>
        </div>
        <div className="d-none d-md-block col-md-2">
          <Avatar />
        </div>
      </div>

      <p><strong>Father / Husband / Friend / Engineer / Web Developer</strong></p>

      <h2 className="mt-5 mb-4">About Me</h2>
      <p>
        I enjoy making designs a reality. I am a UI/UX engineer who specializes
        in taking responsible, thoughtful designs and turning them into
        responsive, user-friendly experiences using HTML, CSS and JavaScript.
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

      <h2 className="mt-5 pt-5 mb-4">Recent Work</h2>

      <div className="row">
        <div className="work col-md">
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
            />
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
        <div className="work col-md">
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
            />
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
        <div className="work col-md">
          <a
            href="https://ridereport.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={{
                ...workData.rideReportImage.childImageSharp.fluid,
                aspectRatio: 4 / 3,
              }}
            />
          </a>
          <figcaption>
            <h3>Ride Report</h3>
            <p>
              Marketing site refresh for the Portland-based micromobility
              startup.
            </p>
            <p>
              <a
                href="https://ridereport.com"
                target="_blank"
                rel="noopener noreferrer"
                className="curtains"
              >
                Visit Site
              </a>
            </p>
          </figcaption>
        </div>
      </div>

      <p>
        <small className="mt-4 d-block">
          All work listed here has been completed via{" "}
          <a
            href="https://penso.co"
            target="_blank"
            rel="noopener noreferrer"
            className="curtains"
          >
            Penso Co.
          </a>{" "}
          Check out the portfolio for more detail of our work.
        </small>
      </p>

      <h2 className="mt-5 pt-5 mb-4">Work History</h2>

      <div className="job">
        <h3>Penso Co.</h3>
        <p>
          <strong>Technology Lead</strong>
        </p>
        <time>2018-Present</time>
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
        <p>
          <a
            href="https://cozy.co"
            target="_blank"
            rel="noopener noreferrer"
            className="curtains"
          >
            Visit Site
          </a>
        </p>
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
