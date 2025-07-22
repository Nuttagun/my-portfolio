import "./Contact.css";
import {
  FaFacebookF,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <h2>
            Contact <span>Me</span>
          </h2>
          <p>
            ผมเป็นนักศึกษาที่กำลังมองหาโอกาสในการออกสหกิจศึกษา
            เพื่อนำความรู้และทักษะไปประยุกต์ใช้ในการทำงานจริง
            และเรียนรู้จากประสบการณ์ตรงในองค์กรของท่านครับ
            หากมีข้อเสนอแนะหรือต้องการสอบถามเพิ่มเติม สามารถติดต่อผมได้เลยครับ
          </p>
          <div className="contact-info">
            <p>
              <FaEnvelope className="icon" /> nuttagunsamanjai@gmail.com
            </p>
            <p>
              <FaPhoneAlt className="icon" /> 064-276-3875
            </p>
            <p>
              <FaMapMarkerAlt className="icon" /> 318/23 หมู่ 2 บ้านโคกปลัด
              ต.นอกเมือง อ.เมือง จ.สุรินทร์ 32000
            </p>
          </div>
          <div className="social-icons">
            <a
              href="https://github.com/Nuttagun"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/nuttagun.samanjai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/nuttagun-samanjai-8340842b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
