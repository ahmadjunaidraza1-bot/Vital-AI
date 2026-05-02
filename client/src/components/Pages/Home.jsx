import React, { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Modal,
  Carousel,
  Container,
  Row,
  Col,
  Button,
  Card,
} from "react-bootstrap";
import {
  CameraVideoFill,
  Globe2,
  LightningChargeFill,
  Stars,
  CheckCircleFill,
  GraphUpArrow,
  MegaphoneFill,
  EnvelopePaperFill,
  DisplayFill,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const navigate = useNavigate();

  const [visible, setVisible] = useState({});
  const [showVideo, setShowVideo] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");

  const observedRefs = useRef({});

  const setSectionRef = (id) => (el) => {
    if (el) observedRefs.current[id] = el;
  };

  const closeVideo = () => {
    setShowVideo(false);
    setActiveVideo("");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.dataset.section;
          if (entry.isIntersecting && id) {
            setVisible((prev) => ({ ...prev, [id]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -60px 0px" }
    );

    Object.values(observedRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const revealClass = (sectionId, type = "up") =>
    `${visible[sectionId] ? `reveal ${type} show` : `reveal ${type}`}`;

  const openVideo = (src) => {
    setActiveVideo(src);
    setShowVideo(true);
  };

  const services = [
    {
      title: "Virtual Product Demo",
      icon: <CameraVideoFill />,
      desc: "AI-powered try-ons and ads",
      motion: "left",
      link: "/services#virtual-product-demo",
    },
    {
      title: "E-Commerce Solutions",
      icon: <Globe2 />,
      desc: "Smart stores & AI automation",
      motion: "up",
      link: "/services#ecommerce-solutions",
    },
    {
      title: "Web Development",
      icon: <LightningChargeFill />,
      desc: "Modern blazing-fast websites",
      motion: "up",
      link: "/services#website-building",
    },
    {
      title: "Social Media Content",
      icon: <Stars />,
      desc: "Viral reels and ad creatives",
      motion: "right",
      link: "/services#digital-marketing",
    },
  ];

  const marketingCards = [
    { title: "TikTok Store Management", icon: <DisplayFill /> },
    { title: "SEO", icon: <GraphUpArrow /> },
    { title: "Social Media Marketing", icon: <MegaphoneFill /> },
    { title: "Google Ads Marketing", icon: <EnvelopePaperFill /> },
  ];

  const studioItems = [
    {
      title: "Virtual Try-Ons",
      desc: "Let customers see clothes on realistic AI models.",
      img: "/Images/new.webp",
      fallbackImg: "/Images/new.png",
      link: "/clothes",
      motion: "left",
    },
    {
      title: "Jewelry Rendering",
      desc: "Hyper-realistic 3D jewelry demonstrations.",
      img: "/Images/4.webp",
      fallbackImg: "/Images/4.png",
      link: "/jewelery",
      motion: "up",
    },
    {
      title: "TikTok Trending Store",
      desc: "Viral-ready videos for TikTok & Instagram.",
      src: "/videos/h1.mp4",
      poster: "/Images/h1-poster.webp",
      fallbackPoster: "/Images/new.png",
      link: "/tiktok",
      motion: "up",
    },
    {
      title: "Social Media Ads",
      desc: "Generate 100+ ad variations in minutes.",
      img: "/Images/cr4.webp",
      fallbackImg: "/Images/cr4.png",
      link: "/socialmedia",
      motion: "right",
    },
  ];

  const projects = [
    {
      id: "pro-chauffeurs",
      title: "Pro Chauffeurs",
      category: "Social Media Posts",
      img: "/Images/cr11.webp",
      fallbackImg: "/Images/cr11.png",
      motion: "left",
    },
    {
      id: "viper",
      title: "Viper",
      category: "Automotive Brand Campaign",
      img: "/Images/vg4.webp",
      fallbackImg: "/Images/vg4.png",
      motion: "up",
    },
    {
      id: "women-bags",
      title: "Women Bags",
      category: "Fashion Accessories Campaign",
      img: "/Images/5.webp",
      fallbackImg: "/Images/5.png",
      motion: "up",
    },
    {
      id: "ecommerce-clothing",
      title: "E-Commerce Clothing",
      category: "Fashion E-Commerce",
      img: "/Images/cb1.webp",
      fallbackImg: "/Images/cb1.png",
      motion: "right",
    },
  ];

  const testimonials = [
    {
      text: `"VITAL AI transformed our digital presence. Their AI-driven approach to e-commerce increased our conversion rate by 45% in just three months."`,
      name: "Sarah Johnson",
      role: "CEO at TechFlow",
      img: "/Images/t1.webp",
      fallbackImg: "/Images/t1.jpg",
      motion: "left",
    },
    {
      text: `"The most professional team we have worked with. Their ability to blend high-end design with complex AI logic is truly impressive."`,
      name: "Michael Chen",
      role: "Founder of Nexus",
      img: "/Images/t2.webp",
      fallbackImg: "/Images/t2.jpg",
      motion: "right",
    },
  ];

  const aboutPoints = [
    "AI-driven product development",
    "Modern scalable architecture",
    "Global expert team",
    "High-performance AI systems",
  ];

  const OptimizedImage = ({
    webp,
    fallback,
    alt,
    className,
    loading = "lazy",
    fetchPriority,
    width,
    height,
  }) => (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img
        src={fallback || webp}
        alt={alt}
        className={className}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        width={width}
        height={height}
      />
    </picture>
  );

  return (
    <>
      <style>{`
        html, body {
          overflow-x: hidden;
        }

        body {
          background: #fff;
          font-family: 'Poppins', sans-serif;
        }

        img, video {
          max-width: 100%;
          display: block;
        }

        .gradient-text {
          background: linear-gradient(90deg, #7c3aed, #ec4899, #06b6d4, #7c3aed);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 5s linear infinite;
          font-weight: 800;
        }

        @keyframes shine {
          to { background-position: 300% center; }
        }

        .glass {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
          border-radius: 24px;
        }

        .hover-card {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .hover-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 60px rgba(124, 58, 237, 0.15);
        }

        .main-btn {
          border: none;
          padding: 9px 20px;
          border-radius: 50px;
          color: #fff;
          font-weight: 600;
          background: linear-gradient(90deg, #7c3aed, #ec4899);
          transition: 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 40px;
          font-size: 14px;
        }

        .main-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(236, 72, 153, 0.3);
          color: #fff;
        }

        .outline-btn {
          border: 2px solid #7c3aed;
          color: #7c3aed;
          padding: 9px 20px;
          border-radius: 50px;
          font-weight: 600;
          background: #fff;
          transition: 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          min-height: 40px;
          font-size: 14px;
        }

        .outline-btn:hover {
          background: #7c3aed10;
          transform: translateY(-2px);
          color: #7c3aed;
        }

        .section-space {
          padding: 80px 0;
          background: #fff;
        }

        .mini-title {
          display: inline-block;
          padding: 6px 16px;
          background: linear-gradient(135deg, #7c3aed20, #ec489920);
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          color: #7c3aed;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          color: #fff;
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          margin-bottom: 18px;
        }

        .hero-media {
          width: 100%;
          height: clamp(420px, 62vw, 550px);
          object-fit: cover;
          object-position: center;
          background: #fff;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          text-align: left;
          background: linear-gradient(
            90deg,
            rgba(0,0,0,0.72) 0%,
            rgba(0,0,0,0.42) 38%,
            rgba(0,0,0,0.18) 60%,
            transparent 100%
          );
          padding: 20px 0;
          padding-top: 70px;
        }

        .hero-content {
          max-width: 560px;
        }

        .hero-mini-title {
          font-size: 11px;
          padding: 5px 12px;
          margin-bottom: 10px;
        }

        .hero-title {
          font-size: 2.2rem;
          line-height: 1.25;
          font-weight: 700;
        }

        .hero-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .hero-btn-small {
          padding: 8px 18px !important;
          min-height: 38px !important;
          font-size: 13px !important;
        }

        .studio-card {
          position: relative;
          height: clamp(240px, 28vw, 280px);
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.10);
        }

        .studio-visual {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .studio-visual.video,
        .studio-visual.image {
          object-fit: contain;
          object-position: center;
          background: #fff;
        }

        .video-play-btn {
          position: absolute;
          inset: 0;
          z-index: 3;
          border: 0;
          background: rgba(0,0,0,0.18);
          color: #fff;
          font-size: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .marketing-grid-section {
          padding: 40px 0 70px;
          background:
            radial-gradient(circle at top left, rgba(124,58,237,0.08), transparent 30%),
            radial-gradient(circle at bottom right, rgba(6,182,212,0.08), transparent 34%),
            #fafafa;
        }

        .marketing-card {
          position: relative;
          min-height: 195px;
          border-radius: 20px;
          background: #f8fafc;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
          transition: 0.35s ease;
          padding: 30px 20px;
          overflow: hidden;
        }

        .marketing-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(124,58,237,.08), rgba(236,72,153,.06), rgba(6,182,212,.08));
          opacity: 0;
          transition: 0.35s ease;
        }

        .marketing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(124, 58, 237, 0.15);
        }

        .marketing-card:hover::before {
          opacity: 1;
        }

        .marketing-card > * {
          position: relative;
          z-index: 1;
        }

        .marketing-icon {
          width: 70px;
          height: 70px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #7c3aed, #ec4899, #06b6d4);
          color: #fff;
          box-shadow: 0 10px 25px rgba(124, 58, 237, 0.35);
          transition: 0.35s ease;
        }

        .marketing-card:hover .marketing-icon {
          transform: translateY(-3px) scale(1.06);
          box-shadow: 0 14px 35px rgba(236, 72, 153, 0.35);
        }

        .marketing-card h4 {
          margin: 0;
          color: #334155;
          font-size: 16px;
          font-weight: 800;
          line-height: 1.3;
        }

        .about-card {
          background: #ffffff;
          padding: 18px 20px;
          border-radius: 14px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
          font-weight: 500;
          transition: 0.3s ease;
          height: 100%;
        }

        .about-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 35px rgba(0, 0, 0, 0.08);
        }

        .work-card {
          position: relative;
          height: clamp(320px, 45vw, 480px);
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          background: #fff;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.10);
        }

        .work-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: 0.8s ease;
          padding: 0;
          background: transparent;
        }

        .work-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          padding: 30px;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.82),
            rgba(0, 0, 0, 0.25),
            transparent
          );
          opacity: 0;
          transition: 0.45s ease;
        }

        .work-content {
          transform: translateY(30px);
          transition: 0.45s ease;
        }

        .work-line {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }

        .work-bar {
          width: 35px;
          height: 2px;
          background: #06b6d4;
        }

        .work-category {
          font-size: 11px;
          letter-spacing: 2px;
          color: #06b6d4;
          font-weight: 700;
          text-transform: uppercase;
        }

        .work-title {
          color: #fff;
          font-size: 26px;
          font-weight: 800;
          margin-bottom: 12px;
          line-height: 1.2;
        }

        .work-btn {
          color: #fff;
          font-weight: 600;
          font-size: 14px;
        }

        .work-glass {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          padding: 16px 18px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.82);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          transition: 0.45s ease;
        }

        .glass-cat {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #7c3aed;
          display: block;
          margin-bottom: 4px;
        }

        .glass-title {
          font-size: 16px;
          font-weight: 700;
          color: #111;
          margin: 0;
          line-height: 1.3;
        }

        .work-card:hover .work-img {
          transform: scale(1.15);
          filter: blur(3px) brightness(0.7);
        }

        .work-card:hover .work-overlay {
          opacity: 1;
        }

        .work-card:hover .work-content {
          transform: translateY(0);
        }

        .work-card:hover .work-glass {
          opacity: 0;
          transform: translateY(20px);
        }

        .testimonial-card {
          position: relative;
          padding: 35px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 15px 45px rgba(0, 0, 0, 0.08);
          transition: 0.35s ease;
          height: 100%;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(124, 58, 237, 0.15);
        }

        .quote-icon {
          font-size: 50px;
          color: #7c3aed;
          opacity: 0.2;
          position: absolute;
          top: 15px;
          right: 20px;
        }

        .testimonial-text {
          font-size: 16px;
          line-height: 1.7;
          color: #374151;
          margin-bottom: 25px;
        }

        .client-flex {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .client-img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center;
          border: 2px solid #7c3aed;
        }

        .client-name {
          margin: 0;
          font-size: 16px;
          font-weight: 700;
          color: #111;
        }

        .client-role {
          font-size: 13px;
          color: #6b7280;
          display: block;
        }

        .modal-video {
          width: 100%;
          max-height: 80vh;
          outline: none;
          object-fit: contain;
          background: #000;
        }

        .reveal {
          opacity: 0;
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .reveal.up { transform: translateY(40px); }
        .reveal.left { transform: translateX(-50px); }
        .reveal.right { transform: translateX(50px); }
        .reveal.zoom { transform: scale(0.94); }

        .reveal.show {
          opacity: 1;
          transform: translate(0, 0) scale(1);
        }

        @media (max-width: 1199px) {
          .section-space {
            padding: 70px 0;
          }

          .hero-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 991px) {
          .section-space {
            padding: 60px 0;
          }

          .hero-overlay {
            align-items: flex-end;
            background: linear-gradient(
              180deg,
              rgba(0,0,0,0.18) 0%,
              rgba(0,0,0,0.28) 35%,
              rgba(0,0,0,0.72) 100%
            );
            padding: 0 0 28px 0;
          }

          .hero-content {
            max-width: 85%;
          }

          .studio-card {
            height: 280px;
          }

          .work-card {
            height: 420px;
          }

          .marketing-card {
            min-height: 180px;
          }
        }

        @media (max-width: 767px) {
          .section-space {
            padding: 50px 0;
          }

          .container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .display-4 {
            font-size: 2rem;
            line-height: 1.2;
          }

          .display-5 {
            font-size: 1.75rem;
            line-height: 1.25;
          }

          .fs-5 {
            font-size: 0.98rem !important;
            line-height: 1.75;
          }

          .hero-media {
            height: 430px;
            object-fit: contain;
            background: #fff;
          }

          .hero-title {
            font-size: 1.45rem;
            line-height: 1.2;
            margin-bottom: 10px !important;
          }

          .hero-mini-title {
            font-size: 10px;
            padding: 4px 10px;
            margin-bottom: 8px;
          }

          .main-btn,
          .outline-btn {
            padding: 7px 10px;
            font-size: 11px;
            min-height: 34px;
          }

          .hero-btn-small {
            padding: 7px 12px !important;
            min-height: 34px !important;
            font-size: 11px !important;
          }

          .studio-card {
            height: 360px;
            background: #fff;
          }

          .marketing-grid-section {
            padding: 25px 0 50px;
          }

          .marketing-card {
            min-height: 160px;
          }

          .marketing-icon {
            width: 58px;
            height: 58px;
            border-radius: 16px;
            font-size: 25px;
            margin-bottom: 16px;
          }

          .marketing-card h4 {
            font-size: 15px;
          }

          .work-card {
            height: 420px;
            background: #fff;
          }

          .work-overlay {
            opacity: 1;
            padding: 20px;
            background: linear-gradient(
              to top,
              rgba(0, 0, 0, 0.78),
              rgba(0, 0, 0, 0.20),
              transparent
            );
          }

          .work-content {
            transform: translateY(0);
          }

          .work-glass {
            display: none;
          }

          .work-title {
            font-size: 22px;
          }

          .testimonial-card {
            padding: 24px;
            border-radius: 20px;
          }

          .modal-dialog {
            margin: 10px;
          }

          .modal-content {
            border-radius: 20px;
            overflow: hidden;
          }

          .modal-video {
            max-height: 60vh;
          }
        }

        @media (max-width: 575px) {
          .hero-media {
            height: 390px;
            object-fit: contain;
            background: #fff;
          }

          .hero-content {
            max-width: 92%;
          }

          .mini-title {
            font-size: 10px;
            padding: 5px 12px;
          }

          .hero-title {
            font-size: 1.3rem;
          }

          .studio-card {
            height: 330px;
          }

          .work-card {
            height: 390px;
          }

          .client-flex {
            align-items: flex-start;
          }

          .marketing-grid-section .row {
            --bs-gutter-x: 14px;
            --bs-gutter-y: 14px;
          }

          .marketing-card {
            min-height: 145px;
            border-radius: 16px;
            padding: 22px 10px;
          }

          .marketing-icon {
            width: 50px;
            height: 50px;
            border-radius: 14px;
            font-size: 22px;
            margin-bottom: 14px;
          }

          .marketing-card h4 {
            font-size: 13px;
          }
        }
      `}</style>

      <section>
        <Carousel fade controls indicators interval={3500} pause={false}>
          <Carousel.Item>
            <div style={{ position: "relative" }}>
              <OptimizedImage
                webp="/Images/CR3.webp"
                fallback="/Images/CR3.png"
                alt="AI powered digital solutions"
                className="w-100 hero-media"
                loading="eager"
                fetchPriority="high"
                width="1400"
                height="600"
              />

              <div className="hero-overlay">
                <Container>
                  <Row className="align-items-center">
                    <Col lg={6} md={8}>
                      <div className="hero-content">
                        <div className="mini-title text-white hero-mini-title">
                          ✨ Next-Gen Digital Agency
                        </div>
                        <h1 className="text-white mb-3 hero-title">
                          <span className="gradient-text">AI-Powered</span>
                          <br />
                          Digital Solutions
                        </h1>
                        <p className="text-white-50 mb-3" style={{ fontSize: "15px", lineHeight: "1.7" }}>
                          AI-powered websites & digital marketing solutions for UK businesses.
                        </p>
                        <div className="hero-buttons">
                          <Link to="/our-work" className="outline-btn hero-btn-small">
                            See Our Work →
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div style={{ position: "relative" }}>
              <OptimizedImage
                webp="/Images/jb1.webp"
                fallback="/Images/jb1.png"
                alt="Luxury jewelry visual experience"
                className="w-100 hero-media"
                loading="lazy"
                width="1400"
                height="600"
              />

              <div className="hero-overlay">
                <Container>
                  <Row className="align-items-center">
                    <Col lg={6} md={8}>
                      <div className="hero-content">
                        <h1 className="text-white mb-2 hero-title">
                          <span className="gradient-text">Luxury Jewelry</span>
                          <br />
                          Visual Experience
                        </h1>
                        <p className="text-white-50 mb-3" style={{ fontSize: "15px", lineHeight: "1.7" }}>
                          AI-powered websites & digital marketing solutions for UK businesses.
                        </p>
                        <div className="hero-buttons">
                          <Link to="/our-work" className="outline-btn hero-btn-small">
                            See Our Work →
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div style={{ position: "relative" }}>
              <OptimizedImage
                webp="/Images/CR1.webp"
                fallback="/Images/CR1.png"
                alt="Smart AI websites built to convert"
                className="w-100 hero-media"
                loading="lazy"
                width="1400"
                height="600"
              />

              <div className="hero-overlay">
                <Container>
                  <Row className="align-items-center">
                    <Col lg={6} md={8}>
                      <div className="hero-content">
                        <h1 className="text-white mb-3 hero-title">
                          <span className="gradient-text">Smart AI Websites</span>
                          <br />
                          Built to Convert
                        </h1>
                        <p className="text-white-50 mb-3" style={{ fontSize: "15px", lineHeight: "1.7" }}>
                          AI-powered websites & digital marketing solutions for UK businesses.
                        </p>
                        <div className="hero-buttons">
                          <Link to="/our-work" className="outline-btn hero-btn-small">
                            See Our Work →
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="section-space" ref={setSectionRef("studio")} data-section="studio">
        <Container>
          <div className="text-center mb-5">
            <div className={revealClass("studio", "up")}>
              <div className="mini-title">🎬 New: AI Virtual Studio</div>
            </div>

            <h2 className={`fw-bold display-4 mb-3 ${revealClass("studio", "zoom")}`}>
              Revolutionise Your <br />
              <span className="gradient-text">Product Presentation</span>
            </h2>

            <p
              className={`text-muted fs-5 mb-4 mx-auto ${revealClass("studio", "up")}`}
              style={{ maxWidth: "800px" }}
            >
              Stop spending thousands on photoshoots. Our AI generates
              hyper-realistic virtual try-ons and model demonstrations for
              your clothes and jewelry.
            </p>
          </div>

          <Row className="g-4 justify-content-center mb-4">
            {studioItems.map((item, i) => (
              <Col sm={6} md={6} lg={3} key={i}>
                <div className={revealClass("studio", item.motion)}>
                  <Link to={item.link} style={{ textDecoration: "none" }}>
                    <div className="hover-card d-flex flex-column justify-content-end studio-card">
                      {item.src ? (
                        <>
                          <picture>
                            <source srcSet={item.poster} type="image/webp" />
                            <img
                              src={item.fallbackPoster}
                              alt={item.title}
                              className="studio-visual image"
                              loading="lazy"
                              decoding="async"
                              width="500"
                              height="500"
                            />
                          </picture>

                          <button
                            type="button"
                            className="video-play-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              openVideo(item.src);
                            }}
                            aria-label={`Play ${item.title} video`}
                          >
                            ▶
                          </button>
                        </>
                      ) : (
                        <OptimizedImage
                          webp={item.img}
                          fallback={item.fallbackImg}
                          alt={item.title}
                          className="studio-visual image"
                          loading="lazy"
                          width="500"
                          height="500"
                        />
                      )}

                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.82), rgba(0,0,0,0.22), rgba(0,0,0,0.05))",
                        }}
                      />

                      <div
                        style={{
                          position: "relative",
                          zIndex: 4,
                          padding: "22px 18px",
                          textAlign: "center",
                          color: "#fff",
                        }}
                      >
                        <b style={{ fontSize: "22px", display: "block", marginBottom: "8px" }}>
                          {item.title}
                        </b>
                        <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.6" }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </Col>
            ))}
          </Row>

          <div className={`d-flex gap-3 flex-wrap justify-content-center ${revealClass("studio", "up")}`}>
            <Button as={Link} to="/contact" className="main-btn">
              Book free consultation
            </Button>
            <Button as={Link} to="/services" className="outline-btn">
              Learn More
            </Button>
          </div>
        </Container>
      </section>

      <section className="marketing-grid-section">
        <Container>
          <Row className="g-4 justify-content-center">
            {marketingCards.map((item, index) => (
              <Col lg={3} md={6} xs={6} key={index}>
                <div className="marketing-card">
                  <div className="marketing-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section-space" ref={setSectionRef("services")} data-section="services">
        <Container>
          <div className="text-center mb-5">
            <div className={revealClass("services", "up")}>
              <div className="mini-title">Our Expertise</div>
            </div>

            <h2 className={`fw-bold display-5 ${revealClass("services", "zoom")}`}>
              Intelligent Solutions for <br />
              <span className="gradient-text">Every Digital Need</span>
            </h2>
          </div>

          <Row className="g-4">
            {services.map((item, i) => (
              <Col md={6} lg={3} key={i}>
                <div className={revealClass("services", item.motion)}>
                  <Card className="glass p-4 h-100 border-0 hover-card">
                    <div className="feature-icon">{item.icon}</div>
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="text-muted">{item.desc}</p>
                    <Link to={item.link} className="gradient-text">
                      Learn More →
                    </Link>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section-space" ref={setSectionRef("about")} data-section="about">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} xl={8}>
              <div className="text-center">
                <div className={revealClass("about", "up")}>
                  <div className="mini-title">About Us</div>
                </div>

                <h2 className={`display-5 fw-bold ${revealClass("about", "zoom")}`}>
                  We Are Building The <br />
                  <span className="gradient-text">Future of Digital</span>
                </h2>

                <p className={`text-muted fs-5 mt-4 ${revealClass("about", "up")}`}>
                  We leverage the latest in machine learning and automation to
                  build products that are not just functional—but intelligent.
                </p>

                <Row className="mt-5 g-4">
                  {aboutPoints.map((text, i) => (
                    <Col sm={6} key={i}>
                      <div className={revealClass("about", i % 2 === 0 ? "left" : "right")}>
                        <div className="about-card d-flex align-items-center gap-3">
                          <CheckCircleFill color="#16a34a" size={24} />
                          <span>{text}</span>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>

                <div className={revealClass("about", "up")}>
                  <Button as={Link} to="/about" className="main-btn mt-4">
                    Learn More About Us
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-space" ref={setSectionRef("work")} data-section="work">
        <Container>
          <div className="text-center mb-5">
            <div className={revealClass("work", "up")}>
              <div className="mini-title">Our Work</div>
            </div>

            <h2 className={`fw-bold display-5 ${revealClass("work", "zoom")}`}>
              Selected <span className="gradient-text">Projects</span>
            </h2>

            <div className={revealClass("work", "up")}>
              <Button as={Link} to="/portfolio" className="main-btn mt-3">
                View All Projects
              </Button>
            </div>
          </div>

          <Row className="g-4">
            {projects.map((item, i) => (
              <Col md={6} lg={4} key={i}>
                <div className={revealClass("work", item.motion)}>
                  <div onClick={() => navigate(`/portfolio/${item.id}`)}>
                    <div className="work-card">
                      <OptimizedImage
                        webp={item.img}
                        fallback={item.fallbackImg}
                        alt={item.title}
                        className="work-img"
                        loading="lazy"
                        width="700"
                        height="900"
                      />

                      <div className="work-overlay">
                        <div className="work-content">
                          <div className="work-line">
                            <span className="work-bar"></span>
                            <span className="work-category">{item.category}</span>
                          </div>
                          <h3 className="work-title">{item.title}</h3>
                          <div className="work-btn">Explore Project →</div>
                        </div>
                      </div>

                      <div className="work-glass">
                        <span className="glass-cat">{item.category}</span>
                        <h5 className="glass-title">{item.title}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section-space" ref={setSectionRef("testimonials")} data-section="testimonials">
        <Container>
          <div className="text-center mb-5">
            <div className={revealClass("testimonials", "up")}>
              <div className="mini-title">Testimonials</div>
            </div>

            <h2 className={`fw-bold display-5 ${revealClass("testimonials", "zoom")}`}>
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </div>

          <Row className="g-4">
            {testimonials.map((item, i) => (
              <Col md={6} key={i}>
                <div className={revealClass("testimonials", item.motion)}>
                  <div className="testimonial-card">
                    <div className="quote-icon">❝</div>
                    <p className="testimonial-text">{item.text}</p>

                    <div className="client-flex">
                      <OptimizedImage
                        webp={item.img}
                        fallback={item.fallbackImg}
                        alt={item.name}
                        className="client-img"
                        loading="lazy"
                        width="80"
                        height="80"
                      />

                      <div>
                        <h5 className="client-name">{item.name}</h5>
                        <span className="client-role">{item.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section-space" ref={setSectionRef("cta")} data-section="cta">
        <Container>
          <div className={revealClass("cta", "zoom")}>
            <Card className="glass border-0 p-4 p-md-5 text-center">
              <h2 className="fw-bold display-5">
                Ready to Scale Your <br />
                <span className="gradient-text">Business with AI?</span>
              </h2>

              <p className="text-muted fs-5 mt-3 mb-4">
                Join 500+ businesses already growing with VITAL AI to automate
                their growth and dominate their market.
              </p>

              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Button as={Link} to="/contact" className="main-btn">
                  Get Started Now
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <Modal show={showVideo} onHide={closeVideo} centered size="lg">
        <Modal.Body className="p-0 bg-black">
          <video
            src={activeVideo}
            controls
            autoPlay
            className="modal-video"
            playsInline
            preload="metadata"
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Home;