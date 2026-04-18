import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Case Study",
    "Blog",
    "Pricing",
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "80px",
        background:
          "radial-gradient(circle at top, #e9f1ff 0%, #f8fafc 40%, #eef2ff 100%)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* NAVBAR */}
      <Navbar
        expand="lg"
        style={{
          width: scrolled ? "92%" : "100%",
          position: "fixed",
          top: scrolled ? "12px" : "0px",
          left: "50%",
          transform: `translateX(-50%) ${scrolled ? "scale(0.96)" : "scale(1)"}`,
          zIndex: 999,
          padding: scrolled ? "10px 28px" : "16px 40px",
          background: scrolled
            ? "rgba(255,255,255,0.65)"
            : "rgba(255,255,255,0.75)",
          backdropFilter: "blur(18px)",
          borderRadius: scrolled ? "16px" : "0px",
          boxShadow: scrolled
            ? "0 10px 35px rgba(0,0,0,0.12)"
            : "0 8px 30px rgba(0,0,0,0.06)",
          transition: "all 0.35s ease",
        }}
      >
        {/* LOGO */}
        <Navbar.Brand as={Link} to="/">
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>

            {/* LOGO IMAGE */}
            <img
              src="/Images/logo.webp"
              alt="logo"
              style={{
                width: scrolled ? "34px" : "40px",
                height: scrolled ? "34px" : "40px",
                transition: "transform 0.4s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />

            {/* LOGO TEXT */}
            <div style={{ lineHeight: "1.1" }}>
              <div
                style={{
                  fontWeight: "900",
                  fontSize: scrolled ? "18px" : "20px",
                  letterSpacing: "1px",
                  background:
                    "linear-gradient(90deg,#2563eb,#60a5fa,#1e40af,#7c3aed)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "gradientMove 6s ease infinite",
                }}
              >
                VITAL AI
              </div>

              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "3px",
                  marginTop: "2px",
                  color: "#64748b",
                  fontWeight: "600",
                }}
              >
                INTELLIGENT SYSTEM
              </div>
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ms-auto align-items-center gap-4">
            {navItems.map((item, i) => {
              const path =
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "-")}`;

              return (
                <Nav.Link
                  key={i}
                  as={Link}
                  to={path}
                  style={{
                    color: isActive(path) ? "#111" : "#6b7280",
                    fontStyle: "italic",
                    fontSize: scrolled ? "13px" : "14px",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#2563eb";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = isActive(path)
                      ? "#111"
                      : "#6b7280";
                    e.target.style.transform = "translateY(0px)";
                  }}
                >
                  {item}

                  <span
                    style={{
                      display: isActive(path) ? "block" : "none",
                      height: "2px",
                      background: "#2563eb",
                      marginTop: "4px",
                      borderRadius: "10px",
                    }}
                  />
                </Nav.Link>
              );
            })}

            {/* SEPARATOR */}
            <span style={{ color: "#94a3b8", fontWeight: "300" }}>|</span>

            {/* 🔥 ANIMATED GRADIENT BUTTON */}
            <Button as={Link} to="/contact" className="animated-btn">
              Book a strategy Call ✨
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      
      {/* 🔥 STYLES */}
      <style>{`
        /* LOGO TEXT ANIMATION */
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* BUTTON */
        .animated-btn {
          border: none;
          border-radius: 12px;
          padding: 10px 18px;
          font-weight: 600;
          font-size: 14px;
          color: white;
          cursor: pointer;
          background: linear-gradient(
            270deg,
            #2563eb,
            #1d4ed8,
            #7c3aed,
            #a855f7
          );
          background-size: 300% 300%;
          animation: gradientMove 6s ease infinite;
          transition: all 0.4s ease;
          box-shadow: 0 10px 25px rgba(37,99,235,0.25);
        }

        .animated-btn:hover {
          animation: gradientMove 2s ease infinite;
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 15px 40px rgba(168,85,247,0.35);
        }

        .animated-btn:active {
          transform: scale(0.97);
        }
      `}</style>
    </div>
  );
}