import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ProgressBar,
  Modal,
} from "react-bootstrap";
import {
  LightningChargeFill,
  ShieldCheck,
  Stars,
  CameraVideoFill,
  Globe2,
  CheckCircleFill,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    ai: 0,
    engagement: 0,
    conversion: 0,
  });

  const [visible, setVisible] = useState({});
  const sectionRefs = useRef([]);

  // Video Popup
  const [showVideo, setShowVideo] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");

  const openVideo = (path) => {
    setActiveVideo(path);
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
    setActiveVideo("");
  };

  // Scroll Reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            setVisible((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((sec) => sec && observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  // Analytics Count
  useEffect(() => {
    if (visible.analytics) {
      const animate = (key, target, speed) => {
        let count = 0;

        const timer = setInterval(() => {
          count++;
          setStats((prev) => ({ ...prev, [key]: count }));

          if (count >= target) clearInterval(timer);
        }, speed);
      };

      animate("ai", 85, 18);
      animate("engagement", 92, 16);
      animate("conversion", 78, 20);
    }
  }, [visible.analytics]);

  const reveal = (id) => ({
    opacity: visible[id] ? 1 : 0,
    transform: visible[id] ? "translateY(0)" : "translateY(60px)",
    transition: "all 1s ease",
  });

  return (
    <>
      <style>{`
        body{
          background:#fff;
          font-family:'Poppins',sans-serif;
          overflow-x:hidden;
        }

        .section-space{
          padding:100px 0;
        }

        .gradient-text{
          background:linear-gradient(90deg,#7c3aed,#ec4899,#06b6d4,#7c3aed);
          background-size:300% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          animation:shine 5s linear infinite;
          font-weight:800;
        }

        @keyframes shine{
          to{background-position:300% center;}
        }

        .glass{
          background:rgba(255,255,255,.92);
          backdrop-filter:blur(18px);
          border:1px solid rgba(0,0,0,.06);
          box-shadow:0 20px 50px rgba(0,0,0,.08);
          border-radius:24px;
        }

        .main-btn{
          border:none;
          padding:12px 28px;
          border-radius:50px;
          color:#fff;
          font-weight:700;
          background:linear-gradient(90deg,#7c3aed,#ec4899);
        }

        .outline-btn{
          border:2px solid #7c3aed;
          color:#7c3aed;
          padding:12px 28px;
          border-radius:50px;
          font-weight:700;
          background:#fff;
        }

        .mini-title{
          display:inline-block;
          padding:6px 16px;
          background:linear-gradient(135deg,#7c3aed20,#ec489920);
          border-radius:50px;
          font-size:12px;
          font-weight:700;
          color:#7c3aed;
          letter-spacing:1px;
          text-transform:uppercase;
          margin-bottom:12px;
        }

        .hover-card{
          transition:.4s;
        }

        .hover-card:hover{
          transform:translateY(-10px);
          box-shadow:0 25px 60px rgba(124,58,237,.15);
        }

        .feature-icon{
          width:60px;
          height:60px;
          border-radius:18px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:26px;
          color:#fff;
          background:linear-gradient(135deg,#7c3aed,#ec4899);
          margin-bottom:18px;
        }

        .about-card{
          background:#fff;
          padding:18px 20px;
          border-radius:14px;
          box-shadow:0 8px 25px rgba(0,0,0,.06);
          height:100%;
        }

        .studio-video{
          cursor:pointer;
          transition:.4s;
        }

        .studio-video:hover{
          transform:scale(1.03);
        }

        .work-card{
          position:relative;
          height:480px;
          border-radius:24px;
          overflow:hidden;
        }

        .work-img{
          width:100%;
          height:100%;
          object-fit:cover;
        }

        .testimonial-card{
          padding:35px;
          border-radius:24px;
          background:#fff;
          box-shadow:0 15px 45px rgba(0,0,0,.08);
          height:100%;
        }
      `}</style>

      {/* HERO */}
      <section className="section-space" style={{ paddingTop: "150px" }}>
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <div className="mini-title">✨ Next-Gen Digital Agency</div>

              <h1 className="display-4 fw-bold mb-4">
                <span className="gradient-text">AI-Powered</span>
                <br />
                Digital Solutions
                <br />
                <span className="gradient-text">for Modern Business</span>
              </h1>

              <p className="text-muted fs-5 mb-4">
                Helping businesses grow with intelligent automation,
                scalable technology, and high-end design.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <Button
                  className="main-btn"
                  onClick={() => navigate("/contact")}
                >
                  Get Started
                </Button>

                <Button
                  className="outline-btn"
                  onClick={() => navigate("/services")}
                >
                  Learn More
                </Button>
              </div>
            </Col>

            <Col lg={6}>
              <div
                ref={(el) => (sectionRefs.current[0] = el)}
                data-id="analytics"
                style={reveal("analytics")}
              >
                <Card className="glass p-4 border-0">
                  {[
                    ["AI Automation", stats.ai],
                    ["User Engagement", stats.engagement],
                    ["Conversion Rate", stats.conversion],
                  ].map((item, i) => (
                    <div className="mb-4" key={i}>
                      <div className="d-flex justify-content-between">
                        <span>{item[0]}</span>
                        <span>{item[1]}%</span>
                      </div>
                      <ProgressBar now={item[1]} />
                    </div>
                  ))}

                  <div className="glass p-3 mt-2">
                    <ShieldCheck color="#16a34a" /> Enterprise Security
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* VIDEO SECTION */}
      <section className="section-space">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <div className="mini-title">🎬 New: AI Virtual Studio</div>

              <h2 className="fw-bold display-4 mb-3">
                Revolutionize Your <br />
                <span className="gradient-text">
                  Product Presentation
                </span>
              </h2>
            </Col>

            <Col lg={6}>
              <Row className="g-3">
                <Col md={6}>
                  <video
                    onClick={() => openVideo("/videos/h1.mp4")}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="w-100 rounded-4 studio-video"
                    style={{ height: "400px", objectFit: "cover" }}
                  >
                    <source src="/videos/h1.mp4" />
                  </video>
                </Col>

                <Col md={6}>
                  <video
                    onClick={() => openVideo("/videos/h2.mp4")}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="w-100 rounded-4 studio-video"
                    style={{ height: "300px", objectFit: "cover" }}
                  >
                    <source src="/videos/h2.mp4" />
                  </video>
                </Col>

                <Col md={6}>
                  <video
                    onClick={() => openVideo("/videos/h3.mp4")}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="w-100 rounded-4 studio-video"
                    style={{ height: "300px", objectFit: "cover" }}
                  >
                    <source src="/videos/h3.mp4" />
                  </video>
                </Col>

                <Col md={6}>
                  <video
                    onClick={() => openVideo("/videos/h4.mp4")}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="w-100 rounded-4 studio-video"
                    style={{ height: "420px", objectFit: "cover" }}
                  >
                    <source src="/videos/h4.mp4" />
                  </video>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="section-space">
        <Container>
          <div className="text-center mb-5">
            <div className="mini-title">Our Expertise</div>
            <h2 className="fw-bold display-5">
              Intelligent Solutions
            </h2>
          </div>

          <Row className="g-4">
            {[
              ["Virtual Product Demo", <CameraVideoFill />],
              ["E-Commerce", <Globe2 />],
              ["Web Development", <LightningChargeFill />],
              ["Social Media", <Stars />],
            ].map((item, i) => (
              <Col md={6} lg={3} key={i}>
                <Card className="glass p-4 border-0 h-100">
                  <div className="feature-icon">{item[1]}</div>
                  <h5>{item[0]}</h5>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ABOUT */}
      <section className="section-space">
        <Container>
          <div className="text-center">
            <div className="mini-title">About Us</div>

            <h2 className="fw-bold display-5">
              Future of <span className="gradient-text">Digital</span>
            </h2>

            <Row className="g-4 mt-5">
              {[
                "AI-driven development",
                "Scalable architecture",
                "Global expert team",
                "High-performance systems",
              ].map((text, i) => (
                <Col md={6} key={i}>
                  <div className="about-card d-flex gap-3 align-items-center">
                    <CheckCircleFill color="#16a34a" />
                    {text}
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-space">
        <Container>
          <div className="text-center mb-5">
            <div className="mini-title">Testimonials</div>
            <h2 className="fw-bold display-5">
              What Clients Say
            </h2>
          </div>

          <Row className="g-4">
            <Col md={6}>
              <div className="testimonial-card">
                Amazing AI growth solutions for our company.
              </div>
            </Col>

            <Col md={6}>
              <div className="testimonial-card">
                Highly professional and modern team.
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-space">
        <Container>
          <Card className="glass p-5 border-0 text-center">
            <h2 className="fw-bold display-5">
              Ready to Scale with AI?
            </h2>

            <div className="mt-4">
              <Button
                className="main-btn"
                onClick={() => navigate("/contact")}
              >
                Get Started
              </Button>
            </div>
          </Card>
        </Container>
      </section>

      {/* VIDEO POPUP */}
      <Modal show={showVideo} onHide={closeVideo} centered size="lg">
        <Modal.Body className="p-0 bg-black">
          <video
            src={activeVideo}
            controls
            autoPlay
            style={{
              width: "100%",
              maxHeight: "80vh",
            }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Home;