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
        body{
          background:#f8f9fc;
          font-family:'Poppins',sans-serif;
        }

        .tiktok-page{
          padding:0 0 80px;
          background:
            radial-gradient(circle at top left, rgba(255,0,128,0.08), transparent 25%),
            radial-gradient(circle at top right, rgba(0,242,234,0.08), transparent 25%),
            #f8f9fc;
          min-height:100vh;
        }

        .mini-title{
          display:inline-block;
          padding:7px 16px;
          border-radius:50px;
          background:linear-gradient(135deg, rgba(255,0,128,0.12), rgba(0,242,234,0.12));
          color:#ff0050;
          font-size:12px;
          font-weight:700;
          letter-spacing:1px;
          text-transform:uppercase;
          margin-bottom:14px;
        }

        .gradient-text{
          background:linear-gradient(90deg,#ff0050,#7c3aed,#00f2ea);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          font-weight:800;
        }

        /* HERO */
        .video-slide{
          position:relative;
          height:560px;
          background:#000;
        }

        .hero-video{
          width:100%;
          height:100%;
          object-fit:cover;
        }

        .hero-overlay{
          position:absolute;
          inset:0;
          display:flex;
          align-items:center;
          justify-content:center;
          text-align:center;
          background:linear-gradient(
            90deg,
            rgba(0,0,0,0.65),
            rgba(0,0,0,0.35),
            rgba(0,0,0,0.15)
          );
          padding:20px;
        }

        .hero-content{
          max-width:850px;
        }

        .hero-content h1{
          font-size:3.2rem;
          font-weight:800;
          color:#fff;
          margin-bottom:15px;
        }

        .hero-content p{
          color:rgba(255,255,255,0.92);
          font-size:1.05rem;
          margin:0;
        }

        /* HEADING */
        .section-heading{
          max-width:820px;
          margin:60px auto 45px;
          text-align:center;
        }

        .section-heading h2{
          font-size:3rem;
          font-weight:800;
          color:#111827;
          margin-bottom:14px;
        }

        .section-heading p{
          color:#6b7280;
          margin:0;
        }

        /* VIDEO CARD */
        .video-card{
          position:relative;
          height:450px;
          border-radius:20px;
          overflow:hidden;
          background:#fff;
          box-shadow:0 15px 40px rgba(0,0,0,0.10);
          cursor:pointer;
          transition:0.4s ease;
        }

        .video-card:hover{
          transform:translateY(-8px);
          box-shadow:0 25px 60px rgba(0,0,0,0.15);
        }

        .video-card video{
          width:100%;
          height:100%;
          object-fit:cover;
          object-position:center;
          display:block;
          background:#fff;
          transition:0.6s ease;
        }

        .video-card:hover video{
          transform:scale(1.05);
        }

        .video-card::after{
          content:"▶";
          position:absolute;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);
          width:58px;
          height:58px;
          border-radius:50%;
          background:rgba(255,255,255,0.18);
          color:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:22px;
          backdrop-filter:blur(8px);
        }

        /* MODAL */
        .custom-modal .modal-content{
          background:#000;
          border:none;
          border-radius:18px;
          overflow:hidden;
        }

        .custom-modal .modal-header{
          background:#000;
          border:none;
        }

        .custom-modal .btn-close{
          filter:invert(1);
          opacity:1;
        }

        .custom-modal .modal-body{
          padding:0;
          background:#000;
        }

        .modal-video{
          width:100%;
          max-height:85vh;
          object-fit:contain;
          background:#000;
        }

        /* TABLET */
        @media (max-width:991px){
          .hero-content h1{
            font-size:2.5rem;
          }

          .section-heading h2{
            font-size:2.4rem;
          }
        }

        /* MOBILE */
        @media (max-width:768px){
          .video-slide{
            height:430px;
          }

          .hero-video{
            object-fit:cover;
          }

          .hero-content h1{
            font-size:2rem;
          }

          .hero-content p{
            font-size:0.95rem;
          }

          .section-heading{
            margin:45px auto 35px;
          }

          .section-heading h2{
            font-size:2rem;
          }

          .video-card{
            height:390px;
          }

          .video-card video{
            object-fit:contain;
            object-position:center;
            background:#fff;
          }
        }

        @media (max-width:480px){
          .video-slide{
            height:360px;
          }

          .video-card{
            height:320px;
          }

          .video-card video{
            object-fit:contain;
            background:#fff;
          }
        }
      `}</style>

      <section className="tiktok-page">

        <Carousel
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
                  <div className="mini-title">TikTok Showcase</div>

                  <h1>
                    Trending <span className="gradient-text">TikTok Videos</span>
                  </h1>

                  <p>
                    Scroll-stopping short form content for modern brands.
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        <Container>
          <div className="section-heading">
            <div className="mini-title">Video Collection</div>

            <h2>
              Explore Premium{" "}
              <span className="gradient-text">TikTok Gallery</span>
            </h2>

            <p>
              High-converting short videos designed for growth and engagement.
            </p>
          </div>

          <Row className="g-4">
            {videos.map((item) => (
              <Col lg={3} md={6} sm={6} xs={12} key={item.id}>
                <div
                  className="video-card"
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