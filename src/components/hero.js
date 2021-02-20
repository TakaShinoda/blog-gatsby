import React from "react"
import "../styles/hero.css"

export const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-text">
        Welcome to my blog!
        <br />
        Enjoy lots of posts.
        <br />
      </h1>
      <div className="hero-author">
        <img
          src="https://avatars.githubusercontent.com/u/45593212"
          className="hero-author-image"
          alt="avatar"
        />
        <p className="hero-author-text">
          Written by XXXX.
          <br />
          Front Engineer at Hoge.Inc. Love JavaScript.
        </p>
      </div>
    </div>
  )
}
