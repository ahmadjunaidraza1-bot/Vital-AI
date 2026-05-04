import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button, Accordion } from "react-bootstrap";
import {
  CheckCircleFill,
  CodeSlash,
  Speedometer2,
  Search,
  PhoneFill,
  Stars,
  LayoutTextWindowReverse,
  ArrowRight,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AIWebsiteDesignDevelopment() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "AI Website Design & Development UK | Vital AI";
  }, []);

  const services = [
    {
      icon: <LayoutTextWindowReverse />,
      title: "Custom Website Design",
      desc: "Modern, premium and conversion-focused website layouts designed around your brand and target customers.",
    },
    {
      icon: <CodeSlash />,
      title: "React Website Development",
      desc: "Fast, responsive and scalable websites built with clean front-end development and modern UI components.",
    },
    {
      icon: <Search />,
      title: "SEO-Friendly Structure",
      desc: "Clean page structure, service pages, headings, metadata and content layout planned for better search visibility.",
    },
    {
      icon: <Speedometer2 />,
      title: "Speed Optimization",
      desc: "Optimized images, clean layout, responsive sections and performance-focused improvements for better user experience.",
    },
  ];

  const process = [
    "Business & Website Planning",
    "UI/UX Design Direction",
    "Website Development",
    "SEO Page Structure",
    "Testing & Launch",
  ];

  const benefits = [
    "Create a stronger online presence",
    "Make your business look more professional",
    "Improve user experience and trust",
    "Generate more enquiries from your website",
    "Build a scalable website for future growth",
  ];

  return (
    <div className="website-page">
      <style>{`
        .website-page {
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
              <span className="hero-badge">AI Website Design</span>

              <h1 className="hero-title">
                AI Website Design &{" "}
                <span className="gradient-text">Development</span>
              </h1>

              <p className="hero-text">
                We design and develop modern, fast and SEO-friendly websites
                for businesses that want a premium online presence, better user
                experience and stronger conversion potential.
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
                  src="/Images/CR3(2).png"
                  alt="AI Website Design and Development"
                />

                <div className="floating-card">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <PhoneFill color="#ec4899" size={24} />
                    <strong>Responsive Design</strong>
                  </div>
                  <p className="text-muted mb-0 small">
                    Mobile-friendly websites designed for speed, trust and
                    customer enquiries.
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
              Modern Website Design & Development
            </h2>
            <p className="text-muted mx-auto" style={{ maxWidth: "720px" }}>
              We build high-quality business websites, service pages, landing
              pages and e-commerce-ready layouts with clean design and clear
              conversion flow.
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
                Your Website Is Often the{" "}
                <span className="gradient-text">First Sales Impression</span>
              </h2>

              <p className="text-muted fs-5" style={{ lineHeight: "1.8" }}>
                A slow, outdated or unclear website can reduce trust and lose
                potential customers. A professional website helps your business
                look credible, explain services clearly and convert visitors
                into enquiries.
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
                    Best For Service & Product Businesses
                  </h3>

                  <p className="text-muted mb-4">
                    Ideal for startups, agencies, clinics, restaurants,
                    e-commerce brands, local service providers, consultants and
                    companies that need a stronger digital presence.
                  </p>

                  <Row className="g-3">
                    {[
                      "Business Websites",
                      "Landing Pages",
                      "Service Pages",
                      "E-Commerce",
                      "Portfolio Sites",
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
              How We Build Your Website
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
                    "Custom website design and page layouts",
                    "React / front-end website development",
                    "Responsive mobile-friendly design",
                    "SEO-friendly service page structure",
                    "Fast-loading image and layout optimization",
                    "Contact forms, CTA sections and enquiry flow",
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
              <span className="section-label">Conversion-Focused Design</span>
              <h2 className="display-5 fw-bold mb-4">
                Websites Built to Look{" "}
                <span className="gradient-text">
                  Premium, Fast & Trustworthy
                </span>
              </h2>

              <p className="text-muted fs-5" style={{ lineHeight: "1.8" }}>
                We focus on clean sections, clear messaging, strong call-to-action
                buttons, SEO-friendly structure and responsive design so your
                website supports both branding and business growth.
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
              Website Design Questions
            </h2>
          </div>

          <Card className="faq-card">
            <Card.Body className="p-0">
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Do you design and develop complete websites?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes. We can design and develop complete business websites,
                    service websites, landing pages and e-commerce-ready
                    layouts.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Will the website be mobile-friendly?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes. The website layout is designed to work properly across
                    desktop, tablet and mobile screen sizes.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Do you make SEO-friendly service pages?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes. We can create dedicated service pages with proper page
                    titles, headings, content sections, internal linking and
                    SEO-focused structure.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Can you improve my existing website?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes. We can review your current website and improve layout,
                    speed, content structure, user experience and conversion
                    flow.
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
              Ready to Build a Better Website?
            </h2>

            <p
              className="text-white-50 mx-auto mb-4"
              style={{ maxWidth: "720px", fontSize: "18px", lineHeight: "1.8" }}
            >
              Let’s create a modern, fast and SEO-friendly website that helps
              your business look premium and generate more enquiries.
            </p>

            <Button className="main-btn" onClick={() => navigate("/contact")}>
              Start Website Project <ArrowRight />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}