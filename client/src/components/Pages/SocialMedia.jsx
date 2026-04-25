import React, { useState } from "react";
import { Container, Row, Col, Carousel, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const socialMediaItems = [
  { id: 1, img: "/Images/cr10.png" },
  { id: 2, img: "/Images/cr4.png" },
  { id: 3, img: "/Images/cr11.png" },
  { id: 4, img: "/Images/cr7.png" },
  { id: 5, img: "/Images/cr 15.png" },
  { id: 6, img: "/Images/cr 16.png" },
  { id: 7, img: "/Images/cr 17.png" },
  { id: 8, img: "/Images/cr 18.png" },
];

const SocialMedia = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleOpenPopup = (img) => {
    setSelectedImage(img);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedImage("");
  };

  return (
    <>
      <style>{`
        body {
          background: #f8f9fc;
          font-family: 'Poppins', sans-serif;
        }

        .social-page {
          padding: 0 0 80px;
          background:
            radial-gradient(circle at top left, rgba(124,58,237,0.08), transparent 25%),
            radial-gradient(circle at top right, rgba(236,72,153,0.08), transparent 25%),
            #f8f9fc;
          min-height: 100vh;
        }

        .gradient-text {
          background: linear-gradient(90deg, #7c3aed, #ec4899, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }

        .mini-title {
          display: inline-block;
          padding: 7px 16px;
          border-radius: 50px;
          background: linear-gradient(
            135deg,
            rgba(124,58,237,0.16),
            rgba(236,72,153,0.16)
          );
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        /* HERO SECTION */
        .hero-carousel .carousel-item {
          height: 560px;
        }

        .hero-carousel .carousel-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(
            to right,
            rgba(0,0,0,0.70),
            rgba(0,0,0,0.45),
            rgba(0,0,0,0.30)
          );
          padding: 20px;
        }

        .hero-content {
          max-width: 850px;
          margin: 0 auto;
        }

        .hero-content h1 {
          font-size: 3.2rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 16px;
          line-height: 1.15;
        }

        /* SECTION */
        .section-heading {
          max-width: 820px;
          margin: 60px auto 50px;
          text-align: center;
        }

        .section-heading .section-mini {
          display: inline-block;
          padding: 7px 16px;
          border-radius: 50px;
          background: linear-gradient(
            135deg,
            rgba(124,58,237,0.12),
            rgba(236,72,153,0.12)
          );
          color: #7c3aed;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .section-heading h2 {
          font-size: 3rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 16px;
        }

        .section-heading p {
          color: #6b7280;
          margin: 0;
          font-size: 1rem;
        }

        /* GALLERY CARD UPDATED */
        .img-card {
          height: 250px;
          border-radius: 15px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 15px 40px rgba(0,0,0,0.10);
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .img-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(0,0,0,0.15);
        }

        /* FULL IMAGE SHOW */
        .img-card img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 10px;
          background: #fff;
          transition: transform 0.6s ease;
        }

        /* ZOOM EFFECT */
        .img-card:hover img {
          transform: scale(1.12);
        }

        /* MODAL */
        .image-popup-modal .modal-content {
          background: transparent;
          border: none;
          box-shadow: none;
        }

        .image-popup-modal .modal-body {
          padding: 0;
          text-align: center;
        }

        .popup-image {
          width: 100%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 16px;
          background: #fff;
        }

        /* RESPONSIVE */
        @media (max-width: 991px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .section-heading h2 {
            font-size: 2.4rem;
          }
        }

        @media (max-width: 768px) {
          .hero-carousel .carousel-item {
            height: 420px;
          }

          .hero-content h1 {
            font-size: 2rem;
          }

          .section-heading h2 {
            font-size: 2rem;
          }

          /* MOBILE BIGGER IMAGES */
          .img-card {
            height: 400px;
          }

          .img-card img {
            object-fit: contain;
            padding: 8px;
          }
        }

        @media (max-width: 480px) {
          .img-card {
            height: 300px;
          }
        }
      `}</style>

      <section className="social-page">
        {/* HERO */}
        <Carousel
          className="hero-carousel"
          fade
          controls
          indicators
          interval={3000}
        >
          <Carousel.Item>
            <div style={{ position: "relative", height: "100%" }}>
              <img src="/Images/CR2.png" alt="banner1" />
              <div className="hero-overlay">
                <div className="hero-content">
                  <div className="mini-title">Social Media Showcase</div>
                  <h1>
                    Creative{" "}
                    <span className="gradient-text">
                      Social Media Content
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div style={{ position: "relative", height: "100%" }}>
              <img src="/Images/cr 17.png" alt="banner2" />
              <div className="hero-overlay">
                <div className="hero-content">
                  <div className="mini-title">Viral Content Design</div>
                  <h1>
                    Bold Ideas for{" "}
                    <span className="gradient-text">
                      Modern Campaigns
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div style={{ position: "relative", height: "100%" }}>
              <img src="/Images/cr 18.png" alt="banner3" />
              <div className="hero-overlay">
                <div className="hero-content">
                  <div className="mini-title">Brand Visual Gallery</div>
                  <h1>
                    Showcase Your{" "}
                    <span className="gradient-text">
                      Best Social Posts
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        {/* GALLERY */}
        <Container>
          <div className="section-heading">
            <div className="section-mini">Social Media Collection</div>

            <h2>
              Explore Premium{" "}
              <span className="gradient-text">
                Social Media Gallery
              </span>
            </h2>

            <p>
              Discover modern social media creatives in a clean
              and elegant visual showcase.
            </p>
          </div>

          <Row className="g-4">
            {socialMediaItems.map((item) => (
              <Col lg={3} md={6} sm={6} xs={12} key={item.id}>
                <div
                  className="img-card"
                  onClick={() => handleOpenPopup(item.img)}
                >
                  <img src={item.img} alt="gallery" />
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        {/* MODAL */}
        <Modal
          show={showPopup}
          onHide={handleClosePopup}
          centered
          size="md"
          className="image-popup-modal"
        >
          <Modal.Body style={{ position: "relative" }}>
            <button
              onClick={handleClosePopup}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "rgba(0,0,0,0.6)",
                color: "#fff",
                border: "none",
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                fontSize: "18px",
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              ✕
            </button>

            <img
              src={selectedImage}
              alt="preview"
              className="popup-image"
            />
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
};

export default SocialMedia;