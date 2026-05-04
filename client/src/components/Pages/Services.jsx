import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { CheckCircleFill } from "react-bootstrap-icons";
import { useNavigate, useLocation } from "react-router-dom";

const services = [
  {
    id: "tiktok-shop-management",
    title: "TikTok Shop Management & Growth",
    link: "/services/tiktok-shop-management-uk",
    desc: "Scale your e-commerce sales with AI-powered TikTok Shop management, viral content and conversion-focused strategies.",
    image: "/Images/new4.png",
    features: [
      "TikTok Shop Setup & Optimization",
      "AI Generated Product Videos",
      "Influencer & UGC Strategy",
      "TikTok Ads Management",
    ],
    benefits: [
      "Increase sales through viral content",
      "Reach UK TikTok buyers",
      "Boost product visibility instantly",
    ],
  },
  {
    id: "virtual-product-demo",
    title: "AI Virtual Product Demonstration",
    link: "/services/ai-product-visualization-virtual-try-on-uk",
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
    id: "ecommerce-solutions",
    title: "AI Powered E-Commerce Solutions",
    link: "/services/ai-ecommerce-growth-solutions-uk",
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
    id: "website-building",
    title: "AI Powered Website Building",
    link: "/services/ai-website-design-development-uk",
    desc: "Fast, SEO optimized and intelligent websites.",
    image: "/Images/CR3(2).png",
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
    id: "digital-marketing",
    title: "AI Powered Digital Marketing",
    link: "/services/ai-digital-marketing-paid-ads-uk",
    desc: "Scale your brand with data-driven precision using AI-managed ads, SEO and content strategies.",
    image: "/Images/CR1.webp",
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
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);

      if (section) {
        setTimeout(() => {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 150);
      }
    }
  }, [location]);

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
          cursor:pointer;
        }

        @keyframes shine{
          to{background-position:300% center;}
        }

        .service-section{
          margin-bottom:120px;
          scroll-margin-top:120px;
        }

        .service-title{
          margin-bottom:30px;
          font-size:34px;
          line-height:1.2;
        }

        .service-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          align-items:center;
          gap:60px;
        }

        .service-grid.reverse{
          direction:rtl;
        }

        .service-grid.reverse .service-content,
        .service-grid.reverse .service-image{
          direction:ltr;
        }

        .service-content{
          min-width:0;
        }

        .service-image{
          border-radius:25px;
          overflow:hidden;
        }

        .service-image img{
          width:100%;
          height:380px;
          object-fit:cover;
          border-radius:25px;
          box-shadow:0 20px 50px rgba(0,0,0,0.12);
          transition:0.4s ease;
          display:block;
        }

        .service-image:hover img{
          transform:scale(1.05);
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
          border-radius:18px;
          padding:18px;
          box-shadow:0 10px 25px rgba(0,0,0,0.08);
        }

        .item{
          display:flex;
          gap:10px;
          margin-bottom:10px;
          font-size:14px;
          align-items:flex-start;
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
          transition:0.3s ease;
        }

        .btn-custom:hover{
          transform:translateY(-3px);
          box-shadow:0 12px 30px rgba(124,58,237,0.25);
        }

        @media(max-width:768px){
          .service-section{
            margin-bottom:85px;
          }

          .service-title{
            text-align:center;
            font-size:26px;
            margin-bottom:18px;
          }

          .service-grid,
          .service-grid.reverse{
            display:flex;
            flex-direction:column;
            direction:ltr;
            gap:24px;
          }

          .service-image{
            order:1;
            width:100%;
          }

          .service-content{
            order:2;
            width:100%;
            text-align:center;
          }

          .service-image img{
            max-width:100%;
            height:280px;
            object-fit:contain;
            margin:0 auto;
            background:#fff;
          }

          .info-row{
            flex-direction:column;
          }

          .glass-card{
            min-width:100%;
          }

          .item{
            text-align:left;
          }
        }
      `}</style>

      <Container>
        {services.map((s, i) => (
          <div key={s.id} id={s.id} className="service-section">
            <h2
              className="gradient-text service-title"
              onClick={() => navigate(s.link)}
            >
              {s.title}
            </h2>

            <div className={`service-grid ${i % 2 !== 0 ? "reverse" : ""}`}>
              <div className="service-image">
                <img src={s.image} alt={s.title} />
              </div>

              <div className="service-content">
                <p className="text-muted">{s.desc}</p>

                <div className="info-row">
                  <div className="glass-card">
                    <h5>Key Features</h5>
                    {s.features.map((f, idx) => (
                      <div key={idx} className="item">
                        <CheckCircleFill color="#16a34a" size={18} />
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="glass-card">
                    <h5>Benefits</h5>
                    {s.benefits.map((b, idx) => (
                      <div key={idx} className="item">
                        <CheckCircleFill color="#7c3aed" size={18} />
                        {b}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="btn-custom" onClick={() => navigate(s.link)}>
                  View Details →
                </button>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}