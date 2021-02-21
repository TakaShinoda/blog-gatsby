import React from "react"
import "../styles/hero.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false

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
          I'm a front-end engineer. Love JavaScript.
          <br />
          <a
            className="icon-rink github"
            href="https://github.com/TakaShinoda"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="githubへのリンク"
          >
            <FontAwesomeIcon className="icon" icon={faGithubSquare} />
          </a>
          <a
            className="icon-rink twitter"
            href="https://twitter.com/tttttt_621_s"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitterへのリンク"
          >
            <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
          </a>
        </p>
      </div>
    </div>
  )
}
