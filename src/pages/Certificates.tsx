import "./Certificates.css";
import cert1 from "./../assets/dtcloud.png";
import cert2 from "./../assets/dtdata.png";
import cert3 from "./../assets/actai.jpg";
import cert4 from "./../assets/englishdaycamp.jpg";
import { useState } from "react";

const CertAndActivities = () => {
  const images = [
    { id: 1, src: cert1, alt: "Certificate 1", caption: "หลักสูตร Datacamp cloud พื้นฐาน" },
    { id: 2, src: cert2, alt: "Certificate 2", caption: "หลักสูตร Datacamp data engineer พื้นฐาน" },
    { id: 3, src: cert3, alt: "Activity 1", caption: "Ai For Thai Workshop" },
    { id: 4, src: cert4, alt: "Activity 2", caption: "English Day Camp" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="certs" className="cert-section">
    <div className="container-cert"><h2>Certifications & Activities</h2></div>
      <div className="slider-container">
        <div className="arrow left-arrow" onClick={goPrev}>
          &#8249;
        </div>
        <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((img) => (
            <div className="slide" key={img.id}>
              <img src={img.src} alt={img.alt} className="slide-image" />
              <p className="slide-caption">{img.caption}</p>
            </div>
          ))}
        </div>
        <div className="arrow right-arrow" onClick={goNext}>
          &#8250;
        </div>
      </div>
      <div className="dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${currentIndex === idx ? "active" : ""}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default CertAndActivities;
