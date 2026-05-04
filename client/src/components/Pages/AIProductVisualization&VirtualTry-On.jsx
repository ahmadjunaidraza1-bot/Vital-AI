import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button, Accordion } from "react-bootstrap";
import {
  CheckCircleFill,
  CameraFill,
  PersonBoundingBox,
  Badge3dFill,
  Stars,
  ImageFill,
  LightningChargeFill,
  ArrowRight,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AIProductVisualizationVirtualTryOn() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "AI Product Visualization & Virtual Try-On UK | Vital AI";
  }, []);

  const services = [
    {
      icon: <PersonBoundingBox />,
      title: "AI Virtual Try-On",
      desc: "Show apparel, handbags, jewellery and accessories on realistic AI models without expensive photoshoots.",
    },
    {
      icon: <CameraFill />,
      title: "AI Product Photoshoots",
      desc: "Premium product images for websites, social media, ads, banners and e-commerce listings.",
    },
    {
      icon: <Badge3dFill />,
      title: "3D Product Presentation",
      desc: "Modern product showcase visuals designed to make your products look premium and high-value.",
    },
    {
      icon: <ImageFill />,
      title: "Website & Social Creatives",
      desc: "Product banners, campaign assets, ad creatives and scroll-stopping social media visuals.",
    },
  ];

  const process = [
    "Product Image Review",
    "Creative Direction",
    "AI Model & Scene Creation",
    "Product Showcase Design",
    "Final Assets Delivery",
  ];

  const benefits = [
    "Reduce photoshoot cost",
    "Launch product visuals faster",
    "Make products look more premium",
    "Create content for website and social media",
    "Improve customer trust and product appeal",
  ];

  return (
    <div className="visualization-page">
      <style>{`
        .visualization-page {
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
          max-width: 285px;
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

        .feature-badge {
          background: linear-gradient(135deg, #7c3aed10, #ec489910);
          padding: 12px 20px;
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .feature-badge:hover {
          background: linear-gradient(135deg, #7c3aed20, #ec489920);
          transform: translateX(5px);
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

      <section className="hero-section">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <span className="hero-badge">AI Product Visualization</span>

              <h1 className="hero-title">
                AI Product Visualization &{" "}
                <span className="gradient-text">Virtual Try-On</span>
              </h1>

              <p className="hero-text">
                We create realistic AI product visuals, virtual try-on images,
                model photoshoots, banners and campaign assets for e-commerce
                brands that want premium content without expensive studio shoots.
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
                  src="/Images/CR2.png"
                  alt="AI Product Visualization and Virtual Try-On"
                />

                <div className="floating-card">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <LightningChargeFill color="#ec4899" size={24} />
                    <strong>Fast Visual Production</strong>
                  </div>
                  <p className="text-muted mb-0 small">
                    Premium product visuals for websites, ads and social media
                    without traditional photoshoot delays.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="text-center mb-5">
            <span className="section-label">What We Do</span>
            <h2 className="display-5 fw-bold">
              Premium AI Visual Content for Products
            </h2>
            <p className="text-muted mx-auto" style={{ maxWidth: "720px" }}>
              We help product-based brands create high-quality visual assets
              that improve product appeal across websites, social media, ads and
              e-commerce stores.
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

      <section className="section-padding bg-white">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <span className="section-label">Why It Matters</span>
              <h2 className="display-5 fw-bold mb-4">
                Better Visuals Create{" "}
                <span className="gradient-text">Better Product Trust</span>
              </h2>

              <p className="text-muted fs-5" style={{ lineHeight: "1.8" }}>
                Customers judge product quality through visuals before they
                read details. Premium product presentation helps your brand look
                more trustworthy, desirable and ready to buy.
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
                    Best For Product-Based Brands
                  </h3>

                  <p className="text-muted mb-4">
                    Ideal for fashion, handbags, jewellery, beauty, pet
                    accessories, watches, shoes, lifestyle products and
                    e-commerce brands that need better visual content.
                  </p>

                  <Row className="g-3">
                    {[
                      "Fashion",
                      "Handbags",
                      "Jewellery",
                      "Beauty",
                      "Pet Products",
                      "Accessories",
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

      <section className="section-padding">
        <Container>
          <div className="text-center mb-5">
            <span className="section-label">Our Process</span>
            <h2 className="display-5 fw-bold">
              How We Create Product Visuals
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
                    "AI model photoshoots for product display",
                    "Virtual try-on visuals for apparel and accessories",
                    "Product banners for websites and landing pages",
                    "Social media posts and ad creatives",
                    "Product launch campaign visuals",
                    "TikTok, Instagram and e-commerce content assets",
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
              <span className="section-label">AI Visual Production</span>
              <h2 className="display-5 fw-bold mb-4">
                Premium Product Content{" "}
                <span className="gradient-text">
                  Without Expensive Photoshoots
                </span>
              </h2>

              <p className="text-muted fs-5" style={{ lineHeight: "1.8" }}>
                Instead of arranging models, locations, studios and repeated
                shoots, AI visual production allows your brand to create premium
                product content faster and more affordably.
              </p>

              <Button className="main-btn mt-3" onClick={() => navigate("/contact")}>
                Request a Quote <ArrowRight />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="text-center mb-5">
            <span className="section-label">FAQs</span>
            <h2 className="display-5 fw-bold">
              Product Visualization Questions
            </h2>
          </div>

          <Card className="faq-card">
            <Card.Body className="p-0">
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    What is AI product visualization?
                  </Accordion.Header>
                  <Accordion.Body>
                    AI product visualization means creating product images,
                    model showcase visuals, campaign banners and lifestyle
                    scenes using AI-assisted design workflows.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Can you show my product on AI models?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes. We can create AI model showcase images for apparel,
                    handbags, jewellery, accessories and other product
                    categories depending on the product type and image quality.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Is this useful for e-commerce websites?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes. These visuals can be used on product pages, home page
                    banners, landing pages, ads, Instagram posts and TikTok
                    Shop content.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Do I need professional product photos first?
                  </Accordion.Header>
                  <Accordion.Body>
                    Clear product images help achieve better results. If product
                    images are low quality, we can still improve presentation,
                    but final output depends on the source material.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Container>
      </section>

      <section className="pb-5">
        <Container>
          <div className="dark-cta text-center">
            <h2 className="display-5 fw-bold mb-3">
              Ready to Upgrade Your Product Visuals?
            </h2>

            <p
              className="text-white-50 mx-auto mb-4"
              style={{ maxWidth: "720px", fontSize: "18px", lineHeight: "1.8" }}
            >
              Let’s create premium AI product visuals, virtual try-on images and
              campaign assets that make your products look more desirable.
            </p>

            <Button className="main-btn" onClick={() => navigate("/contact")}>
              Start Product Visualization <ArrowRight />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}