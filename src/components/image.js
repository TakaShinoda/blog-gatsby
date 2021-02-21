import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Image = ({ assetUrl, alt, className }) => {
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
      className={className}
    />
  )
}
