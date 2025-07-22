import './Home.css';
import profile from './../assets/profile.png';
const Home = () => {
  return (
    <section id="Home">
      <div className="Home-content" >
        <div className="Home-text"><h1>Hi, I'm Nuttagun 👋</h1>
      <h2>Welcome To My Portfolio</h2>
      <p>I am a 4th-year Computer Engineering student skilled in both frontend and backend development using TypeScript, Go, React, and UX/UI design with Figma. Experienced in API development, Git, RESTful APIs, and databases such as MySQL, PostgreSQL, and SQLite. I am highly motivated, adaptable, and thrive under pressure, with a strong commitment to continuous self-improvement and growth in this field. My goal is to contribute to cloud-based solutions at TCC Technology.</p>
      </div>
      <div className='footer-Home'>
      <button className='download-cv'>
        <h3>Download My CV</h3>
      </button>
      <button className='view-pj'>
        <h3>View Projects</h3>
      </button>
      </div>
      </div>
        <div className='Home-logo'>
            <img src={profile} alt="profile-logo" />
        </div>
    </section>
  );
};

export default Home;
