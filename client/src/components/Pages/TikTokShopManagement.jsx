import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button, Accordion } from "react-bootstrap";
import {
  CheckCircleFill,
  PlayCircleFill,
  GraphUpArrow,
  Shop,
  CameraReelsFill,
  MegaphoneFill,
  Stars,
  ArrowRight,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TikTokShopManagement() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "TikTok Shop Management UK | Vital AI";
  }, []);

  const services = [
    {
      icon: <Shop />,
      title: "TikTok Shop Setup",
      desc: "We help set up and optimize your TikTok Shop for better product visibility and smoother buying experience.",
    },
    {
      icon: <CameraReelsFill />,
      title: "AI Product Videos",
      desc: "High-converting short videos using AI visuals, product storytelling, hooks, and trend-based editing.",
    },
    {
      icon: <MegaphoneFill />,
      title: "TikTok Ads Management",
      desc: "Conversion-focused TikTok ad campaigns designed to drive traffic, product views, and sales.",
    },
    {
      icon: <GraphUpArrow />,
      title: "Growth Strategy",
      desc: "Content planning, offer positioning, competitor research, and performance improvement strategy.",
    },
  ];

  const process = [
    "Product & Store Analysis",
    "TikTok Shop Optimization",
    "AI Video Content Creation",
    "Ad Campaign Setup",
    "Weekly Performance Review",
  ];

  const benefits = [
    "Increase product visibility on TikTok",
    "Create viral-ready product content",
    "Reduce photoshoot and video production cost",
    "Improve engagement and conversion rate",
    "Build a stronger e-commerce brand presence",
  ];

  return (
    <div className="tiktok-page">
      <style>{`
        .tiktok-page {
          background: #f8f9fc;
          font-family: 'Poppins', sans-serif;
          overflow-x: hidden;
        }

        .gradient-text {
          background: linear-gradient(90deg, #7c3aed, #ec4899, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
        }

        .hero-section {
          padding: 120px 0 80px;
          background:
            radial-gradient(circle at top left, rgba(124,58,237,0.18), transparent 35%),
            radial-gradient(circle at bottom right, rgba(236,72,153,0.18), transparent 35%),
            #ffffff;
        }

        .hero-badge {
          display: inline-block;
          padding: 8px 18px;
          border-radius: 50px;
          background: rgba(124,58,237,0.1);
          color: #7c3aed;
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 18px;
        }

        .hero-title {
          font-size: 58px;
          line-height: 1.12;
          font-weight: 800;
          margin-bottom: 22px;
        }

        .hero-text {
          font-size: 18px;
          line-height: 1.8;
          color: #6b7280;
          max-width: 650px;
        }

        .main-btn {
          border: none;
          padding: 13px 30px;
          border-radius: 50px;
          color: #fff;
          font-weight: 700;
          background: linear-gradient(90deg, #7c3aed, #ec4899);
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .main-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(124,58,237,0.35);
          color: #fff;
        }

        .outline-btn {
          padding: 13px 30px;
          border-radius: 50px;
          border: 1px solid rgba(124,58,237,0.35);
          color: #7c3aed;
          background: #fff;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .outline-btn:hover {
          background: rgba(124,58,237,0.08);
          color: #7c3aed;
          transform: translateY(-3px);
        }

        .hero-image-box {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0,0,0,0.16);
          background: #111827;
        }

        .hero-image-box img {
          width: 100%;
          height: 520px;
          object-fit: cover;
          display: block;
        }

        .floating-card {
          position: absolute;
          left: 24px;
          bottom: 24px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(14px);
          border-radius: 22px;
          padding: 18px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.18);
          max-width: 270px;
        }

        .section-padding {
          padding: 90px 0;
        }

        .section-label {
          color: #7c3aed;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-size: 14px;
          font-weight: 800;
          margin-bottom: 12px;
          display: inline-block;
        }

        .service-card {
          height: 100%;
          border: 0;
          border-radius: 26px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(12px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
          transition: 0.35s ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(0,0,0,0.12);
        }

        .icon-box {
          width: 56px;
          height: 56px;
          border-radius: 18px;
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          margin-bottom: 18px;
        }

        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          font-weight: 600;
          color: #374151;
        }

        .process-step {
          background: #fff;
          border-radius: 22px;
          padding: 22px;
          height: 100%;
          box-shadow: 0 12px 32px rgba(0,0,0,0.07);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .step-number {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: linear-gradient(90deg, #7c3aed, #ec4899);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          margin-bottom: 14px;
        }

        .dark-cta {
          background:
            radial-gradient(circle at top left, rgba(124,58,237,0.3), transparent 35%),
            radial-gradient(circle at bottom right, rgba(236,72,153,0.25), transparent 35%),
            #111827;
          border-radius: 34px;
          padding: 60px;
          color: #fff;
          overflow: hidden;
        }

        .faq-card {
          border-radius: 24px;
          border: 0;
          box-shadow: 0 12px 35px rgba(0,0,0,0.08);
          overflow: hidden;
        }

        .accordion-button:not(.collapsed) {
          background: rgba(124,58,237,0.08);
          color: #7c3aed;
          box-shadow: none;
        }

        .accordion-button:focus {
          box-shadow: none;
        }

        @media(max-width: 768px) {
          .hero-section {
            padding: 90px 0 60px;
            text-align: center;
          }

          .hero-title {
            font-size: 38px;
          }

          .hero-text {
            font-size: 16px;
          }

          .hero-image-box img {
            height: 360px;
            object-fit: contain;
            background: #fff;
          }

          .floating-card {
            position: static;
            max-width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .section-padding {
            padding: 60px 0;
          }

          .dark-cta {
            padding: 36px 22px;
            text-align: center;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <span className="hero-badge">TikTok Shop Growth Service</span>

              <h1 className="hero-title">
                TikTok Shop Management{" "}
                <span className="gradient-text">for E-Commerce Brands</span>
              </h1>

              <p className="hero-text">
                We help online stores grow on TikTok Shop with AI-generated
                product videos, viral content strategy, TikTok ads, and
                conversion-focused store optimization.
              </p>

              <div className="d-flex gap-3 mt-4 flex-wrap justify-content-center justify-content-lg-start">
                <Button className="main-btn" onClick={() => navigate("/contact")}>
                  Get Free Consultation <ArrowRight />
                </Button>

                <Button
                  className="outline-btn"
                  onClick={() => navigate("/our-work")}
                >
                  View Our Work
                </Button>
              </div>
            </Col>

            <Col lg={6}>
              <div className="hero-image-box">
                <img
                  src="/Images/new4.png"
                  alt="TikTok Shop Management Service"
                />

                <div className="floating-card">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <PlayCircleFill color="#ec4899" size={24} />
                    <strong>AI Viral Content</strong>
                  </div>
                  <p className="text-muted mb-0 small">
                    Product videos designed for hooks, retention, engagement and
                    TikTok Shop sales.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-5">
            <span className="section-label">What We Do</span>
            <h2 className="display-5 fw-bold">
              Complete TikTok Shop Growth System
            </h2>
            <p className="text-muted mx-auto" style={{ maxWidth: "720px" }}>
              From store setup to content creation and paid advertising, we
              manage the core areas needed to grow your e-commerce brand on
              TikTok.
            </p>
          </div>

          <Row className="g-4">
            {services.map((item, i) => (
              <Col lg={3} md={6} key={i}>
                <Card className="service-card">
                  <Card.Body className="p-4">
                    <div className="icon-box">{item.icon}</div>
                    <h5 className="fw-bold mb-3">{item.title}</h5>
                    <p className="text-muted mb-0">{item.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* WHY IT WORKS */}
      <section className="section-padding bg-white">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <span className="section-label">Why TikTok Shop</span>
              <h2 className="display-5 fw-bold mb-4">
                Turn Short Videos Into{" "}
                <span className="gradient-text">Real Product Sales</span>
              </h2>

              <p className="text-muted fs-5" style={{ lineHeight: "1.8" }}>
                TikTok Shop gives e-commerce brands a direct way to sell through
                content. The brands that win are the ones with strong hooks,
                consistent content, product storytelling, and conversion-focused
                offers.
              </p>

              <div className="mt-4">
                {benefits.map((benefit, i) => (
                  <div className="benefit-item" key={i}>
                    <CheckCircleFill color="#16a34a" size={20} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </Col>

            <Col lg={6}>
              <Card className="service-card border-0">
                <Card.Body className="p-4 p-lg-5">
                  <div className="icon-box">
                    <Stars />
                  </div>

                  <h3 className="fw-bold mb-3">
                    Built for E-Commerce Categories
                  </h3>

                  <p className="text-muted mb-4">
                    This service is ideal for online sellers in fashion,
                    handbags, beauty, pet accessories, jewellery, gadgets,
                    fitness products, and lifestyle products.
                  </p>

                  <Row className="g-3">
                    {[
                      "Fashion",
                      "Beauty",
                      "Pet Products",
                      "Jewellery",
                      "Handbags",
                      "Gadgets",
                    ].map((cat, i) => (
                      <Col xs={6} key={i}>
                        <div className="feature-badge">
                          <strong>{cat}</strong>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-5">
            <span className="section-label">Our Process</span>
            <h2 className="display-5 fw-bold">
              How We Grow Your TikTok Shop
            </h2>
          </div>

          <Row className="g-4">
            {process.map((step, i) => (
              <Col lg md={6} key={i}>
                <div className="process-step">
                  <div className="step-number">{i + 1}</div>
                  <h6 className="fw-bold mb-0">{step}</h6>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CONTENT OFFER */}
      <section className="section-padding bg-white">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <Card className="service-card">
                <Card.Body className="p-4 p-lg-5">
                  <h3 className="fw-bold mb-4 gradient-text">
                    What You Can Get
                  </h3>

                  {[
                    "TikTok Shop setup and product listing optimization",
                    "AI model product showcase videos",
                    "TikTok ad creatives and hooks",
                    "Monthly content calendar",
                    "Product-focused short-form video strategy",
                    "Performance tracking and improvement suggestions",
                  ].map((item, i) => (
                    <div className="benefit-item" key={i}>
                      <CheckCircleFill color="#7c3aed" size={20} />
                      <span>{item}</span>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <span className="section-label">High-Converting Content</span>
              <h2 className="display-5 fw-bold mb-4">
                AI Product Videos That Look{" "}
                <span className="gradient-text">Real, Premium & Scroll-Stopping</span>
              </h2>

              <p className="text-muted fs-5" style={{ lineHeight: "1.8" }}>
                We create product videos that show your product in real-use
                scenarios, with AI-generated models, premium visuals, product
                benefits, and platform-native editing designed for TikTok.
              </p>

              <Button className="main-btn mt-3" onClick={() => navigate("/contact")}>
                Request a Quote <ArrowRight />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-5">
            <span className="section-label">FAQs</span>
            <h2 className="display-5 fw-bold">
              TikTok Shop Management Questions
            </h2>
          </div>

          <Card className="faq-card">
            <Card.Body className="p-0">
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Do you set up TikTok Shop from scratch?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, we can help with TikTok Shop setup, product listing
                    structure, visual presentation, and basic store optimization.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Can you create TikTok videos for my products?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes. We create AI-assisted product videos, product showcase
                    visuals, hooks, short-form ads, and organic-style TikTok
                    content.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Is this service only for UK e-commerce brands?
                  </Accordion.Header>
                  <Accordion.Body>
                    The page is positioned for UK businesses, but the service can
                    be adapted for other markets depending on product category
                    and audience.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Do you also manage TikTok ads?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, TikTok ad campaign setup and creative strategy can be
                    included depending on the package.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-5">
        <Container>
          <div className="dark-cta text-center">
            <h2 className="display-5 fw-bold mb-3">
              Ready to Grow Your TikTok Shop?
            </h2>

            <p
              className="text-white-50 mx-auto mb-4"
              style={{ maxWidth: "720px", fontSize: "18px", lineHeight: "1.8" }}
            >
              Let’s create a TikTok Shop growth system with AI product videos,
              viral content, and conversion-focused strategy.
            </p>

            <Button className="main-btn" onClick={() => navigate("/contact")}>
              Start Your TikTok Growth <ArrowRight />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}