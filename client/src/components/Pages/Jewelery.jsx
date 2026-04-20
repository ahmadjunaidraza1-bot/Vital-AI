import React, { useState } from "react";
import { Container, Row, Col, Carousel, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const jewelryItems = [
  { id: 1, img: "/Images/1.png" },
  { id: 2, img: "/Images/2.png" },
  { id: 3, img: "/Images/4.png" },
  { id: 4, img: "/Images/9.png" },
  { id: 5, img: "/Images/10.png" },
  { id: 6, img: "/Images/11.png" },
  { id: 7, img: "/Images/14.png" },
  { id: 8, img: "/Images/15.png" },
  { id: 9, img: "/Images/19.png" },
  { id: 10, img: "/Images/20.png" },
  { id: 11, img: "/Images/16.png" },
  { id: 12, img: "/Images/17.png" },
];

const Jewelry = () => {
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

        .jewelry-page {
          padding: 70px 0 80px;
          background:
            radial-gradient(circle at top left, rgba(124,58,237,0.08), transparent 25%),
            radial-gradient(circle at top right, rgba(236,72,153,0.08), transparent 25%),
            #f8f9fc;
          min-height: 100vh;
        }

        .img-card {
          height: 360px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          cursor: pointer;
        }

        .img-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .img-card {
            height: auto;
          }

          .img-card img {
            height: auto;
            max-height: 290px;
            object-fit: contain;
            background: #fff;
          }
        }

        .carousel img {
          height: 450px;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .carousel img {
            height: 300px;
          }
        }

        /* Modal Image */
        .modal-img {
          width: 100%;
          max-height: 80vh;
          object-fit: contain;
        }
      `}</style>

      {/* CAROUSEL */}
      <Carousel fade controls indicators interval={3000}>
        <Carousel.Item>
          <img src="/Images/1.png" className="w-100" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/Images/4.png" className="w-100" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/Images/10.png" className="w-100" alt="" />
        </Carousel.Item>
      </Carousel>

      {/* GALLERY */}
      <section className="jewelry-page">
        <Container>
          <Row className="g-4">
            {jewelryItems.map((item) => (
              <Col lg={3} md={6} sm={6} key={item.id}>
                <div
                  className="img-card"
                  onClick={() => handleOpen(item.img)}
                >
                  <img src={item.img} alt="jewelry" />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* MODAL */}
    <Modal show={show} onHide={handleClose} centered size="lg">
  <Modal.Header closeButton />
  <Modal.Body className="p-0">
    <img src={activeImg} alt="full" className="modal-img" />
  </Modal.Body>
</Modal>
    </>
  );
};

export default Jewelry;