import "./css/About.css";

const About = () => {
  return (
    <div id="about">
      <h1 className="about-heading">About Page</h1>

      <div className="about-content">
        <h3>Installation</h3>
        <ul>
          <li>npx create-react-app my-app</li>
          <li>cd my-app</li>
          <li>npm install react-router-dom</li>
          <li>npm start</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
