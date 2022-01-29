import React from "react";
import emailImage from "../images/email.png";
import linkedinImage from "../images/linkedin.png";

export default function Info() {
    return (
        <div className="info">
            {/* <img src={profileImage} alt="profile" className="profile-image" /> */}
            <h2 className="name">Ashwin Jayan</h2>
            <h4 className="designation">Software Developer</h4>
            <span className="site">twitter.com/ashwinjayan13</span>
            <div className="contact-buttons">
                <div className="email">
                    <img src={emailImage} alt="email" />
                    Email
                </div>
                <div className="linkedin">
                    <img src={linkedinImage} alt="linkedin" />
                    LinkedIn
                </div>
            </div>
        </div>
    )
}