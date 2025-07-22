import './Projects.css'; // Import CSS สำหรับ Projects Component

// สมมติว่ามีรูปภาพโปรเจกต์ของคุณ
// คุณควรเปลี่ยน 'path/to/project-image.jpg' เป็นที่อยู่รูปภาพจริงของแต่ละโปรเจกต์
import project1Image from './../assets/c.png'; // ตัวอย่าง
import project2Image from './../assets/github.png'; // ตัวอย่าง
import project3Image from './../assets/figma.png'; // ตัวอย่าง

const Projects = () => {
  // สร้าง Array ของข้อมูล Project เพื่อให้ง่ายต่อการ Render
  const projectData = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration.',
      image: project1Image,
      link: 'https://github.com/yourusername/ecommerce-repo', // ลิงก์ไปยัง GitHub หรือ Demo
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
    // เพิ่ม Project อื่นๆ ได้ที่นี่
    // {
    //   id: 4,
    //   title: 'Blockchain DApp',
    //   description: 'Decentralized application for secure data sharing on a private blockchain network.',
    //   image: project4Image,
    //   link: 'https://github.com/yourusername/dapp-repo',
    //   technologies: ['Solidity', 'Web3.js', 'Ganache']
    // },
  ];

  return (
    <section id="projects" className="Projects-section">
      <div className="projects-header">
        <h2>My Projects</h2>
      </div>

      <div className="projects-grid">
        {projectData.map((project) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card" key={project.id}>
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
              {/* Optional: ปุ่ม "View Details" ถ้าอยากให้คลิกการ์ดแล้วค่อยมีปุ่ม */}
              {/* <button className="project-button">View Details</button> */}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;