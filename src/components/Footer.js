import React from "react";
import twitterLogo from "../images/twitter.png"
import githubLogo from "../images/github.png"

export default function Footer() {
    return (
        <footer>
            <img src={twitterLogo} alt="twitter" />
            <img src={githubLogo} alt="github" />
        </footer>
    )
}