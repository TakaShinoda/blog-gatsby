import React from "react"
import "../styles/post.css"
import { Layout } from "../components/layout"

// pageContextには、gatsby-node.jsのcreatePageの引数のcontextで指定したデータが渡ってくる
export default function Post({ pageContext }) {
    const { title, updatedAt, image } = pageContext.post
    const body = pageContext.post.body.childMarkdownRemark.html
    const imgUrl = "https:" + image.file.url

    return (
        <Layout>
            <div className="post-header">
                <h1>{title}</h1>
                <p className="post-date">{updatedAt}</p>
            </div>
            <img src={imgUrl} className="post-image" alt="post-cover"></img>
            <div dangerouslySetInnerHTML={{ __html: body }} className="post-body" />
        </Layout>
    )
}