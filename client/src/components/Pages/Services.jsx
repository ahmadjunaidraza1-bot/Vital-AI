import React from "react";
import { Container } from "react-bootstrap";
import { CheckCircleFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "AI Virtual Product Demonstration",
    desc: "Revolutionize how you showcase your products with AI-powered virtual try-ons.",
    image: "/Images/CR2.png",
    features: [
      "Virtual Try-On for Apparel",
      "3D Jewelry Rendering",
      "AI Model Ad Generation",
      "TikTok / Instagram Automation",
    ],
    benefits: [
      "Reduce photoshoots cost by 90%",
      "Increase engagement",
      "Faster time-to-market",
    ],
  },
  {
    title: "AI Powered E-Commerce Solutions",
    desc: "Smart AI systems to optimize sales and customer experience.",
    image: "/Images/Sr1.png",
    features: [
      "Smart Recommendations",
      "Inventory Automation",
      "Dynamic Pricing AI",
      "Customer Analysis",
    ],
    benefits: [
      "Increase sales by 30%",
      "Reduce operational cost",
      "Better customer retention",
    ],
  },
  {
    title: "AI Powered Website Building",
    desc: "Fast, SEO optimized and intelligent websites.",
    image: "/Images/CR3.png",
    features: [
      "Real-time Optimization",
      "A/B Testing AI",
      "Predictive UX",
      "Voice Search",
    ],
    benefits: [
      "99% performance score",
      "Better SEO ranking",
      "High conversion rate",
    ],
  },
  {
    title: "AI Powered Digital Marketing",
    desc: "Scale your brand with data-driven precision using AI-managed ads, SEO and content strategies.",
    image: "/Images/CR1.png",
    features: [
      "Automated Ad Bidding",
      "AI Content Generation",
      "Predictive Lead Scoring",
      "Cross-Channel Attribution",
    ],
    benefits: [
      "Reduce acquisition cost by 40%",
      "24/7 campaign automation",
      "Precise audience targeting",
    ],
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "100px 0", background: "#fff" }}>
      <style>{`
        .gradient-text{
          background:linear-gradient(90deg,#7c3aed,#ec4899,#06b6d4,#7c3aed);
          background-size:300% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          animation:shine 5s linear infinite;
          font-weight:800;
        }

        @keyframes shine{
          to{background-position:300% center;}
        }

        .service-section{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:60px;
          margin-bottom:120px;
          flex-wrap:wrap;
        }

        .service-content{
          flex:1;
          min-width:300px;
        }

        .service-image{
          flex:1;
          min-width:300px;
          position:relative;
          overflow:hidden;
          border-radius:25px;
        }

        .service-image img{
          width:100%;
          max-width:520px;
          height:380px;
          object-fit:cover;
          border-radius:25px;
          box-shadow:0 20px 50px rgba(0,0,0,0.12);
          transition:0.5s ease;
          display:block;
        }

        /* IMAGE HOVER ZOOM */
        .service-image:hover img{
          transform:scale(1.06);
        }

        /* SHINING EFFECT */
        .service-image::before{
          content:"";
          position:absolute;
          top:0;
          left:-120%;
          width:60%;
          height:100%;
          background:linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.55),
            transparent
          );
          transform:skewX(-20deg);
          z-index:2;
          transition:0.7s;
        }

        .service-image:hover::before{
          left:130%;
        }

        .info-row{
          display:flex;
          gap:20px;
          margin-top:20px;
          flex-wrap:wrap;
        }

        .glass-card{
          flex:1;
          min-width:250px;
          background:rgba(255,255,255,0.75);
          backdrop-filter:blur(16px);
          border:1px solid rgba(0,0,0,0.08);
          border-radius:18px;
          padding:18px;
          box-shadow:0 10px 25px rgba(0,0,0,0.08);
        }

        .item{
          display:flex;
          gap:10px;
          margin-bottom:10px;
          align-items:flex-start;
          font-size:14px;
        }

        .btn-custom{
          margin-top:20px;
          padding:12px 25px;
          border-radius:50px;
          border:none;
          color:white;
          background:linear-gradient(90deg,#7c3aed,#ec4899);
          font-weight:600;
          cursor:pointer;
          display:inline-flex;
          align-items:center;
          gap:10px;
          transition:0.4s ease;
          position:relative;
          overflow:hidden;
        }

        .arrow{
          font-size:22px;
          transition:0.3s ease;
        }

        .btn-custom:hover{
          transform:translateY(-3px);
          box-shadow:
            0 0 15px rgba(124,58,237,0.6),
            0 0 30px rgba(236,72,153,0.4),
            0 15px 40px rgba(0,0,0,0.2);
        }

        .btn-custom:hover .arrow{
          transform:translateX(6px);
        }

        .btn-custom::before{
          content:"";
          position:absolute;
          top:0;
          left:-100%;
          width:100%;
          height:100%;
          background:linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.4),
            transparent
          );
          transition:0.5s;
        }

        .btn-custom:hover::before{
          left:100%;
        }

        @media(max-width:768px){
          .service-section{
            flex-direction:column !important;
            text-align:center;
          }

          .info-row{
            flex-direction:column;
          }
        }
      `}</style>

      <Container>
        {/* HEADER */}
        <div className="text-center mb-5">
          <h5
            className="fw-bold"
            style={{
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#7c3aed",
              fontSize: "16px"
            }}
          >
            Our Services
          </h5>

          <h2
            className="fw-bold mb-3"
            style={{
              fontSize: "54px",
              lineHeight: "1.2"
            }}
          >
            <span className="gradient-text">
              Intelligent Solutions for a <br /> Digital World
            </span>
          </h2>

          <p
            className="text-muted mx-auto"
            style={{
              maxWidth: "760px",
              fontSize: "17px",
              lineHeight: "1.8",
            }}
          >
            We provide a comprehensive suite of AI-powered services designed
            to help your business thrive in the modern technological landscape.
          </p>
        </div>

        {services.map((s, i) => (
          <div
            key={i}
            className="service-section"
            style={{
              flexDirection: i % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            {/* TEXT */}
            <div className="service-content">
              <h2 className="gradient-text">{s.title}</h2>
              <p className="text-muted">{s.desc}</p>

              <div className="info-row">
                <div className="glass-card">
                  <h5 className="mb-3">Key Features</h5>
                  {s.features.map((f, idx) => (
                    <div key={idx} className="item">
                      <CheckCircleFill color="#16a34a" size={18} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="glass-card">
                  <h5 className="mb-3">Benefits</h5>
                  {s.benefits.map((b, idx) => (
                    <div key={idx} className="item">
                      <CheckCircleFill color="#7c3aed" size={18} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="btn-custom"
                onClick={() => navigate("/contact")}
              >
                Request a Quote <span className="arrow">→</span>
              </button>
            </div>

            {/* IMAGE */}
            <div className="service-image">
              <img src={s.image} alt={s.title} />
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}