import "./Home.css";
import profile from "./../assets/profile.png";
const Home = () => {
  return (
    <section id="Home">
      <div className="Home-content">
        <div className="Home-text">
          <h1>Hi, I'm Kim 👋</h1>
          <h2>Welcome To My Portfolio</h2>
          <p className="thai-text">
  ผมเป็นนักศึกษาชั้นปีที่ 4 สาขาวิศวกรรมคอมพิวเตอร์
  มีทักษะด้านการพัฒนาโปรแกรมทั้งฝั่ง Frontend และ Backend โดยใช้
  TypeScript, Go, React รวมถึงมีความรู้ด้านการออกแบบ UX/UI ด้วย Figma
  อย่างมีประสิทธิภาพ มีประสบการณ์ในการพัฒนา API, การใช้งาน Git,
  RESTful APIs และฐานข้อมูลหลากหลายประเภท เช่น MySQL, PostgreSQL และ
  SQLite ด้วยความกระตือรือร้นในการเรียนรู้ ปรับตัวได้ดีภายใต้แรงกดดัน
  และมุ่งมั่นที่จะพัฒนาตนเองอย่างต่อเนื่อง
</p>

        </div>
        <div className="footer-Home">
          <a
            href="https://drive.google.com/file/d/1TXHWh7lBt1YrDyULZp-i4AsUJ69-qdnZ/view?usp=sharing"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="download-cv">
              <h3>Download My CV</h3>
            </button>
          </a>
          <a href="#projects">
            <button className="view-pj">
              <h3>View Projects</h3>
            </button>
          </a>
        </div>
      </div>
      <div className="Home-logo">
        <img src={profile} alt="profile-logo" />
      </div>
    </section>
  );
};

export default Home;
