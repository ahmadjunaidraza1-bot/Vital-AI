import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const CaseStudy = () => {
  const cases = [
    {
      title: "Pro Chauffeurs Luxury Growth Campaign",
      img: "/Images/cr11.png",
      problem:
        "Pro Chauffeurs wanted premium online branding and more direct bookings for airport transfers, business travel, weddings, and VIP transport services in a competitive luxury market.",
      solution:
        "We created luxury ad creatives, high-converting landing visuals, social media campaigns, and premium brand positioning focused on trust, elegance, and customer convenience.",
      stats: [
        { value: "220%", label: "Lead Increase" },
        { value: "3.8x", label: "ROAS Growth" },
        { value: "65%", label: "Booking Growth" },
      ],
    },
    {
      title: "Luxury Jewelry Visual Experience",
      img: "/Images/jb1.png",
      problem:
        "A jewelry brand needed premium visuals to showcase products online and increase trust, engagement, and conversion for high-ticket luxury customers.",
      solution:
        "We designed elegant product campaigns, AI model showcases, luxury banners, and social creatives that highlighted shine, craftsmanship, and exclusivity.",
      stats: [
        { value: "180%", label: "Engagement Boost" },
        { value: "52%", label: "Sales Growth" },
        { value: "4.9/5", label: "Client Rating" },
      ],
    },
  ];

  return (
    <section className="section-space">
      <Container>
        {/* HEADER */}
        <div className="text-center mb-5">
          <h5
            className="fw-bold"
            style={{
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#7c3aed",
              fontSize: "16px",
              marginTop: "50px",
            }}
          >
            Case Studies
          </h5>

          <h2 className="fw-bold display-5 gradient-shine-text">
            Real Results, Real <span>Impact</span>
          </h2>

          <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "800px" }}>
            Deep dives into how we build premium brands, generate leads, and
            create results with modern digital strategies.
          </p>
        </div>

        {/* CASES */}
        <div className="d-flex flex-column gap-5">
          {cases.map((item, i) => (
            <Row key={i} className="align-items-center g-5 case-wrapper">
              {/* IMAGE */}
              <Col lg={5} className={i % 2 !== 0 ? "order-lg-2" : ""}>
                <div className="case-img">
                  <img src={item.img} alt={item.title} />
                </div>
              </Col>

              {/* CONTENT */}
              <Col lg={7} className={i % 2 !== 0 ? "order-lg-1" : ""}>
                <h3 className="case-title mb-4">{item.title}</h3>

                <Row className="g-4">
                  <Col md={6}>
                    <div className="glass-box">
                      <h5 className="section-label">The Problem</h5>
                      <p>{item.problem}</p>
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="glass-box">
                      <h5 className="section-label">The Solution</h5>
                      <p>{item.solution}</p>
                    </div>
                  </Col>
                </Row>

                <Row className="mt-4 g-3">
                  {item.stats.map((s, idx) => (
                    <Col md={4} key={idx}>
                      <div className="stat-card">
                        <h2>{s.value}</h2>
                        <p>{s.label}</p>
                      </div>
                    </Col>
                  ))}
                </Row>

                <div className="mt-4">
                  <Button className="main-btn">Read Full Story</Button>
                </div>
              </Col>
            </Row>
          ))}
        </div>
      </Container>

      <style>{`
        .section-space{
          padding:80px 0;
          background:#fff;
        }

        .gradient-shine-text{
          font-weight:800;
          font-size:3rem;
          background:linear-gradient(
            90deg,
            #7c3aed,
            #ec4899,
            #06b6d4,
            #7c3aed
          );
          background-size:300% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          animation:textShine 5s linear infinite;
        }

        .gradient-shine-text span{
          background:linear-gradient(90deg,#ec4899,#7c3aed,#06b6d4);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          animation:textShine 3s linear infinite;
        }

        @keyframes textShine{
          0%{background-position:0% center;}
          100%{background-position:300% center;}
        }

        .case-wrapper{
          padding:20px 0;
        }

        .case-img{
          border-radius:26px;
          overflow:hidden;
          box-shadow:0 25px 60px rgba(0,0,0,0.12);
        }

        .case-img img{
          width:100%;
          height:450px;
          object-fit:cover;
          transition:0.6s ease;
        }

        .case-img:hover img{
          transform:scale(1.08);
        }

        .case-title{
          font-size:28px;
          font-weight:800;
        }

        .glass-box{
          padding:20px;
          border-radius:18px;
          background:rgba(255,255,255,0.75);
          backdrop-filter:blur(14px);
          border:1px solid rgba(0,0,0,0.05);
          height:100%;
        }

        .section-label{
          font-size:12px;
          font-weight:800;
          letter-spacing:2px;
          text-transform:uppercase;
          color:#7c3aed;
          margin-bottom:10px;
        }

        .glass-box p{
          margin:0;
          color:#4b5563;
          line-height:1.6;
        }

        .stat-card{
          padding:22px;
          text-align:center;
          border-radius:18px;
          background:linear-gradient(135deg,#7c3aed,#ec4899);
          color:#fff;
          box-shadow:0 15px 40px rgba(124,58,237,0.25);
        }

        .stat-card h2{
          font-size:26px;
          font-weight:800;
        }

        .stat-card p{
          margin:0;
          font-size:12px;
          opacity:0.9;
        }

        .main-btn{
          position:relative;
          overflow:hidden;
          border:none;
          padding:12px 28px;
          border-radius:50px;
          color:#fff;
          font-weight:700;
          background:linear-gradient(90deg,#7c3aed,#ec4899);
          transition:0.4s;
        }

        .main-btn:hover{
          transform:translateY(-3px) scale(1.03);
          box-shadow:0 15px 35px rgba(236,72,153,.3);
        }

        .main-btn::before{
          content:"";
          position:absolute;
          top:0;
          left:-75%;
          width:50%;
          height:100%;
          background:linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.6),
            transparent
          );
          transform:skewX(-25deg);
        }

        .main-btn:hover::before{
          animation:shine 0.9s ease;
        }

        @keyframes shine{
          0%{left:-75%;}
          100%{left:130%;}
        }

        @media (max-width:768px){
          .gradient-shine-text{
            font-size:2rem;
          }

          .case-img img{
            height:320px;
          }

          .case-title{
            font-size:24px;
          }
        }
      `}</style>
    </section>
  );
};

export default CaseStudy;