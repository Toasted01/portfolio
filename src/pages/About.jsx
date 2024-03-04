import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import "../styles/About.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="text-container">
        <div className="box-container">
          <h1>Thomas Burns</h1>
          <div className="icon-text-container">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <h3>Manchester</h3>
          </div>
          <div className="icon-text-container">
            <FontAwesomeIcon icon={faEnvelope} />
            <h3>tb7030work@gmail.com</h3>
          </div>
          <p>
            As a Computer Science graduate from the University of Salford with a
            2:1 degree, I specialize in web development and cybersecurity.
            Proficient in React.js and versed in Java, C#, PHP, and SQL, I bring
            a diverse skill set to the table. My academic journey emphasized
            Agile methodologies, fostering collaboration and iterative
            development. Eager to apply my skills in a professional setting, I
            aim to contribute to innovative and secure software solutions while
            embracing continuous learning in the dynamic field of computer
            science.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
