import React, { useState } from "react";
import { Container, Row, Col, Carousel, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const clothesItems = [
  { id: 1, img: "/Images/40.png" },
  { id: 2, img: "/Images/42.png" },
  { id: 3, img: "/Images/30.png" },
  { id: 4, img: "/Images/32.png" },
  { id: 5, img: "/Images/35.png" },
  { id: 6, img: "/Images/36.png" },
  { id: 7, img: "/Images/37.png" },
  { id: 8, img: "/Images/38.png" },
  { id: 9, img: "/Images/50.png" },
  { id: 10, img: "/Images/51.png" },
  { id: 11, img: "/Images/52.png" },
  { id: 12, img: "/Images/53.png" },
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
          height: 360px;
          border-radius: 20px;
          overflow: hidden;
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
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .img-card:hover img {
          transform: scale(1.05);
        }

        .carousel img {
          height: 450px;
          object-fit: cover;
        }

        .modal-img {
          width: 100%;
          max-height: 80vh;
          object-fit: contain;
          background: #fff;
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

        @media (max-width: 768px) {
          .img-card {
            height: 260px;
          }

          .carousel img {
            height: 300px;
          }
        }
      `}</style>

      {/* TOP SIMPLE CAROUSEL */}
      <Carousel fade controls indicators interval={3000}>
        <Carousel.Item>
          <img src="/Images/cb1.png" className="w-100" alt="slide1" />
        </Carousel.Item>

        <Carousel.Item>
          <img src="/Images/cb2.png" className="w-100" alt="slide2" />
        </Carousel.Item>
      </Carousel>

      <section className="clothes-page">
        <Container>
          <div className="section-heading">
            <div className="mini-title">Fashion Collection</div>
            <h1>
              Explore Premium <span className="gradient-text">Clothing Gallery</span>
            </h1>
            <p>
              Discover modern fashion styles in a clean and elegant visual showcase.
            </p>
          </div>

          <Row className="g-4">
            {clothesItems.map((item, index) => (
              <Col lg={3} md={6} sm={6} key={item.id}>
                <div
                  className="img-card"
                  style={{ animationDelay: `${index * 0.08}s` }}
                  onClick={() => handleOpen(item.img)}
                >
                  <img src={item.img} alt="clothing" />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* MODAL WITH CLOSE BUTTON */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton />
        <Modal.Body className="p-0">
          <img src={activeImg} alt="full" className="modal-img" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Clothes;