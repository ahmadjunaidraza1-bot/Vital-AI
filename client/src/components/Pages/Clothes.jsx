import React, { useState } from "react";
import { Container, Row, Col, Carousel, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const clothesItems = [
  { id: 1, img: "/Images/40.webp" },
  { id: 2, img: "/Images/42.webp" },
  { id: 3, img: "/Images/30.webp" },
  { id: 4, img: "/Images/32.webp" },
  { id: 5, img: "/Images/35.webp" },
  { id: 6, img: "/Images/36.webp" },
  { id: 7, img: "/Images/37.webp" },
  { id: 8, img: "/Images/38.webp" },
  { id: 9, img: "/Images/50.webp" },
  { id: 10, img: "/Images/51.webp" },
  { id: 11, img: "/Images/52.webp" },
  { id: 12, img: "/Images/53.webp" },
];

const Clothes = () => {
  const [show, setShow] = useState(false);
  const [activeImg, setActiveImg] = useState("");

  const handleOpen = (img) => {
    setActiveImg(img);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setActiveImg("");
  };

  return (
    <>
      <style>{`
        body {
          background: #f8f9fc;
          font-family: 'Poppins', sans-serif;
        }

        .clothes-page {
          padding: 70px 0 80px;
          background:
            radial-gradient(circle at top left, rgba(124,58,237,0.08), transparent 25%),
            radial-gradient(circle at top right, rgba(236,72,153,0.08), transparent 25%),
            #f8f9fc;
          min-height: 100vh;
        }

        .mini-title {
          display: inline-block;
          padding: 7px 16px;
          border-radius: 50px;
          background: linear-gradient(135deg, rgba(124,58,237,0.12), rgba(236,72,153,0.12));
          color: #7c3aed;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .gradient-text {
          background: linear-gradient(90deg, #7c3aed, #ec4899, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }

        .section-heading {
          max-width: 820px;
          margin: 0 auto 50px;
          text-align: center;
        }

        .section-heading h1 {
          font-size: 3rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 16px;
        }

        .section-heading p {
          color: #6b7280;
        }

        .img-card {
          height: 280px;
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
          animation: fadeUp 0.7s ease both;
          cursor: pointer;
        }

        .img-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
        }

        .img-card img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          background: #fff;
          padding: 8px;
          transition: transform 0.6s ease;
        }

        .img-card:hover img {
          transform: scale(1.05);
        }

        .carousel img {
          height: 450px;
          object-fit: cover;
        }

        .modal-content {
          background: transparent;
          border: none;
        }

        .modal-header {
          background: #fff;
          border-radius: 14px 14px 0 0;
        }

        .modal-img {
          width: 100%;
          max-height: 88vh;
          object-fit: contain;
          background: #fff;
          border-radius: 0 0 14px 14px;
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
          .section-heading h1 {
            font-size: 2.4rem;
          }

          .img-card {
            height: 420px;
          }
        }

        @media (max-width: 768px) {
          .clothes-page {
            padding: 50px 0 60px;
          }

          .section-heading h1 {
            font-size: 2rem;
          }

          .img-card {
            height: 390px;
          }

          .img-card img {
            object-fit: contain;
            padding: 6px;
          }

          .carousel img {
            height: 320px;
            object-fit: cover;
          }
        }

        @media (max-width: 480px) {
          .img-card {
            height: 360px;
          }

          .carousel img {
            height: 280px;
          }
        }
      `}</style>

      <Carousel fade controls indicators interval={3000}>
        <Carousel.Item>
          <img
            src="/Images/cb1.webp"
            className="w-100"
            alt="Premium clothing AI showcase banner"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1400"
            height="600"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="/Images/cb2.png"
            className="w-100"
            alt="Fashion product visualization banner"
            loading="lazy"
            decoding="async"
            width="1400"
            height="600"
          />
        </Carousel.Item>
      </Carousel>

      <section className="clothes-page">
        <Container>
          <div className="section-heading">
            <div className="mini-title">Fashion Collection</div>
            <h1>
              Explore Premium{" "}
              <span className="gradient-text">Clothing Gallery</span>
            </h1>
            <p>
              Discover modern fashion styles in a clean and elegant visual showcase.
            </p>
          </div>

          <Row className="g-4">
            {clothesItems.map((item, index) => (
              <Col lg={3} md={6} sm={6} xs={12} key={item.id}>
                <div
                  className="img-card"
                  style={{ animationDelay: `${index * 0.08}s` }}
                  onClick={() => handleOpen(item.img)}
                >
                  <img
                    src={item.img}
                    alt={`AI clothing product showcase ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="400"
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton />
        <Modal.Body className="p-0">
          {activeImg && (
            <img
              src={activeImg}
              alt="Full clothing product preview"
              className="modal-img"
              loading="lazy"
              decoding="async"
            />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Clothes;