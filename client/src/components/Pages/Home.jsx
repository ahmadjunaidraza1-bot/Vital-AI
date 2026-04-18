import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ProgressBar,
  Navbar,
  Nav,
} from "react-bootstrap";
import {
  LightningChargeFill,
  GraphUpArrow,
  ShieldCheck,
  Stars,
  RocketTakeoffFill,
  Gem,
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

  const colors = {
    primary: "#7c3aed",
    secondary: "#ec4899",
    accent: "#06b6d4",
    dark: "#111827",
    text: "#374151",
    white: "#ffffff",
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

  // Analytics Animate
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
          font-family: 'Poppins',sans-serif;
          overflow-x:hidden;
        }

        .gradient-text{
          background:linear-gradient(90deg,#7c3aed,#ec4899,#06b6d4,#7c3aed);
          background-size:300% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          animation:shine 5s linear infinite;
          font-weight:800;
        }

         @keyframes floatY{
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-15px)}
        }

        .float-badge{
          animation: floatBadge 3.5s ease-in-out infinite;
        }

        @keyframes floatBadge{
          0%,100%{transform:translateY(-50%)}
          50%{transform:translateY(-65%)}
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

        .hover-card{
          transition:.4s;
        }

        .hover-card:hover{
          transform:translateY(-10px);
          box-shadow:0 25px 60px rgba(124,58,237,.15);
        }

        .main-btn{
          border:none;
          padding:12px 28px;
          border-radius:50px;
          color:#fff;
          font-weight:700;
          background:linear-gradient(90deg,#7c3aed,#ec4899);
          transition:.4s;
        }

        .main-btn:hover{
          transform:translateY(-3px) scale(1.03);
          box-shadow:0 15px 35px rgba(236,72,153,.3);
        }

        .outline-btn{
          border:2px solid #7c3aed;
          color:#7c3aed;
          padding:12px 28px;
          border-radius:50px;
          font-weight:700;
          background:#fff;
        }

        .float-card{
          animation:floatY 4s ease-in-out infinite;
        }

        @keyframes floatY{
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-18px)}
        }

        .section-space{
          padding:100px 0;
          background:#fff;
        }

        .mini-title{
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

      `}</style>

      {/* HERO */}
      <section className="section-space" style={{ paddingTop: "150px" }}>
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <div className="mini-title">✨Next-Gen Digital Agency</div>

              <h1 className="display-4 fw-bold lh-sm mb-4">
                <span className="gradient-text">AI-Powered</span>
                <br />
                Digital Solutions
                <br />
                <span className="gradient-text">for Modern Business</span>
              </h1>

              <p className="text-muted fs-5 mb-4">
                Helping businesses grow with intelligent automation,
                scalable technology, and high-end design that converts.
              </p>

              <div className="d-flex gap-3 flex-wrap mb-4">
                <Button 
                  className="main-btn"
                  onClick={() => navigate("/contact")}
                >
                  Get Started
                </Button>
                <span
                  className="outline-btn"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/services")}
                >
                  Learn More →
                </span>
              </div>

            </Col>

            {/* ANALYTICS */}
            <Col lg={6}>
              <div
                ref={(el) => (sectionRefs.current[0] = el)}
                data-id="analytics"
                style={reveal("analytics")}
              >
                <Card className="glass p-4 border-0 float-card">
                  <div className="d-flex justify-content-between mb-4">
                    <div>
                      <h4 className="mb-0 fw-bold">Growth Analytics</h4>
                      <small className="text-muted">Live Data Feed</small>
                    </div>

                    <span className="badge bg-success px-3 py-2 fs-6">
                      +24% Increase
                    </span>
                  </div>

                  {/* Bars */}
                  {[
                    ["AI Automation", stats.ai],
                    ["User Engagement", stats.engagement],
                    ["Conversion Rate", stats.conversion],
                  ].map((item, i) => (
                    <div className="mb-4" key={i}>
                      <div className="d-flex justify-content-between mb-2 fw-semibold">
                        <span>{item[0]}</span>
                        <span className="gradient-text">
                          {item[1]}%
                        </span>
                      </div>

                      <ProgressBar
                        now={item[1]}
                        style={{
                          height: "10px",
                          borderRadius: "20px",
                          background: "#eee",
                        }}
                        variant="info"
                      />
                    </div>
                  ))}

                  <div className="glass p-3 mt-2">
                    <div className="d-flex align-items-center gap-2 fw-bold">
                      <ShieldCheck size={20} color="#16a34a" />
                      Enterprise Security
                    </div>
                    <small className="text-muted">
                      Your data is protected with military-grade encryption and
                      AI monitoring.
                    </small>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

   {/* AI Virtual Studio Section */}
<section className="section-space">
  <Container>
    <Row className="align-items-center g-5">
      {/* LEFT CONTENT */}
      <Col lg={6}>
        <div className="mini-title">🎬 New: AI Virtual Studio</div>

        <h2 className="fw-bold display-4 mb-3">
          Revolutionize Your <br />
          <span className="gradient-text">Product Presentation</span>
        </h2>

        <p className="text-muted fs-5 mb-4">
          Stop spending thousands on photoshoots. Our AI generates hyper-realistic
          virtual try-ons and model demonstrations for your clothes and jewelry.
        </p>

        <Row className="g-3 mb-4">
          <Col md={6}>
            <div className="glass p-3 h-100 hover-card">
              <b>Virtual Try-Ons</b>
              <p className="text-muted small mb-0">
                Let customers see clothes on realistic AI models.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <div className="glass p-3 h-100 hover-card">
              <b>Jewelry Rendering</b>
              <p className="text-muted small mb-0">
                Hyper-realistic 3D jewelry demonstrations.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <div className="glass p-3 h-100 hover-card">
              <b>Social Media Ads</b>
              <p className="text-muted small mb-0">
                Viral-ready videos for TikTok & Instagram.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <div className="glass p-3 h-100 hover-card">
              <b>Instant Ad Creative</b>
              <p className="text-muted small mb-0">
                Generate 100+ ad variations in minutes.
              </p>
            </div>
          </Col>
        </Row>

        <div className="d-flex gap-3 flex-wrap">
          <Button
            className="main-btn"
            onClick={() => navigate("/contact")}
          >
            Book a Demo
          </Button>

          <Button
            className="outline-btn"
            onClick={() => navigate("/services")}
          >
            Learn More
          </Button>
        </div>
      </Col>

      {/* RIGHT VIDEOS */}
      <Col lg={6}>
        <Row className="g-3 align-items-start">

          {/* Video 1 */}
          <Col md={6}>
            <video
              className="w-100 rounded-4 studio-video"
              muted
              autoPlay
              loop
              playsInline
              style={{
                height: "410px",
                objectFit: "cover"
              }}
            >
              <source src="/videos/h1.mp4" type="video/mp4" />
            </video>
          </Col>

          {/* Video 2 */}
          <Col md={6} style={{ marginTop: "60px" }}>
            <video
              className="w-100 rounded-4 studio-video"
              muted
              autoPlay
              loop
              playsInline
              style={{
                height: "260px",
                objectFit: "cover"
              }}
            >
              <source src="/videos/h2.mp4" type="video/mp4" />
            </video>
          </Col>

          {/* Video 3 */}
          <Col md={6}>
            <video
              className="w-100 rounded-4 studio-video"
              muted
              autoPlay
              loop
              playsInline
              style={{
                height: "260px",
                objectFit: "cover"
              }}
            >
              <source src="/videos/h3.mp4" type="video/mp4" />
            </video>
          </Col>

          {/* Video 4 */}
          <Col md={6} style={{ marginTop: "-40px" }}>
            <video
              className="w-100 rounded-4 studio-video"
              muted
              autoPlay
              loop
              playsInline
              style={{
                height: "440px",
                objectFit: "cover"
              }}
            >
              <source src="/videos/h4.mp4" type="video/mp4" />
            </video>
          </Col>

        </Row>
      </Col>
    </Row>
  </Container>
</section>

      {/* SERVICES */}
      <section
        className="section-space"
        ref={(el) => (sectionRefs.current[1] = el)}
        data-id="services"
        style={reveal("services")}
      >
        <Container>
          <div className="text-center mb-5">
            <div className="mini-title">Our Expertise</div>
            <h2 className="fw-bold display-5">
              Intelligent Solutions for <br />
              <span className="gradient-text">Every Digital Need</span>
            </h2>
          </div>

          <Row className="g-4">
            {[
              ["Virtual Product Demo", <CameraVideoFill />, "AI-powered try-ons and ads"],
              ["E-Commerce Solutions", <Globe2 />, "Smart stores & AI automation"],
              ["Web Development", <LightningChargeFill />, "Modern blazing-fast websites"],
              ["Social Media Content", <Stars />, "Viral reels and ad creatives"],
            ].map((item, i) => (
              <Col md={6} lg={3} key={i}>
                <Card className="glass p-4 h-100 border-0 hover-card">
                  <div className="feature-icon">{item[1]}</div>
                  <h5 className="fw-bold">{item[0]}</h5>
                  <p className="text-muted">{item[2]}</p>
                  <span
                    className="gradient-text"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/services")}
                  >
                    Learn More →
                  </span>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

{/* ABOUT SECTION */}
<section
  className="section-space"
  ref={(el) => (sectionRefs.current[2] = el)}
  data-id="about"
  style={reveal("about")}
>
  <Container>
    <Row className="justify-content-center">
      <Col lg={8}>
        <div className="text-center">
          <div className="mini-title">About Us</div>

          <h2 className="display-5 fw-bold">
            We Are Building The <br />
            <span className="gradient-text">Future of Digital</span>
          </h2>

          <p className="text-muted fs-5 mt-4">
            We leverage the latest in machine learning and automation to
            build products that are not just functional—but intelligent.
          </p>

          {/* Cards Section */}
          <Row className="mt-5 g-4">
            <Col md={6}>
              <div className="about-card d-flex align-items-center gap-3">
                <CheckCircleFill color="#16a34a" size={24} />
                <span>AI-driven product development</span>
              </div>
            </Col>

            <Col md={6}>
              <div className="about-card d-flex align-items-center gap-3">
                <CheckCircleFill color="#16a34a" size={24} />
                <span>Modern scalable architecture</span>
              </div>
            </Col>

            <Col md={6}>
              <div className="about-card d-flex align-items-center gap-3">
                <CheckCircleFill color="#16a34a" size={24} />
                <span>Global expert team</span>
              </div>
            </Col>

            <Col md={6}>
              <div className="about-card d-flex align-items-center gap-3">
                <CheckCircleFill color="#16a34a" size={24} />
                <span>High-performance AI systems</span>
              </div>
            </Col>
          </Row>

          <div>
            <Button
              className="main-btn mt-4"
              onClick={() => navigate("/about")}
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>


      {/* OUR WORK */}
      <section className="section-space">
        <Container>
          {/* HEADER */}
          <div className="text-center mb-5">
            <div className="mini-title">Our Work</div>
            <h2 className="fw-bold display-5">
              Selected <span className="gradient-text">Projects</span>
            </h2>
            <Button
              className="main-btn mt-3"
              onClick={() => navigate("/portfolio")}
            >
              View All Projects
            </Button>
          </div>

          {/* PROJECTS */}
          <Row className="g-4">
            {[
              {
                id: "pro-chauffeurs",
                title: "Pro Chauffeurs",
                category: "Social Media Posts",
                img: "/Images/p1.webp",
              },
              {
                id: "aura-e-commerce",
                title: "Aura E-Commerce",
                category: "E-Commerce",
                img: "/Images/p3.webp",
              },
              {
                id: "zenith-mobile-app",
                title: "Zenith Mobile App",
                category: "Mobile App",
                img: "/Images/p2.webp",
              },
            ].map((item, i) => (
              <Col md={6} lg={4} key={i}>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/portfolio/${item.id}`)}
                >
                  <div className="work-card">
                    <img src={item.img} alt={item.title} className="work-img" />
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
              </Col>
            ))}
          </Row>
        </Container>

        {/* STYLES */}
        <style>{`
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
          .work-card{
            position:relative;
            height:480px;
            border-radius:24px;
            overflow:hidden;
            cursor:pointer;
            box-shadow:0 20px 50px rgba(0,0,0,0.10);
          }

          .work-img{
            width:100%;
            height:100%;
            object-fit:cover;
            transition:0.8s ease;
          }

          .work-overlay{
            position:absolute;
            inset:0;
            display:flex;
            align-items:flex-end;
            padding:30px;
            background:linear-gradient(
              to top,
              rgba(0,0,0,0.92),
              rgba(0,0,0,0.35),
              transparent
            );
            opacity:0;
            transition:0.5s ease;
          }

          .work-content{
            transform:translateY(30px);
            transition:0.5s ease;
          }

          .work-line{
            display:flex;
            align-items:center;
            gap:10px;
            margin-bottom:10px;
          }

          .work-bar{
            width:35px;
            height:2px;
            background:#06b6d4;
          }

          .work-category{
            font-size:11px;
            letter-spacing:2px;
            color:#06b6d4;
            font-weight:700;
            text-transform:uppercase;
          }

          .work-title{
            color:#fff;
            font-size:26px;
            font-weight:800;
            margin-bottom:12px;
          }

          .work-btn{
            color:#fff;
            font-weight:600;
            font-size:14px;
            transition:0.3s;
          }

          .work-btn:hover{
            color:#ec4899;
          }

          .work-glass{
            position:absolute;
            bottom:20px;
            left:20px;
            right:20px;
            padding:16px 18px;
            border-radius:18px;
            background:rgba(255,255,255,0.75);
            backdrop-filter:blur(18px);
            border:1px solid rgba(255,255,255,0.3);
            box-shadow:0 15px 40px rgba(0,0,0,0.15);
            transition:0.5s ease;
          }

          .glass-cat{
            font-size:10px;
            font-weight:800;
            letter-spacing:2px;
            text-transform:uppercase;
            color:#7c3aed;
            display:block;
            margin-bottom:4px;
          }

          .glass-title{
            font-size:16px;
            font-weight:700;
            color:#111;
            margin:0;
          }

          .work-card:hover .work-img{
            transform:scale(1.15);
            filter:blur(3px) brightness(0.7);
          }

          .work-card:hover .work-overlay{
            opacity:1;
          }

          .work-card:hover .work-content{
            transform:translateY(0);
          }

          .work-card:hover .work-glass{
            opacity:0;
            transform:translateY(20px);
          }
        `}</style>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-space">
        <Container>
          <div className="text-center mb-5">
            <div className="mini-title">Testimonials</div>
            <h2 className="fw-bold display-5">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </div>

          <Row className="g-4">
            {[
              {
                text: `"VITAL AI transformed our digital presence. Their AI-driven approach to e-commerce increased our conversion rate by 45% in just three months."`,
                name: "Sarah Johnson",
                role: "CEO at TechFlow",
                img: "/Images/t1.jpg",
              },
              {
                text: `"The most professional team we have worked with. Their ability to blend high-end design with complex AI logic is truly impressive."`,
                name: "Michael Chen",
                role: "Founder of Nexus",
                img: "/Images/t2.jpg",
              },
            ].map((item, i) => (
              <Col md={6} key={i}>
                <div className="testimonial-card">
                  <div className="quote-icon">❝</div>
                  <p className="testimonial-text">{item.text}</p>
                  <div className="client-flex">
                    <img src={item.img} alt={item.name} className="client-img" />
                    <div>
                      <h5 className="client-name">{item.name}</h5>
                      <span className="client-role">{item.role}</span>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        <style>{`
          .testimonial-card{
            position:relative;
            padding:35px;
            border-radius:24px;
            background:rgba(255,255,255,0.85);
            backdrop-filter:blur(18px);
            border:1px solid rgba(0,0,0,0.06);
            box-shadow:0 15px 45px rgba(0,0,0,0.08);
            transition:0.4s ease;
            height:100%;
          }

          .testimonial-card:hover{
            transform:translateY(-8px);
            box-shadow:0 25px 60px rgba(124,58,237,0.15);
          }

          .quote-icon{
            font-size:50px;
            color:#7c3aed;
            opacity:0.2;
            position:absolute;
            top:15px;
            right:20px;
          }

          .testimonial-text{
            font-size:16px;
            line-height:1.7;
            color:#374151;
            margin-bottom:25px;
          }

          .client-flex{
            display:flex;
            align-items:center;
            gap:12px;
          }

          .client-img{
            width:50px;
            height:50px;
            border-radius:50%;
            object-fit:cover;
            border:2px solid #7c3aed;
          }

          .client-name{
            margin:0;
            font-size:16px;
            font-weight:700;
            color:#111;
          }

          .client-role{
            font-size:13px;
            color:#6b7280;
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="section-space">
        <Container>
          <Card className="glass border-0 p-5 text-center">
            <h2 className="fw-bold display-5">
              Ready to Scale Your <br />
              <span className="gradient-text">Business with AI?</span>
            </h2>
            <p className="text-muted fs-5 mt-3 mb-4">
              Join 500+ businesses already growing with VITAL AI to automate their <br /> growth and dominate their market.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button 
                className="main-btn"
                onClick={() => navigate("/contact")}
              >
                Get Started Now
              </Button>
              <Button 
                className="outline-btn"
                onClick={() => navigate("/pricing")}
              >
                View Pricing
              </Button>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
};

export default Home;