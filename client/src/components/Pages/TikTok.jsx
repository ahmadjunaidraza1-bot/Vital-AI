import React, { useState } from "react";
import { Container, Row, Col, Carousel, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const videos = [
  { id: 1, src: "/videos/h1.mp4" },
  { id: 2, src: "/videos/h2.mp4" },
  { id: 3, src: "/videos/h3.mp4" },
  { id: 4, src: "/videos/h4.mp4" },
  { id: 5, src: "/videos/h5.mp4" },
  { id: 6, src: "/videos/h6.mp4" },
  { id: 7, src: "/videos/pd1.mp4" },
  { id: 8, src: "/videos/pd2.mp4" },
];

const TikTok = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");

  const handleVideoClick = (src) => {
    setActiveVideo(src);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setActiveVideo("");
  };

  return (
    <>
      <style>{`
        body {
          background: #f8f9fc;
          font-family: 'Poppins', sans-serif;
        }

        .tiktok-page {
          padding: 0 0 80px;
          background:
            radial-gradient(circle at top left, rgba(255, 0, 128, 0.08), transparent 25%),
            radial-gradient(circle at top right, rgba(0, 242, 234, 0.08), transparent 25%),
            #f8f9fc;
          min-height: 100vh;
        }

        .mini-title {
          display: inline-block;
          padding: 7px 16px;
          border-radius: 50px;
          background: linear-gradient(135deg, rgba(255, 0, 128, 0.12), rgba(0, 242, 234, 0.12));
          color: #ff0050;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .gradient-text {
          background: linear-gradient(90deg, #ff0050, #7c3aed, #00f2ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }

        .hero-carousel {
          margin-bottom: 50px;
        }

        .video-slide {
          position: relative;
          height: 560px;
          background: #000;
        }

        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          background: #000;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.65) 0%,
            rgba(0, 0, 0, 0.35) 50%,
            rgba(0, 0, 0, 0.15) 100%
          );
          padding: 20px;
        }

        .hero-content {
          max-width: 850px;
          margin: 0 auto;
          margin-top: 150px;
        }

        .hero-content .mini-title {
          color: #fff;
          background: linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08));
          backdrop-filter: blur(10px);
        }

        .hero-content h1 {
          font-size: 3.2rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 16px;
          line-height: 1.15;
        }

        .hero-content p {
          color: rgba(255,255,255,0.92);
          font-size: 1.05rem;
          line-height: 1.8;
          margin: 0;
        }

        .section-heading {
          max-width: 820px;
          margin: 0 auto 30px;
          text-align: center;
        }

        .video-card {
          position: relative;
          height: 360px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
          animation: fadeUp 0.7s ease both;
          background: #000;
          cursor: pointer;
        }

        .video-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
        }

        .video-card video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .video-card::after {
          content: "▶";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 24px;
          opacity: 0;
          transition: 0.3s ease;
          pointer-events: none;
        }

        .video-card:hover::after {
          opacity: 1;
        }

        .custom-modal .modal-content {
          background: #000;
          border: none;
          border-radius: 20px;
          overflow: hidden;
        }

        .custom-modal .modal-header {
          border: none;
          padding: 10px 14px;
          background: #000;
        }

        .custom-modal .btn-close {
          filter: invert(1);
          opacity: 1;
        }

        .custom-modal .modal-body {
          padding: 0;
          background: #000;
        }

        .modal-video {
          width: 100%;
          height: auto;
          display: block;
          background: #000;
          max-height: 80vh;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 991px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .video-slide {
            height: 420px;
          }

          .hero-content {
            margin-top: 80px;
          }

          .hero-content h1 {
            font-size: 2rem;
          }

          .hero-content p {
            font-size: 0.95rem;
          }

          .video-card {
            height: 260px;
          }

          .video-card::after {
            opacity: 1;
            width: 50px;
            height: 50px;
            font-size: 20px;
          }
        }
      `}</style>

      <section className="tiktok-page">
        <Carousel
          className="hero-carousel"
          controls={false}
          indicators={false}
          interval={4000}
          pause={false}
          fade
        >
          <Carousel.Item>
            <div className="video-slide">
              <video
                src="/videos/pd1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="hero-video"
              />
              <div className="hero-overlay">
                <div className="hero-content">
                  <h1>
                    Trending <span className="gradient-text">TikTok Videos</span>
                  </h1>
                  <p>Scroll-stopping viral content for modern brands.</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        <Container>
          <div className="section-heading">
            <div className="mini-title">TikTok Collection</div>
          </div>

          <Row className="g-4">
            {videos.map((item, index) => (
              <Col lg={3} md={6} sm={6} key={item.id}>
                <div
                  className="video-card"
                  style={{ animationDelay: `${index * 0.08}s` }}
                  onClick={() => handleVideoClick(item.src)}
                >
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        size="md"
        className="custom-modal"
      >
        <Modal.Header closeButton />
        <Modal.Body>
          {activeVideo && (
            <video
              key={activeVideo}
              src={activeVideo}
              controls
              autoPlay
              playsInline
              className="modal-video"
            />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TikTok;