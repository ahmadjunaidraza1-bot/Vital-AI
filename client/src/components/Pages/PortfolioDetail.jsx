import React, { useRef, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card, Modal } from "react-bootstrap";
import { ArrowLeft, StarFill } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const cinematicVideoRef = useRef(null);
  const socialVideoRef = useRef(null);

  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState("");
  const [selectedMediaType, setSelectedMediaType] = useState("image");

  const openGalleryMedia = (item) => {
    const isVideo = item.endsWith(".mp4");

    setSelectedMedia(item);
    setSelectedMediaType(isVideo ? "video" : "image");
    setShowGalleryModal(true);
  };

  const closeGalleryImage = () => {
    setShowGalleryModal(false);
    setSelectedMedia("");
    setSelectedMediaType("image");
  };

  const projects = {
    "pro-chauffeurs": {
      title: "Pro Chauffeurs",
      category: "Social Media Campaign",
      banner: "/Images/cr8.webp",
      description:
        "Luxury car booking system branding and social media growth strategy.",
      story:
        "Pro Chauffeurs is a premier luxury car booking service that redefines executive travel. Our goal was to translate their high-end physical service into a digital experience that resonates with elite clients. We focused on 'The Arrival Experience'—the feeling of luxury from the moment you book to the moment you reach your destination.",
      highlights: [
        {
          title: "Mobile-First Ads",
          desc: "Optimized visuals for high-speed scrolling on Instagram and TikTok.",
        },
        {
          title: "Luxury UI Kit",
          desc: "A consistent visual language using deep blacks, gold accents, and clean typography.",
        },
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
        description:
          "We created a series of vertical reels designed to capture attention in the first 2 seconds. By showcasing the sleek interiors and professional service, we increased their social engagement by 200%.",
        features: [
          "High-Retention Hooks",
          "Seamless Transitions",
          "Luxury Color Grading",
          "Trend-Aligned Audio",
        ],
        videoSrc: "/videos/pd2.mp4",
        posterUrl: "/Images/p2.webp",
      },
      gallery: [
        "/Images/p1.webp",
        "/Images/cr4.webp",
        "/Images/cr6.webp",
        "/Images/cr7.webp",
        "/Images/cr5.webp",
        "/Images/cr9.webp",
        "/Images/cr10.webp",
        "/Images/cr11.webp",
      ],
    },

    viper: {
      title: "Viper",
      category: "Automotive Brand Campaign",
      banner: "/Images/vd.png",
      description:
        "A bold digital campaign crafted for a performance-driven automotive brand.",
      story:
        "Viper was positioned as a high-impact automotive identity focused on speed, power, and aggressive visual storytelling. We built a campaign system that highlighted the vehicle's strong personality across digital banners, premium ad creatives, and cinematic motion-led visuals. The aim was to create a brand presence that felt modern, premium, and unmistakably performance-focused.",
      highlights: [
        {
          title: "Performance Visual Identity",
          desc: "A high-contrast, bold design direction inspired by speed, motion, and power.",
        },
        {
          title: "Ad Creative System",
          desc: "Multiple campaign-ready layouts for web, social media, and promotional banners.",
        },
      ],
      details: {
        client: "Viper Performance",
        industry: "Automotive",
        services: "Branding, Social Media, Ad Creatives",
        year: "2024",
      },
      cinematic: {
        title: "Cinematic Experience",
        subtitle: "Performance Brand Showcase",
        videoSrc: "/videos/h3.mp4",
        posterUrl: "/Images/viper2.png",
      },
      socialMedia: {
        title: "Social Media",
        subtitle: "Automotive Content Strategy",
        description:
          "For Viper, we developed attention-grabbing visuals and short-form promotional content designed to amplify brand personality and create a premium automotive aesthetic across social platforms.",
        features: [
          "Bold Motion Visuals",
          "Luxury Automotive Styling",
          "High-Impact Reels",
          "Performance-Led Branding",
        ],
        videoSrc: "/videos/h3.mp4",
        posterUrl: "/Images/viper3.png",
      },
      gallery: [
        "/Images/vg1.webp",
        "/Images/vg2.webp",
        "/Images/vg3.webp",
        "/Images/vg4.webp",
        "/Images/vg5.webp",
        "/Images/vg6.webp",
        "/Images/vg7.webp",
        "/Images/vg8.webp",
      ],
    },

    "women-bags": {
      title: "Women Bags",
      category: "Fashion Accessories Campaign",
      banner: "/Images/jb2.png",
      description:
        "Premium campaign design for elegant women’s handbags and fashion accessories.",
      story:
        "Women Bags was developed as a polished fashion-focused portfolio project for showcasing premium handbags with a luxury editorial feel. The visual direction centered around elegance, lifestyle appeal, and product-first storytelling. We created a refined campaign language suitable for e-commerce, social promotions, and seasonal launch creatives.",
      highlights: [
        {
          title: "Luxury Product Presentation",
          desc: "Editorial-inspired layouts that make the bags feel premium and desirable.",
        },
        {
          title: "Fashion Campaign Assets",
          desc: "A coordinated asset system for product launches, promotions, and social media campaigns.",
        },
      ],
      details: {
        client: "Women Bags Studio",
        industry: "Fashion Accessories",
        services: "Creative Direction, Product Campaigns, Social Media",
        year: "2024",
      },
      cinematic: {
        title: "Cinematic Experience",
        subtitle: "Luxury Bag Collection Showcase",
        videoSrc: "/videos/bags1.mp4",
        posterUrl: "/Images/bag2.png",
      },
      socialMedia: {
        title: "Social Media",
        subtitle: "Fashion Visual Strategy",
        description:
          "We designed premium visual assets tailored for handbag promotions, fashion drops, and social media storytelling that elevated the brand with a polished, upscale look.",
        features: [
          "Luxury Fashion Layouts",
          "Premium Product Focus",
          "Women-Centric Branding",
          "Campaign Ready Visuals",
        ],
        videoSrc: "/videos/h2.mp4",
        posterUrl: "/Images/bag3.png",
      },
      gallery: [
        "/Images/3.webp",
        "/Images/5.webp",
        "/Images/6.webp",
        "/Images/7.webp",
        "/Images/8.webp",
        "/Images/9.webp",
        "/Images/10.webp",
        "/Images/11.webp",
      ],
    },

    "ecommerce-clothing": {
      title: "E-Commerce Clothing",
      category: "Fashion E-Commerce",
      banner: "/Images/cb1.webp",
      description:
        "A modern fashion e-commerce project focused on conversion and product appeal.",
      story:
        "E-Commerce Clothing was built to represent a modern online apparel brand where product presentation, trust, and conversion were equally important. We created a visually clean and brand-consistent approach that balanced lifestyle branding with strong product visibility, making it ideal for collection launches, digital storefronts, and ad campaigns.",
      highlights: [
        {
          title: "Conversion-Focused Design",
          desc: "Layouts designed to support product discovery, engagement, and online sales.",
        },
        {
          title: "Collection-Based Branding",
          desc: "A scalable creative system for seasonal drops, hero banners, and clothing promotions.",
        },
      ],
      details: {
        client: "E-Commerce Clothing",
        industry: "Fashion Retail",
        services: "E-Commerce Design, Branding, Social Media",
        year: "2024",
      },
      cinematic: {
        title: "Cinematic Experience",
        subtitle: "Fashion Store Brand Showcase",
        videoSrc: "/videos/clothing1.mp4",
        posterUrl: "/Images/cloth2.png",
      },
      socialMedia: {
        title: "Social Media",
        subtitle: "Apparel Marketing Strategy",
        description:
          "We designed a fashion-led visual system for digital marketing, enabling the brand to showcase clothing collections in a premium and conversion-friendly way across web and social platforms.",
        features: [
          "Fashion Drop Campaigns",
          "E-Commerce Banner Design",
          "Lifestyle Product Showcase",
          "High-Converting Social Ads",
        ],
        videoSrc: "/videos/h4.mp4",
        posterUrl: "/Images/cloth3.png",
      },
      gallery: [
        "/Images/42.webp",
        "/Images/43.webp",
        "/Images/46.webp",
        "/Images/47.webp",
        "/Images/48.webp",
        "/Images/51.webp",
        "/Images/34.webp",
        "/Images/39.webp",
      ],
    },
    tiktok: {
      title: "TikTok Store",
      category: "TikTok E-Commerce & Viral Content",
      banner: "/Images/new4.png",

      description:
        "AI-powered TikTok store visuals and viral content strategy designed to boost engagement and drive sales.",

      story:
        "TikTok Store was developed as a high-performance e-commerce solution focused entirely on short-form video platforms. The goal was to create scroll-stopping product visuals, AI-generated model showcases, and viral-ready content that converts viewers into buyers. We built a content system optimized for TikTok Shop, combining trend-driven storytelling with product-focused presentation to maximize reach and engagement.",

      highlights: [
        {
          title: "AI Product Visuals",
          desc: "Realistic AI-generated models showcasing products in engaging and high-converting formats.",
        },
        {
          title: "Viral Content Strategy",
          desc: "Short-form videos optimized for TikTok trends, hooks, and algorithm-driven reach.",
        },
      ],

      details: {
        client: "TikTok Store Brand",
        industry: "E-Commerce / Social Commerce",
        services: "AI Visuals, TikTok Content, Product Videos",
        year: "2025",
      },

      cinematic: {
        title: "Cinematic Experience",
        subtitle: "TikTok Store Visual Showcase",
        videoSrc: "/videos/h1.mp4",
        posterUrl: "/Images/h1-poster.webp",
      },

      socialMedia: {
        title: "TikTok Content",
        subtitle: "High-Converting Viral Videos",
        description:
          "We created short-form TikTok videos focused on high retention and conversion. Each video is designed with strong hooks, smooth transitions, and product storytelling to maximize engagement and drive direct sales from TikTok Shop.",

        features: [
          "High-Retention Hooks",
          "Product Storytelling",
          "Trend-Based Editing",
          "TikTok Shop Optimization",
        ],

        videoSrc: "/videos/h1.mp4",
        posterUrl: "/Images/h1-poster.webp",
      },

      gallery: [
        "/videos/h1.mp4",
        "/videos/h2.mp4",
        "/videos/h3.mp4",
        "/videos/h4.mp4",
      ],
    },

  };

  const project = projects[id];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const handleIntersection = (entries, videoRef) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch((error) => {
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
      cinematicObserver.disconnect();
      socialObserver.disconnect();
    };
  }, [id]);

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
          overflow-x: hidden;
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
          color: #fff;
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

        .project-banner-img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .gallery-img {
          width: 100%;
          height: 220px;
          object-fit: contain;
          object-position: center;
          background: #fff;
          border-radius: 16px;
          transition: all 0.3s ease;
          cursor: pointer;
          padding: 8px;
          display: block;
        }

        .gallery-img:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .gallery-popup-img {
          width: 100%;
          max-height: 85vh;
          object-fit: contain;
          background: #fff;
          border-radius: 18px;
        }

        .gallery-modal .modal-content {
          background: transparent;
          border: none;
          box-shadow: none;
        }

        .gallery-modal .modal-header {
          border: none;
          padding: 0 0 10px 0;
        }

        .gallery-modal .btn-close {
          background-color: #fff;
          border-radius: 50%;
          opacity: 1;
          padding: 10px;
          margin-left: auto;
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

        .video-wrapper {
          position: relative;
          border-radius: 3rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          background: #000;
          aspect-ratio: 16 / 9;
        }

        .video-wrapper video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .portrait-video-wrapper {
          position: relative;
          border-radius: 2rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          background: #000;
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

        @media (max-width: 768px) {
          .project-banner-img {
            height: 320px;
            object-fit: contain;
            background: #fff;
          }

          .portrait-video-wrapper {
            max-width: 100%;
            height: 420px;
            aspect-ratio: auto;
          }

          .portrait-video-wrapper video {
            object-fit: contain;
            background: #000;
          }

          .video-wrapper {
            border-radius: 1.5rem;
          }

          .video-wrapper video {
            object-fit: contain;
            background: #000;
          }

          .gallery-img {
            height: 300px;
            object-fit: contain;
            background: #fff;
            padding: 6px;
          }

          .gallery-popup-img {
            max-height: 75vh;
          }

          .position-absolute.bottom-0.start-0.end-0.p-5 {
            padding: 24px !important;
          }

          .display-3 {
            font-size: 2.1rem;
          }

          .display-4 {
            font-size: 2rem;
          }

          .display-5 {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .project-banner-img {
            height: 280px;
          }

          .gallery-img {
            height: 260px;
          }

          .portrait-video-wrapper {
            height: 360px;
          }
        }
      `}</style>

      <section className="pt-5">
        <Container>
          <div onClick={() => navigate("/our-work")} className="back-link">
            <ArrowLeft size={20} /> Back to Portfolio
          </div>
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <div className="position-relative rounded-4 overflow-hidden shadow-lg">
            <img
              src={project.banner}
              alt={project.title}
              className="project-banner-img"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />

            <div
              className="position-absolute bottom-0 start-0 end-0 p-5"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
              }}
            >
              <span
                className="section-title bg-white px-3 py-1 rounded-pill"
                style={{ fontSize: "12px" }}
              >
                {project.category}
              </span>

              <h1 className="text-white display-3 fw-bold mt-3">
                {project.title}
              </h1>

              <p className="text-white-50 fs-5">{project.description}</p>
            </div>
          </div>
        </Container>
      </section>

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

                  <p
                    className="text-muted fs-5 mb-4"
                    style={{ lineHeight: "1.8" }}
                  >
                    {project.story}
                  </p>

                  <Row className="g-3 mt-2">
                    {project.highlights.map((item, i) => (
                      <Col md={6} key={i}>
                        <div className="feature-badge">
                          <h6 className="fw-bold mb-2 card-gradient-heading">
                            {item.title}
                          </h6>
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
                  <h5 className="fw-bold mb-4 gradient-text">
                    Project Details
                  </h5>

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

      {project.cinematic && (
        <section className="py-5">
          <Container>
            <Card className="custom-card border-0 shadow-sm overflow-hidden">
              <Card.Body className="p-4 p-lg-5 text-center">
                <span className="section-title">{project.cinematic.title}</span>

                <h2 className="display-4 fw-bold card-gradient-heading mb-4">
                  {project.cinematic.subtitle}
                </h2>

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
                    <source
                      src={project.cinematic.videoSrc}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Card.Body>
            </Card>
          </Container>
        </section>
      )}

      <section className="py-5">
        <Container>
          <Card className="custom-card border-0 shadow-sm overflow-hidden">
            <Card.Body className="p-4 p-lg-5">
              <Row className="align-items-center g-5">
                <Col lg={6}>
                  <span className="section-title">
                    {project.socialMedia.title}
                  </span>

                  <h2 className="fw-bold display-5 mb-4 card-gradient-heading">
                    {project.socialMedia.subtitle}
                  </h2>

                  <p
                    className="text-muted fs-5 mb-4"
                    style={{ lineHeight: "1.8" }}
                  >
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
                      <source
                        src={project.socialMedia.videoSrc}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Card className="custom-card border-0 shadow-sm overflow-hidden">
            <Card.Body className="p-4 p-lg-5">
              <div className="text-center mb-5">
                <span className="section-title">Visual Gallery</span>

                <h2 className="display-4 fw-bold card-gradient-heading">
                  The Campaign Assets
                </h2>
              </div>

              <Row className="g-4">
                {project.gallery.map((item, i) => {
                  const isVideo = item.endsWith(".mp4");

                  return (
                    <Col md={4} lg={3} sm={6} xs={12} key={i}>
                      {isVideo ? (
                        <div
                          style={{ position: "relative", cursor: "pointer" }}
                          onClick={() => openGalleryMedia(item)}
                        >
                          <video
                            src={item}
                            className="gallery-img"
                            muted
                            loop
                            playsInline
                            preload="metadata"
                          />

                          <div
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              fontSize: "40px",
                              color: "#fff",
                              opacity: 0.85,
                              pointerEvents: "none",
                            }}
                          >
                            ▶
                          </div>

                          
                        </div>
                      ) : (
                        <img
                          src={item}
                          alt={`Gallery ${i + 1}`}
                          className="gallery-img"
                          loading="lazy"
                          decoding="async"
                          onClick={() => openGalleryMedia(item)}
                        />
                      )}
                    </Col>
                  );
                })}
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </section>

      <section className="py-5 mb-5">
        <Container>
          <Card className="custom-card border-0 shadow-lg text-center overflow-hidden">
            <Card.Body className="p-5 p-lg-5">
              <h2 className="display-5 fw-bold mb-3">
                Want Results <span className="gradient-text">Like This?</span>
              </h2>

              <p className="text-muted fs-5 mb-4">
                Let's transform your brand with AI-powered visuals and
                high-converting social media strategies.
              </p>

              <Button className="main-btn" onClick={() => navigate("/contact")}>
                Start Your Project →
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </section>

      <Modal
  show={showGalleryModal}
  onHide={closeGalleryImage}
  centered
  size="xl"
  className="gallery-modal"
>
  <Modal.Header closeButton />
  <Modal.Body className="text-center p-2">
    {selectedMediaType === "video" ? (
      <video
        src={selectedMedia}
        controls
        autoPlay
        playsInline
        preload="metadata"
        style={{
          width: "100%",
          maxHeight: "85vh",
          objectFit: "contain",
          background: "#000",
          borderRadius: "18px",
        }}
      />
    ) : (
      <img
        src={selectedMedia}
        alt="Gallery Preview"
        className="gallery-popup-img"
        loading="lazy"
        decoding="async"
      />
    )}
  </Modal.Body>
</Modal>
    </>
  );
};

export default PortfolioDetail;