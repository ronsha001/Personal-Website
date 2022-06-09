import './Contact.css';
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

const Contact = () => {
    return (
        <div id="contact" className="container contact-container">
            <h1>Contact Me</h1>
            <div className="contact-links">
                <a
                    href="https://www.linkedin.com/in/ron-sharabi/"
                    className="contact linkedin"
                    target={"blank"}
                >
                    <AiOutlineLinkedin className="icon" />
                    <h2>
                        linkedIn
                    </h2>

                </a>

                <a
                    href="https://wa.me/972525554358"
                    className="contact whatsapp"
                    target={"blank"}
                >
                    <AiOutlineWhatsApp className="icon" />
                    <h2>
                        whatsapp <span>+972 52 555 4358</span>
                    </h2>
                </a>

                <a 
                    href="mailto:ronsh0111@gmail.com" 
                    className="contact gmail"
                    target={"blank"}
                >
                    <AiOutlineMail className="icon" />
                    <h2>
                        Mail <span>ronsh0111@gmail.com</span>
                    </h2>
                </a>
            </div>
        </div>
    )
}

export default Contact