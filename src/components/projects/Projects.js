import './Projects.css';
import getagent from '../../images/getagent.jpg';

const Members = () => {
    return (
        <div id="members" className="container members-container">
            <h1 className="member-txt">Projects</h1>
            <div className="member member-1">
                <div className="member-img"></div>
                <div className="member-info">
                    <h1 className="name">Best Memories</h1>
                    <h3 className="position"> MERN Stack Project </h3>
                    <h4 className="about">
                        Social media that allow to share memories, like other's memories and comment on other's memories.<br />
                        This project includes Login with Email (JWT) + Google OAuth Authentication.<br />
                        React + Redux, Node, Express, MongoDB
                    </h4>
                    <a href="https://mybestmemories.netlify.app/posts" target={"blank"} className="contact-member">
                        <span>Best Memories</span>
                    </a>
                </div>
            </div>

            <div className="member member-2">
                <div className="member-img"></div>
                <div className="member-info">
                    <h1 className="name">GetAgent</h1>
                    <h3 className="position">Degree Final Project</h3>
                    <h4 className="about">
                    During my degree studies, I was required to make a final project for the degree, so I decided to make a real estate agents website called "GetAgent". this website was built by me and meant to help real estate agents to publish their names and their assets in the market. I developed the front and the backend using HTML, CSS, JS, PHP and MySql.
                    </h4>
                    <a href="http://getagent.infinityfreeapp.com/index.php" target={"_blank"} className="contact-member">
                        <span>GetAgent</span>
                    </a>
                </div>
            </div>

            <div className="member member-3">
                <div className="member-img"></div>
                <div className="member-info">
                    <h1 className="name">Ron's Projects</h1>
                    <h3 className="position">Tiny projects of the 1st year of the degree</h3>
                    <h4 className="about">
                        Developed a website that contains all of my Front-End projects, Most of these projects are games or calculating algorithms that
                        were written with HTML, Javascript, CSS, ReactJS, PHP, and SQL.
                    </h4>
                    <a href="https://ronsites.000webhostapp.com/SelfProjects/index.php" target={"_blank"} className="contact-member">
                        <span>Ron's Projects</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Members