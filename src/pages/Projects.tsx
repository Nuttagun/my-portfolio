import './Projects.css';

import project1Image from './../assets/c.png';
import project2Image from './../assets/github.png';
import project3Image from './../assets/figma.png';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration.',
      image: project1Image,
      link: 'https://github.com/yourusername/ecommerce-repo',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A responsive web application for managing tasks, tracking progress, and collaborating with team members.',
      image: project2Image,
      link: 'https://github.com/yourusername/task-app-repo',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS']
    },
    {
      id: 3,
      title: 'Personal Portfolio Website',
      description: 'This very website! Built to showcase my skills, projects, and professional journey as a developer.',
      image: project3Image,
      link: 'https://github.com/yourusername/portfolio-repo',
      technologies: ['React', 'CSS3', 'Figma']
    },
  ];

  return (
    <section id="projects" className="Projects-section">
      <div className="projects-header">
        <h2>My Projects</h2>
      </div>

      <div className="projects-grid">
        {projectData.map((project) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            key={project.id}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
