import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import "../scss/base.scss"

const IndexPage = () => (
  <Layout>
    <SEO />
    <h1 className="display">Jared Moran</h1>
    <h2>Father / Husband / Friend / Engineer / Web Developer</h2>
    <p>I enjoy making designs a reality</p>

    <ul>
      <li><a href="https://github.com/jaredmoran">Github Profile</a></li>
      <li><a href="https://www.linkedin.com/in/jared-moran-575a1785/">LinkedIn Profile</a></li>
      <li><a href="https://twitter.com/jaredmoran">Twitter Profile</a></li>
    </ul>
  </Layout>
)

export default IndexPage
