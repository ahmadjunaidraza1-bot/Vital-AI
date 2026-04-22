import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const CaseStudy = () => {
  const cases = [
    {
      title: "Global Retailer AI Transformation",
      img: "/Images/cr11.png",
      problem:
        "A major retail brand was struggling with low conversion rates and inefficient inventory management across 50+ stores.",
      solution:
        "We implemented a custom AI engine that analyzed customer traffic patterns and automated inventory restocking based on predictive demand.",
      stats: [
        { value: "45%", label: "Conversion Growth" },
        { value: "30%", label: "Operational Efficiency" },
        { value: "25%", label: "Customer Retention" },
      ],
    },
    {
      title: "FinTech App User Engagement",
      img: "/Images/cr 17.png",
      problem:
        "A startup fintech app had high churn rates due to a complex onboarding process and lack of personalized features.",
      solution:
        "We redesigned the UX and integrated a machine learning model that provides personalized financial insights to each user.",
      stats: [
        { value: "60%", label: "User Retention" },
        { value: "50%", label: "Onboarding Speed" },
        { value: "4.9/5", label: "App Rating" },
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
            Deep dives into how we solve complex business problems with intelligent technology.
          </p>
        </div>

        {/* CASES */}
        <div className="d-flex flex-column gap-5">

          {cases.map((item, i) => (
            <Row key={i} className="align-items-center g-5 case-wrapper">

              {/* IMAGE SIDE */}
              <Col lg={5} className={i % 2 !== 0 ? "order-lg-2" : ""}>
                <div className="case-img">
                  <img src={item.img} alt={item.title} />
                </div>
              </Col>

              {/* CONTENT SIDE */}
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
                  <Button className="main-btn">
                    Read Full Story
                  </Button>
                </div>

              </Col>
            </Row>
          ))}

        </div>
      </Container>

      {/* STYLES */}
      <style>{`
      .gradient-shine-text{
  font-weight: 800;
  font-size: 3rem;
  background: linear-gradient(
    90deg,
    #7c3aed,
    #ec4899,
    #06b6d4,
    #7c3aed
  );
  background-size: 300% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textShine 5s linear infinite;
}

/* extra glow on "Impact" */
.gradient-shine-text span{
  background: linear-gradient(90deg,#ec4899,#7c3aed,#06b6d4);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  animation: textShine 3s linear infinite;
}

@keyframes textShine{
  0% { background-position: 0% center; }
  100% { background-position: 300% center; }
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
          background:rgba(255,255,255,0.7);
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
  position: relative;
  overflow: hidden;
  border: none;
  padding: 12px 28px;
  border-radius: 50px;
  color: #fff;
  font-weight: 700;
  background: linear-gradient(90deg,#7c3aed,#ec4899);
  transition: 0.4s;
}

/* hover lift */
.main-btn:hover{
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 15px 35px rgba(236,72,153,.3);
}

/* ✨ shine effect */
.main-btn::before{
  content: "";
  position: absolute;
  top: 0;
  left: -75%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255,255,255,0.6),
    transparent
  );
  transform: skewX(-25deg);
}

/* animate on hover */
.main-btn:hover::before{
  animation: shine 0.9s ease;
}

@keyframes shine{
  0% { left: -75%; }
  100% { left: 130%; }
}
      `}</style>

    </section>
  );
};

export default CaseStudy;