import "./Footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialGithubCircular } from "react-icons/ti";

const Footer = () => {
    return (
        <div id="footer" className="container footer-container">
            <h1>
                That's all{" "}
                <a href="#home" >
                    <h2>
                        <BsMouse /> - scroll up -
                    </h2>
                </a>
            </h1>
            <div className="social-links">
                <a href="https://www.instagram.com/ronsharabii/" target="_blank">
                    <BsInstagram className="social" />
                </a>

                <a href="https://www.facebook.com/Ronsh0111" target="_blank">
                    <FaFacebookF className="social" />
                </a>

                <a href="https://github.com/ronsha001" target="_blank">
                    <TiSocialGithubCircular className="social" />
                </a>
            </div>
        </div>
    )
}

export default Footer