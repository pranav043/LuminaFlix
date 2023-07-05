import React from "react";
import {
    FaLinkedin,
    FaChrome,
    FaGithub,
    FaYoutube
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <div className="infoText">
                    Welcome to LuminaFlix, your go-to platform for movies, shows, anime, and more. Explore our vast collection, check ratings, cast, and plot details, and stay updated with trending content around you. Enjoy a seamless entertainment experience and discover your next favorite watch.
                </div>
                <div className="infoText">Developed with ❤️ by Pranav Gupta</div>
                <div className="socialIcons">
                    <a href="https://pranavgupta.vercel.app/" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaChrome />
                    </a>
                    <a href="https://www.linkedin.com/in/pranavgupta99/" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/pranav043" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaGithub />
                    </a>
                    <a href="https://stream-vibes.vercel.app/" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaYoutube />
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
