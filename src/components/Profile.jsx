import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./Navbar";
import "../styles/Profile.css";
import profileImage from "../assets/IMG_5794_x512.jpg";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <img className="profile-image" src={profileImage} alt="Tom" />
        <h2>Thomas Burns</h2>
        <p>Junior Web Developer</p>
        <div className="link-container">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
