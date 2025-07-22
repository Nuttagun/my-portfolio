import "./Certificates.css";
import cert1 from "./../assets/background.jpg";
import cert2 from "./../assets/background.jpg";
import cert3 from "./../assets/background.jpg";
import cert4 from "./../assets/background.jpg";
// เพิ่มได้ตามจำนวนรูป

const CertAndActivities = () => {
  const images = [
    { id: 1, src: cert1, alt: "Certificate 1" },
    { id: 2, src: cert2, alt: "Certificate 2" },
    { id: 3, src: cert3, alt: "Activity 1" },
    { id: 4, src: cert4, alt: "Activity 2" },
    // เพิ่มรูปตรงนี้ได้เรื่อย ๆ
  ];

  return (
    <section id="certs" className="cert-section">
      <h2>Certifications & Activities</h2>
      <div className="cert-gallery">
        {images.map((img) => (
          <div key={img.id} className="cert-image-wrapper">
            <img src={img.src} alt={img.alt} className="cert-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertAndActivities;
