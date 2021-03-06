/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Footer from "./footer"

import "../scss/base.scss"

const Layout = ({ children }) => {
  return (
    <>
      <main className="container animated fadeIn">
        <section className="py-5">
          {children}
        </section>
      </main>
      <Footer />
      <div className="triangle-left"></div>
      <div className="triangle-right"></div>
      <div className="triangle-bottom"></div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
