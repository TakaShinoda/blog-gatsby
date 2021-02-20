import React from "react"
import "../styles/post-link.css"
import { Link } from "gatsby"

export const PostLink = ({ post }) => {
  const { title, updatedAt, image } = post
  const description = post.description.description
  const pageLink = `/post/${post.slug}/`
  // const imgUrl = "https:" + image.file.url

  return (
    <Link to={pageLink} className="post-link-anchor">
      <div className="post-link">
        <div>
          {/* <img src={imgUrl} className="post-link-image" alt="post-cover" /> */}
          <img
            src={image.file.url}
            className="post-link-image"
            alt="post-cover"
          />
        </div>
        <div className="post-link-text">
          <h2>{title}</h2>
          <p className="post-link-body">{description}</p>
          <p className="post-link-date">{updatedAt}</p>
        </div>
      </div>
    </Link>
  )
}
