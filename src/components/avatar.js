import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import avatarStyles from "./avatar.module.scss"

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "jared-zoom.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return <Img className={avatarStyles.avatar} fluid={data.avatar.childImageSharp.fluid} />
}

export default Avatar
