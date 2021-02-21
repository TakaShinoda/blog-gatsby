import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ assetUrl, alt }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 180) {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={
        allImageSharp.nodes.find(n => n.fluid.originalName === assetUrl).fluid
      }
      alt={alt}
    />
  )
}

export default Image
