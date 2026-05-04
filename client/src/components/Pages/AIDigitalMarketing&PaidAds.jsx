import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button, Accordion } from "react-bootstrap";
import {
  CheckCircleFill,
  GraphUpArrow,
  MegaphoneFill,
  Bullseye,
  BarChartLineFill,
  PeopleFill,
  Stars,
  ArrowRight,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AIDigitalMarketingPaidAds() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "AI Digital Marketing & Paid Ads UK | Vital AI";
  }, []);

  const services = [
    {
      icon: <MegaphoneFill />,
      title: "Paid Ads Management",
      desc: "Meta, Google, TikTok and social ad campaigns built to generate leads, sales and brand visibility.",
    },
    {
      icon: <Bullseye />,
      title: "Audience Targeting",
      desc: "AI-assisted targeting strategy to reach the right customers based on behaviour, location and intent.",
    },
    {
      icon: <BarChartLineFill />,
      title: "Performance Tracking",
      desc: "Campaign monitoring, conversion tracking and reporting to improve results over time.",
    },
    {
      icon: <Stars />,
      title: "AI Creative Strategy",
      desc: "Scroll-stopping ad creatives, hooks, captions and visuals designed for higher engagement.",
    },
  ];

  const process = [
    "Business & Offer Analysis",
    "Audience Research",
    "Ad Creative Planning",
    "Campaign Launch",
    "Optimization & Reporting",
  ];

  const benefits = [
    "Generate more qualified leads",
    "Improve return on ad spend",
    "Reduce wasted ad budget",
    "Reach high-intent customers",
    "Scale campaigns with data-driven decisions",
  ];

  return (
    <div className="marketing-page">
      <style>{`
        .marketing-page {
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
              <span className="hero-badge">AI Marketing & Paid Ads</span>

              <h1 className="hero-title">
                AI Digital Marketing &{" "}
                <span className="gradient-text">Paid Ads Management</span>
              </h1>

              <p className="hero-text">
                We help businesses grow with AI-powered ad creatives,
                performance marketing, audience targeting, content strategy and
                data-driven campaign optimization.
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
                  src="/Images/CR1.webp"
                  alt="AI Digital Marketing and Paid Ads"
                />

                <div className="floating-card">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <GraphUpArrow color="#ec4899" size={24} />
                    <strong>Performance Growth</strong>
                  </div>
                  <p className="text-muted mb-0 small">
                    Campaigns designed to improve leads, sales, engagement and
                    advertising efficiency.
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
              Complete Digital Growth System
            </h2>
            <p className="text-muted mx-auto" style={{ maxWidth: "720px" }}>
              We combine AI content, paid advertising, targeting and performance
              tracking to help your business generate better results online.
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
              <span className="section-label">Why It Works</span>
              <h2 className="display-5 fw-bold mb-4">
                Better Creatives + Better Targeting =
                <span className="gradient-text"> Better Results</span>
              </h2>

              <p className="text-muted fs-5" style={{ lineHeight: "1.8" }}>
                Successful marketing needs more than just running ads. Your
                offer, creative, audience, landing page and tracking must work
                together. We build campaigns with that complete system in mind.
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
                    <PeopleFill />
                  </div>

                  <h3 className="fw-bold mb-3">
                    Best For Lead Generation & E-Commerce
                  </h3>

                  <p className="text-muted mb-4">
                    Ideal for local businesses, clinics, salons, restaurants,
                    e-commerce brands, service providers and companies that want
                    more qualified enquiries.
                  </p>

                  <Row className="g-3">
                    {[
                      "Meta Ads",
                      "Google Ads",
                      "TikTok Ads",
                      "SEO Content",
                      "Social Media",
                      "Lead Generation",
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
              How We Build Growth Campaigns
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
                    "Meta, Google and TikTok ad campaign setup",
                    "AI-generated ad creatives and captions",
                    "Landing page and offer improvement suggestions",
                    "Audience research and targeting strategy",
                    "Monthly content and ad creative planning",
                    "Campaign performance tracking and reporting",
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
              <span className="section-label">AI-Powered Marketing</span>
              <h2 className="display-5 fw-bold mb-4">
                Campaigns Built With{" "}
                <span className="gradient-text">
                  Data, Creativity & Conversion
                </span>
              </h2>

              <p className="text-muted fs-5" style={{ lineHeight: "1.8" }}>
                We use AI-assisted creative planning, content generation,
                performance insights and campaign testing to improve your
                marketing output and reduce guesswork.
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
              Digital Marketing & Paid Ads Questions
            </h2>
          </div>

          <Card className="faq-card">
            <Card.Body className="p-0">
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Which ad platforms do you manage?
                  </Accordion.Header>
                  <Accordion.Body>
                    We can work with Meta Ads, Google Ads and TikTok Ads,
                    depending on your business type, target audience and goals.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Do you create ad creatives too?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes. We create AI-assisted visuals, captions, hooks, banners,
                    short video concepts and ad copy for campaigns.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Is this good for local UK businesses?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes. This service can be used for local service businesses,
                    clinics, restaurants, salons, home improvement companies and
                    other UK-based businesses.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Do you guarantee sales or leads?
                  </Accordion.Header>
                  <Accordion.Body>
                    No agency can honestly guarantee exact sales or leads because
                    results depend on offer, pricing, market, budget and
                    competition. We focus on improving campaign structure,
                    creative quality, targeting and tracking.
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
              Ready to Scale Your Marketing?
            </h2>

            <p
              className="text-white-50 mx-auto mb-4"
              style={{ maxWidth: "720px", fontSize: "18px", lineHeight: "1.8" }}
            >
              Let’s build an AI-powered marketing system with better creatives,
              better targeting and performance-driven campaign optimization.
            </p>

            <Button className="main-btn" onClick={() => navigate("/contact")}>
              Start Your Growth Campaign <ArrowRight />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}