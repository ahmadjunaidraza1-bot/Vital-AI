import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const OurWork = () => {
  const [active, setActive] = useState("All");

  const projects = [
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts",
      img: "/Images/p1.webp",
      link: "/portfolio/pro-chauffeurs",
    },
    {
  title: "TikTok Store",
  category: "TikTok Store",
  img: "/Images/h1-poster.webp",
  link: "/portfolio/tiktok",
},
    {
      title: "Viper",
      category: "E-Commerce",
      img: "/Images/p2.webp",
      link: "/portfolio/viper",
    },
    {
      title: "Women Bags",
      category: "Virtual Demos",
      img: "/Images/5.webp",
      link: "/portfolio/women-bags",
    },
    {
      title: "E-Commerce Clothing",
      category: "E-Commerce",
      img: "/Images/31.png",
      link: "/portfolio/ecommerce-clothing",
    },
  ];

  const categories = [
    "All",
    "E-Commerce",
    "Websites",
    "Social Media Posts",
    "Virtual Demos",
    "TikTok Store", 
  ];

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div style={{ padding: "120px 0", background: "#fff" }}>
      <style>{`
        .portfolio-title{
          font-size:14px;
          font-weight:800;
          letter-spacing:3px;
          color:#7c3aed;
          text-transform:uppercase;
        }

        .portfolio-heading {
          font-size: 44px;
          font-weight: 900;
          background: linear-gradient(135deg, #7c3aed, #ec4899, #06b6d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .portfolio-card{
          position:relative;
          overflow:hidden;
          border-radius:28px;
          height:410px;
          cursor:pointer;
          box-shadow:0 25px 60px rgba(0,0,0,0.12);
        }

        .portfolio-card img{
          width:100%;
          height:100%;
          object-fit:cover;
          transition:1s ease;
        }

        .portfolio-card:hover img{
          transform:scale(1.25);
          filter:blur(3px) brightness(0.6);
        }

        .overlay{
          position:absolute;
          inset:0;
          display:flex;
          flex-direction:column;
          justify-content:flex-end;
          padding:28px;
          background:linear-gradient(
            to top,
            rgba(0,0,0,0.92),
            rgba(0,0,0,0.4),
            transparent
          );
          opacity:0;
          transition:0.5s ease;
        }

        .portfolio-card:hover .overlay{
          opacity:1;
        }

        .overlay-content{
          transform:translateY(30px);
          opacity:0;
          transition:0.6s ease;
        }

        .portfolio-card:hover .overlay-content{
          transform:translateY(0);
          opacity:1;
        }

        .tag{
          font-size:11px;
          letter-spacing:2px;
          color:#06b6d4;
          font-weight:800;
          text-transform:uppercase;
        }

        .title{
          font-size:30px;
          font-weight:900;
          color:#fff;
          margin-top:6px;
        }

        .explore{
          margin-top:18px;
          display:flex;
          align-items:center;
          gap:10px;
          color:#fff;
          font-weight:700;
          transition:0.3s;
        }

        .explore:hover{
          color:#ec4899;
          transform:translateX(5px);
        }

        .bottom-card{
          position:absolute;
          bottom:20px;
          left:20px;
          right:20px;
          padding:18px;
          border-radius:20px;
          background:rgba(255,255,255,0.75);
          backdrop-filter:blur(18px);
          border:1px solid rgba(255,255,255,0.3);
          transition:0.5s ease;
        }

        .portfolio-card:hover .bottom-card{
          opacity:0;
          transform:translateY(20px);
        }

        .filter-btn{
          border:1px solid #ddd;
          background:#fff;
          padding:8px 18px;
          border-radius:30px;
          margin:5px;
          font-weight:600;
          cursor:pointer;
        }

        .filter-btn.active{
          background:linear-gradient(90deg,#7c3aed,#ec4899);
          color:#fff;
          border:none;
        }
      `}</style>

      <Container>

        {/* HEADER */}
        <div className="text-center mb-5">
          <h5 className="portfolio-title">Our Work</h5>
          <h1 className="portfolio-heading">
            Our Latest Projects
          </h1>
          <p className="text-muted">
            Explore how we've helped businesses grow with AI-powered solutions
          </p>
        </div>

        {/* FILTERS */}
        <div className="text-center mb-5">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`filter-btn ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <Row className="g-4">

          {filtered.map((item, i) => (
            <Col md={6} lg={4} key={i}>

              <a href={item.link} style={{ textDecoration: "none" }}>

                <div className="portfolio-card">

                  {/* IMAGE (LAZY ADDED) */}
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                  />

                  {/* OVERLAY */}
                  <div className="overlay">
                    <div className="overlay-content">
                      <div className="tag">{item.category}</div>
                      <div className="title">{item.title}</div>

                      <div className="explore">
                        Explore Project →
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM CARD */}
                  <div className="bottom-card">
                    <div className="tag" style={{ opacity: 0.8 }}>
                      {item.category}
                    </div>
                    <div style={{ fontWeight: 800 }}>
                      {item.title}
                    </div>
                  </div>

                </div>

              </a>

            </Col>
          ))}

        </Row>

      </Container>
    </div>
  );
};

export default OurWork;