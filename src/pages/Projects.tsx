import "./Projects.css";
import zoo from "./../assets/zoo.jpg";
import lokniyai from "./../assets/HLogo.png";
import health from "./../assets/health.png";
import flowershop from "./../assets/flowershop.png";
import note from "./../assets/note.png";
import port from "./../assets/logoweb.jpg";



const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Health And Wellness Web Application (Private)",
      description:
        "เว็บแอปสุขภาพที่มีแชทบอท AI ช่วยให้คำแนะนำด้านสุขภาพแบบเรียลไทม์ตลอด 24 ชม",
      image: health,
      link: "https://github.com/project-health-and-wellness/health-and-wellness",
      technologies: ["React", "Typescript", "golang", "css", "taliwind css"],
    },
    {
      id: 2,
      title: "Zoo Web Application",
      description:
        "เว็บแอปจัดการสวนสัตว์ พร้อมระบบดูแลสัตว์และตารางให้อาหาร ใช้ Go, React และ SQLite",
      image: zoo,
      link: "https://github.com/Nuttagun/Zoo-Web-Application.git",
      technologies: ["React", "Typescript", "golang", "css", "taliwind css"],
    },
    {
      id: 3,
      title: "Novel(Lokniyai) Web Application",
      description:
        "เว็บแพลตฟอร์มเขียนและอ่านนิยายออนไลน์ สำหรับนักเขียนและผู้อ่าน พัฒนาด้วย React และ Go พร้อมฟีเจอร์จัดการนิยายแบบครบวงจร",
      image: lokniyai,
      link: "https://github.com/yourusername/task-app-repo",
      technologies: ["React", "Typescript", "golang", "css"],
    },
    {
      id: 4,
      title: "FlowerShop",
      description:
        "เว็บไซต์สำหรับร้านขายดอกไม้ (Flower Shop) ที่ออกแบบมาให้สวยงามและใช้งานง่าย",
      image: flowershop,
      link: "https://github.com/Nuttagun/Flower-Shop?tab=readme-ov-file",
      technologies: ["Html", "css"],
    },
    {
      id: 5,
      title: "MyShareNote Web Application",
      description:
        "เรียนรู้การพัฒนาเว็บด้วยสถาปัตยกรรม Microservice พร้อมฝึกใช้งาน Docker, CI/CD(Jenkins), และเครื่องมือ Monitor อย่าง Grafana กับ Prometheus เพื่อสร้างระบบที่แชร์โน๊ตที่สามารถให้ผู้อื่นมาแชร์โน๊ตได้ยืดหยุ่นและดูแลรักษาง่าย",
      image: note,
      link: "https://github.com/Nuttagun/Flower-Shop?tab=readme-ov-file",
      technologies: ["Html", "css"],
    },
    {
      id: 6,
      title: "Web Portfolio",
      description:
        "เรียนรู้การพัฒนาเว็บ Responsive เพื่อนำเสนอผลงานส่วนตัวและประวัติของผมเองเพื่อยื่นขอสหกิจ",
      image: port,
      link: "https://github.com/Nuttagun/Flower-Shop?tab=readme-ov-file",
      technologies: ["React", "Typescript", "Css"],
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
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          </div>
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>

    {/* ปุ่ม More on GitHub */}
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <button
        className="more-btn"
        onClick={() => window.open("https://github.com/Nuttagun", "_blank")}
      >
        More on GitHub
      </button>
    </div>
  </section>
);

};

export default Projects;
