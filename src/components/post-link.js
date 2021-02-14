import React from "react"
import "../styles/post-link.css"

export const PostLink = ({ post }) => {
    const { title, updatedAt, image } = post
    const description = post.description.description
    console.log(image.file.url)
    return (
        <div className="post-link">
            <div>
                <img src={image.file.url} className="post-link-image" alt="post-cover" />
            </div>
            <div className="post-link-text">
                <h2>{title}</h2>
                <p className="post-link-body">{description}</p>
                <p className="post-link-date">{updatedAt}</p>
            </div>
        </div>
    )
}