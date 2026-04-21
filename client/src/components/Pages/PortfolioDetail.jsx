import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  ArrowLeft,
  CheckCircleFill,
  StarFill,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Refs for auto-play videos
  const cinematicVideoRef = useRef(null);
  const socialVideoRef = useRef(null);

  // Project data with clear separation
  const projects = {
    "pro-chauffeurs": {
      title: "Pro Chauffeurs",
      category: "Social Media Campaign",
      banner: "/Images/cr8.png",
      description: "Luxury car booking system branding and social media growth strategy.",
      story: "Pro Chauffeurs is a premier luxury car booking service that redefines executive travel. Our goal was to translate their high-end physical service into a digital experience that resonates with elite clients. We focused on 'The Arrival Experience'—the feeling of luxury from the moment you book to the moment you reach your destination.",
      highlights: [
        { title: "Mobile-First Ads", desc: "Optimized visuals for high-speed scrolling on Instagram and TikTok." },
        { title: "Luxury UI Kit", desc: "A consistent visual language using deep blacks, gold accents, and clean typography." },
      ],
      details: {
        client: "Pro Chauffeurs",
        industry: "Luxury Transport",
        services: "Social Media, UI/UX",
        year: "2024",
      },
      cinematic: {
        title: "Cinematic Experience",
        subtitle: "Brand Showcase Video",
        videoSrc: "/videos/pd1.mp4",
        posterUrl: "/Images/p1.webp",
      },
      socialMedia: {
        title: "Social Media",
        subtitle: "Viral Content Strategy",
        description: "We created a series of vertical reels designed to capture attention in the first 2 seconds. By showcasing the sleek interiors and professional service, we increased their social engagement by 200%.",
        features: ["High-Retention Hooks", "Seamless Transitions", "Luxury Color Grading", "Trend-Aligned Audio"],
        videoSrc: "/videos/pd2.mp4",
        posterUrl: "/Images/p2.webp",
      },
      gallery: [
        "/Images/p1.webp",
        "/Images/cr4.png",
        "/Images/cr6.png",
        "/Images/cr7.png",
        "/Images/cr5.png",
        "/Images/cr9.png",
        "/Images/cr10.png",
        "/Images/cr11.png",
      ],
    },
    "aura-e-commerce": {
      title: "Aura E-Commerce",
      category: "E-Commerce",
      banner: "/Images/p1.webp",
      description: "Modern e-commerce platform with AI-powered recommendations.",
      story: "Aura E-Commerce is a cutting-edge online store that leverages AI to provide personalized shopping experiences, increasing conversion rates by 156%.",
      highlights: [
        { title: "AI Product Recommendations", desc: "Personalized product suggestions based on user behavior." },
        { title: "Seamless Checkout", desc: "One-click checkout with multiple payment options." },
      ],
      details: {
        client: "Aura Retail",
        industry: "E-Commerce",
        services: "Web Development, AI Integration",
        year: "2024",
      },
      cinematic: {
        title: "Shopping Experience",
        subtitle: "E-Commerce Platform Demo",
        videoSrc: "/videos/pd1.mp4",
        posterUrl: "/Images/p1.webp",
      },
      socialMedia: {
        title: "Digital Marketing",
        subtitle: "Social Media Strategy",
        description: "Comprehensive social media campaign that drove 300% increase in traffic and 45% boost in sales.",
        features: ["Instagram Shopping", "Facebook Ads Optimization", "Email Marketing Automation", "Influencer Partnerships"],
        videoSrc: "/videos/pd2.mp4",
        posterUrl: "/Images/p2.webp",
      },
      gallery: [
        "/Images/p1.webp",
        "/Images/p2.webp",
        "/Images/p3.webp",
        "/Images/p4.webp",
        "/Images/p5.webp",
        "/Images/p6.webp",
        "/Images/p7.webp",
        "/Images/p8.webp",
        "/Images/p9.webp",
      ],
    },
    "zenith-mobile-app": {
      title: "Zenith Mobile App",
      category: "Mobile App",
      banner: "/Images/p1.webp",
      description: "Feature-rich mobile application with stunning UI/UX.",
      story: "Zenith is a lifestyle app that helps users track their daily activities, set goals, and achieve personal milestones with an intuitive interface.",
      highlights: [
        { title: "Intuitive UI", desc: "Clean and user-friendly interface for seamless navigation." },
        { title: "Real-time Analytics", desc: "Track your progress with live data and insights." },
      ],
      details: {
        client: "Zenith Labs",
        industry: "Mobile Technology",
        services: "App Development, UI/UX",
        year: "2024",
      },
      cinematic: {
        title: "App Experience",
        subtitle: "Mobile App Demo",
        videoSrc: "/videos/pd1.mp4",
        posterUrl: "/Images/p1.webp",
      },
      socialMedia: {
        title: "App Launch",
        subtitle: "Marketing Campaign",
        description: "Strategic launch campaign that achieved 500K+ downloads in first month.",
        features: ["App Store Optimization", "Influencer Marketing", "Launch Event", "Referral Program"],
        videoSrc: "/videos/pd2.mp4",
        posterUrl: "/Images/p2.webp",
      },
      gallery: [
        "/Images/p1.webp",
        "/Images/cr2.png",
        "/Images/cr4.png",
        "/Images/cr7.png",
        "/Images/cr6.png",
        "/Images/p6.webp",
        "/Images/p7.webp",
        "/Images/p8.webp",
        "/Images/p9.webp",
      ],
    },
  };

  const project = projects[id];

  // Auto-play video when in viewport
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Changed to 0.3 for earlier trigger
    };

    const handleIntersection = (entries, videoRef) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(error => {
            console.log("Auto-play prevented:", error);
          });
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      });
    };

    const cinematicObserver = new IntersectionObserver(
      (entries) => handleIntersection(entries, cinematicVideoRef),
      options
    );
    const socialObserver = new IntersectionObserver(
      (entries) => handleIntersection(entries, socialVideoRef),
      options
    );

    if (cinematicVideoRef.current) {
      cinematicObserver.observe(cinematicVideoRef.current);
    }
    if (socialVideoRef.current) {
      socialObserver.observe(socialVideoRef.current);
    }

    return () => {
      if (cinematicVideoRef.current) {
        cinematicObserver.unobserve(cinematicVideoRef.current);
      }
      if (socialVideoRef.current) {
        socialObserver.unobserve(socialVideoRef.current);
      }
    };
  }, []);

  if (!project) {
    return (
      <Container className="py-5 text-center">
        <h2>Project not found</h2>
        <Button className="main-btn mt-3" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </Container>
    );
  }

  return (
    <>
      <style>{`
        body {
          background: #f8f9fc;
          font-family: 'Poppins', sans-serif;
        }

        .gradient-text {
          background: linear-gradient(90deg, #7c3aed, #ec4899, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
        }

        .main-btn {
          border: none;
          padding: 12px 32px;
          border-radius: 50px;
          color: #fff;
          font-weight: 600;
          background: linear-gradient(90deg, #7c3aed, #ec4899);
          transition: all 0.3s ease;
        }

        .main-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.3);
        }

        .custom-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 24px;
          transition: all 0.3s ease;
          overflow: hidden;
          height: 100%;
        }

        .custom-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .card-gradient-heading {
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }

        .section-title {
          font-size: 14px;
          font-weight: 700;
          color: #7c3aed;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 15px;
          display: inline-block;
        }

        .gallery-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 16px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .gallery-img:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
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

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #7c3aed;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .back-link:hover {
          gap: 12px;
          color: #ec4899;
        }

        /* Cinematic Video - Full Width */
        .video-wrapper {
          position: relative;
          border-radius: 3rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          background: black;
          aspect-ratio: 16 / 9;
        }

        .video-wrapper video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Social Video - Reduced Height */
        .portrait-video-wrapper {
          position: relative;
          border-radius: 2rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          background: black;
          aspect-ratio: 4 / 5;
          max-width: 350px;
          margin: 0 auto;
          height: auto;
        }

        .portrait-video-wrapper video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        video {
          display: block;
        }

        video:focus {
          outline: none;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .portrait-video-wrapper {
            max-width: 280px;
            aspect-ratio: 4 / 5;
          }
        }
      `}</style>

      {/* Back Button */}
      <section className="pt-5">
        <Container>
          <div onClick={() => navigate("/portfolio")} className="back-link">
            <ArrowLeft size={20} /> Back to Portfolio
          </div>
        </Container>
      </section>

      {/* Banner Section */}
      <section className="py-4">
        <Container>
          <div className="position-relative rounded-4 overflow-hidden shadow-lg">
            <img
              src={project.banner}
              alt={project.title}
              style={{
                width: "100%",
                height: "480px",
                objectFit: "cover",
              }}
            />
            <div
              className="position-absolute bottom-0 start-0 end-0 p-5"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
              }}
            >
              <span
                className="section-title bg-white px-3 py-1 rounded-pill"
                style={{ fontSize: "12px" }}
              > 
                {project.category}
              </span>
              <h1 className="text-white display-3 fw-bold mt-3">{project.title}</h1>
              <p className="text-white-50 fs-5">{project.description}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* The Brand Story Section */}
      <section className="py-5">
        <Container>
          <Row className="g-5">
            <Col lg={7}>
              <Card className="custom-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 p-lg-5">
                  <span className="section-title">The Brand Story</span>
                  <h2 className="fw-bold display-6 mb-4 card-gradient-heading">
                    {project.title}
                  </h2>
                  <p className="text-muted fs-5 mb-4" style={{ lineHeight: "1.8" }}>
                    {project.story}
                  </p>
                  <Row className="g-3 mt-2">
                    {project.highlights.map((item, i) => (
                      <Col md={6} key={i}>
                        <div className="feature-badge">
                          <h6 className="fw-bold mb-2 card-gradient-heading">{item.title}</h6>
                          <p className="text-muted small mb-0">{item.desc}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={5}>
              <Card className="custom-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 p-lg-5">
                  <h5 className="fw-bold mb-4 gradient-text">Project Details</h5>
                  <div className="mb-3 pb-2 border-bottom">
                    <small className="text-muted d-block mb-1">Client</small>
                    <strong>{project.details.client}</strong>
                  </div>
                  <div className="mb-3 pb-2 border-bottom">
                    <small className="text-muted d-block mb-1">Industry</small>
                    <strong>{project.details.industry}</strong>
                  </div>
                  <div className="mb-3 pb-2 border-bottom">
                    <small className="text-muted d-block mb-1">Services</small>
                    <strong>{project.details.services}</strong>
                  </div>
                  <div>
                    <small className="text-muted d-block mb-1">Year</small>
                    <strong>{project.details.year}</strong>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Cinematic Experience Section */}
      <section className="py-5">
        <Container>
          <Card className="custom-card border-0 shadow-sm overflow-hidden">
            <Card.Body className="p-4 p-lg-5 text-center">
              <span className="section-title">{project.cinematic.title}</span>
              <h2 className="display-4 fw-bold card-gradient-heading mb-4">{project.cinematic.subtitle}</h2>
              <div className="video-wrapper">
                <video 
                  ref={cinematicVideoRef}
                  controls
                  muted
                  playsInline
                  poster={project.cinematic.posterUrl}
                  preload="metadata"
                  loop
                >
                  <source src={project.cinematic.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Social Media Section */}
      <section className="py-5">
        <Container>
          <Card className="custom-card border-0 shadow-sm overflow-hidden">
            <Card.Body className="p-4 p-lg-5">
              <Row className="align-items-center g-5">
                <Col lg={6}>
                  <span className="section-title">{project.socialMedia.title}</span>
                  <h2 className="fw-bold display-5 mb-4 card-gradient-heading">{project.socialMedia.subtitle}</h2>
                  <p className="text-muted fs-5 mb-4" style={{ lineHeight: "1.8" }}>
                    {project.socialMedia.description}
                  </p>
                  <Row className="g-3">
                    {project.socialMedia.features.map((feature, i) => (
                      <Col md={6} key={i}>
                        <div className="d-flex align-items-center gap-2 p-2">
                          <StarFill color="#7c3aed" size={18} />
                          <span className="fw-semibold">{feature}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Col>
                <Col lg={6}>
                  <div className="portrait-video-wrapper">
                    <video 
                      ref={socialVideoRef}
                      controls
                      muted
                      playsInline
                      poster={project.socialMedia.posterUrl}
                      preload="metadata"
                      loop
                    >
                      <source src={project.socialMedia.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Visual Gallery Section */}
      <section className="py-5">
        <Container>
          <Card className="custom-card border-0 shadow-sm overflow-hidden">
            <Card.Body className="p-4 p-lg-5">
              <div className="text-center mb-5">
                <span className="section-title">Visual Gallery</span>
                <h2 className="display-4 fw-bold card-gradient-heading">The Campaign Assets</h2>
              </div>
              <Row className="g-4">
                {project.gallery.map((img, i) => (
                  <Col md={4} lg={3} key={i}>
                    <img src={img} alt={`Gallery ${i + 1}`} className="gallery-img" />
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 mb-5">
        <Container>
          <Card className="custom-card border-0 shadow-lg text-center overflow-hidden">
            <Card.Body className="p-5 p-lg-5">
              <h2 className="display-5 fw-bold mb-3">
                Want Results <span className="gradient-text">Like This?</span>
              </h2>
              <p className="text-muted fs-5 mb-4">
                Let's transform your brand with AI-powered visuals and high-converting
                social media strategies.
              </p>
              <Button className="main-btn" onClick={() => navigate("/contact")}>
                Start Your Project →
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </section>
    </>
  );
};

export default PortfolioDetail;