import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  GraphUpArrow,
  Stars,
  Gem,
  RocketTakeoffFill,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div style={{ padding: "120px 0", background: "#fff" }}>
      <style>{`
        .gradient-text{
          background:linear-gradient(90deg,#7c3aed,#ec4899,#06b6d4,#7c3aed);
          background-size:300% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          font-weight:800;
        }

        .glass{
          background:rgba(255,255,255,0.85);
          backdrop-filter:blur(18px);
          border:1px solid rgba(0,0,0,0.06);
          border-radius:20px;
          box-shadow:0 15px 40px rgba(0,0,0,0.08);
        }

        .stat-box{
          text-align:center;
          padding:25px;
          border-radius:18px;
          transition:0.3s;
        }

        .stat-box:hover{
          transform:translateY(-8px);
          box-shadow:0 20px 50px rgba(124,58,237,0.15);
        }

        .icon-wrap{
          width:60px;
          height:60px;
          margin:0 auto;
          border-radius:18px;
          display:flex;
          align-items:center;
          justify-content:center;
          background: linear-gradient(135deg,#7c3aed,#ec4899,#06b6d4);
          color:#fff;
          box-shadow:0 12px 30px rgba(124,58,237,0.25);
          position:relative;
          overflow:hidden;
        }

        .icon-wrap::after{
          content:"";
          position:absolute;
          top:-50%;
          left:-50%;
          width:200%;
          height:200%;
          background:linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.4),
            transparent
          );
          transform:rotate(25deg);
          animation: shineIcon 3s infinite;
        }

        @keyframes shineIcon {
          0%{transform:translateX(-100%) rotate(25deg);}
          100%{transform:translateX(100%) rotate(25deg);}
        }

        .number{
          font-size:30px;
          font-weight:800;
          background:linear-gradient(90deg,#7c3aed,#ec4899);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        /* MISSION + VISION */
        .mission-card,
        .vision-card{
          transition:0.4s ease;
          border-radius:22px;
        }

        .mission-card:hover,
        .vision-card:hover{
          transform:translateY(-8px);
          box-shadow:0 25px 60px rgba(124,58,237,0.15);
        }

        /* TEAM */
        .team-member {
          display:flex;
          flex-direction:column;
          align-items:center;
        }

        .team-img-wrap {
          width:100%;
          max-width:340px;
          height:420px;
          border-radius:20px;
          overflow:hidden;
          box-shadow:0 15px 40px rgba(0,0,0,0.08);
        }

        .team-img-wrap img {
          width:100%;
          height:100%;
          object-fit:cover;
          transition:transform 0.6s ease;
        }

        /* INNER ZOOM */
        .team-img-wrap:hover img {
          transform:scale(1.15);
        }

        .team-member h5{
          margin-top:15px;
        }
      `}</style>

      <Container>

        {/* HERO */}
        <div className="mb-5">
          <Row className="align-items-center g-5">

            <Col lg={6}>
              <h5 className="text-uppercase text-muted fw-bold">
                About Us
              </h5>

              <h1 className="fw-bold display-4">
                Pioneering the <br />
                <span className="gradient-text">AI Revolution</span>
              </h1>

              <p className="text-muted fs-5 mt-3">
                At VITAL AI, we believe that the future belongs to those who can harness
                the power of artificial intelligence.
              </p>
            </Col>

            <Col lg={6}>
              <img
                src="/Images/a1.jpg"
                alt="About"
                style={{
                  width: "100%",
                  height: "420px",
                  objectFit: "cover",
                  borderRadius: "25px",
                }}
              />
            </Col>

          </Row>
        </div>

        {/* STATS */}
        <Row className="g-4 text-center mb-5">

          <Col md={3}>
            <div className="glass stat-box p-4">
              <div className="icon-wrap mb-3"><GraphUpArrow size={26} /></div>
              <div className="number">500+</div>
              <p>Projects Completed</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="glass stat-box p-4">
              <div className="icon-wrap mb-3"><Stars size={26} /></div>
              <div className="number">200+</div>
              <p>Happy Clients</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="glass stat-box p-4">
              <div className="icon-wrap mb-3"><Gem size={26} /></div>
              <div className="number">15+</div>
              <p>Awards Won</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="glass stat-box p-4">
              <div className="icon-wrap mb-3"><RocketTakeoffFill size={26} /></div>
              <div className="number">40+</div>
              <p>Team Members</p>
            </div>
          </Col>

        </Row>

        {/* MISSION + VISION */}
        <Row className="g-5 mb-5">

          <Col lg={6}>
            <Card className="glass mission-card p-4 border-0 h-100">
              <h3 className="fw-bold gradient-text">Our Mission</h3>
              <p className="text-muted fs-5 mt-3">
                To empower every organization on the planet with intelligent digital solutions
                that drive growth, efficiency, and innovation.
              </p>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="glass vision-card p-4 border-0 h-100">
              <h3 className="fw-bold gradient-text">Our Vision</h3>
              <p className="text-muted fs-5 mt-3">
                To become the world's leading AI-first digital agency transforming industries
                through machine learning and automation.
              </p>
            </Card>
          </Col>

        </Row>

        {/* LEADERSHIP */}
        <div className="text-center mb-4 mt-5">
          <h2 className="fw-bold">
            Meet Our <span className="gradient-text">Leadership</span>
          </h2>
        </div>

        <Row className="g-5 text-center">

          <Col md={4}>
            <div className="team-member">
              <div className="team-img-wrap">
                <img src="/Images/a2.jpg" alt="" />
              </div>
              <h5>Dr. Aris Thorne</h5>
              <p className="text-muted">Chief AI Officer</p>
            </div>
          </Col>

          <Col md={4}>
            <div className="team-member">
              <div className="team-img-wrap">
                <img src="/Images/a3.jpg" alt="" />
              </div>
              <h5>Sarah Jenkins</h5>
              <p className="text-muted">CEO & Founder</p>
            </div>
          </Col>

          <Col md={4}>
            <div className="team-member">
              <div className="team-img-wrap">
                <img src="/Images/a4.jpg" alt="" />
              </div>
              <h5>Marcus Chen</h5>
              <p className="text-muted">Head of Design</p>
            </div>
          </Col>

        </Row>

      </Container>
    </div>
  );
};

export default About;