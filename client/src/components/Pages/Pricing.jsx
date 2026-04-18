import React from "react";
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Pricing = () => {
  return (
    <Container fluid className="py-5" style={{ background: "#f8f9fc" }}>
      <Container>
        {/* HEADER */}
        <div className="text-center mb-5">
          <h5
            className="pricing-title"
            style={{
              fontSize: "14px",
              fontWeight: 800,
              letterSpacing: "3px",
              color: "#7c3aed",
              textTransform: "uppercase",
            }}
          >
            Pricing
          </h5>
          <h1
            className="fw-bold display-5"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #ec4899, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Transparent Pricing for Every <br /> Stage
          </h1>
          <p className="text-muted fs-5">
            Choose the perfect plan to scale your business. No hidden fees, just pure innovation.
          </p>
        </div>

        <Row className="g-4 mb-5">
          {/* STARTER - White Background with Gradient Shine Button */}
          <Col md={6} lg={4}>
            <Card className="border-0 shadow-sm rounded-4 h-100 bg-white">
              <Card.Body className="p-4 d-flex flex-column">
                <h3 className="fw-bold">Starter</h3>
                <p className="text-muted"> Perfect for small businesses. </p>
                <div className="mb-4">
                  <span className="display-4 fw-bold">$2,500</span>
                  <span className="text-muted"> /project</span>
                </div>
                <ul className="list-unstyled flex-grow-1">
                  <li className="mb-2">✓ Custom AI Website</li>
                  <li className="mb-2">✓ Basic SEO</li>
                  <li className="mb-2">✓ Mobile Responsive</li>
                  <li className="mb-2">✓ Email Support</li>
                </ul>
                <Button
                  variant="outline-primary"
                  className="w-100 rounded-pill py-2 border-2 fw-semibold position-relative overflow-hidden"
                  style={{
                    borderColor: "#e2e8f0",
                    color: "#4b5563",
                    background: "white",
                    transition: "all 0.3s ease",
                    zIndex: 1,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #7c3aed, #ec4899, #06b6d4)";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.transform = "scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(124, 58, 237, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "white";
                    e.currentTarget.style.color = "#4b5563";
                    e.currentTarget.style.borderColor = "#e2e8f0";
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Get Started
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* PROFESSIONAL (POPULAR) - Gradient Border on Hover */}
          <Col md={6} lg={4}>
            <div className="position-relative h-100">
              {/* POPULAR BADGE - Centered on top border */}
              <div
                className="position-absolute start-50 translate-middle-x"
                style={{ top: "-14px", zIndex: 10 }}
              >
                <span
                  className="px-4 py-2 rounded-pill text-white fw-bold fs-7"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #ec4899, #06b6d4)",
                    boxShadow: "0 4px 12px rgba(124, 58, 237, 0.3)",
                    fontSize: "0.85rem",
                  }}
                >
                  ⭐ Most Popular
                </span>
              </div>

              {/* Card with gradient border on hover */}
              <Card
                className="border-0 rounded-4 h-100 bg-white transition-all"
                style={{
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 20px 35px -12px rgba(0,0,0,0.2)";
                  e.currentTarget.style.background =
                    "linear-gradient(white, white) padding-box, linear-gradient(135deg, #7c3aed, #ec4899, #06b6d4) border-box";
                  e.currentTarget.style.border = "2px solid transparent";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(0,0,0,0.1)";
                  e.currentTarget.style.background = "white";
                  e.currentTarget.style.border = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Card.Body className="p-4 d-flex flex-column">
                  <h3 className="fw-bold">Professional</h3>
                  <p className="text-muted"> Ideal for growing companies. </p>
                  <div className="mb-4">
                    <span className="display-4 fw-bold">$5,000</span>
                    <span className="text-muted"> /project</span>
                  </div>
                  <ul className="list-unstyled flex-grow-1">
                    <li className="mb-2">✓ E-Commerce Integration</li>
                    <li className="mb-2">✓ AI Chatbot</li>
                    <li className="mb-2">✓ Marketing Suite</li>
                    <li className="mb-2">✓ Priority Support</li>
                    <li className="mb-2">✓ API Access</li>
                  </ul>
                  {/* GRADIENT BUTTON */}
                  <Button
                    className="w-100 fw-semibold border-0 rounded-pill py-2"
                    style={{
                      background: "linear-gradient(135deg, #7c3aed, #ec4899, #06b6d4)",
                      color: "white",
                      transition: "transform 0.2s, box-shadow 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.02)";
                      e.currentTarget.style.boxShadow = "0 8px 20px rgba(124, 58, 237, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    Get Started →
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>

          {/* ENTERPRISE - White Background with Gradient Shine Button */}
          <Col md={12} lg={4}>
            <Card className="border-0 shadow-sm rounded-4 h-100 bg-white">
              <Card.Body className="p-4 d-flex flex-column">
                <h3 className="fw-bold">Enterprise</h3>
                <p className="text-muted"> Tailored solutions for large-scale needs. </p>
                <div className="mb-4">
                  <span className="display-4 fw-bold">Custom</span>
                </div>
                <ul className="list-unstyled flex-grow-1">
                  <li className="mb-2">✓ Full AI Ecosystem</li>
                  <li className="mb-2">✓ Dedicated Manager</li>
                  <li className="mb-2">✓ 24/7 Support</li>
                  <li className="mb-2">✓ ML Models</li>
                </ul>
                <Button
                  variant="outline-primary"
                  className="w-100 rounded-pill py-2 border-2 fw-semibold position-relative overflow-hidden"
                  style={{
                    borderColor: "#e2e8f0",
                    color: "#4b5563",
                    background: "white",
                    transition: "all 0.3s ease",
                    zIndex: 1,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #7c3aed, #ec4899, #06b6d4)";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.transform = "scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(124, 58, 237, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "white";
                    e.currentTarget.style.color = "#4b5563";
                    e.currentTarget.style.borderColor = "#e2e8f0";
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Contact Sales
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* PROFESSIONALLY DESIGNED TABLE */}
        <div className="mt-5 pt-4">
          <h2 className="text-center fw-bold mb-2"  style={{
              background: "linear-gradient(135deg, #7c3aed, #ec4899, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}>
            Feature Comparison
          </h2>
          <p className="text-center text-muted mb-5">
            Everything you need to make the right choice
          </p>

          <div className="table-responsive rounded-4 overflow-hidden shadow-lg">
            <Table
              className="align-middle mb-0"
              style={{ borderCollapse: "separate", borderSpacing: 0 }}
            >
              {/* GRADIENT HEADER */}
              <thead>
                <tr
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #ec4899, #06b6d4)",
                  }}
                >
                  <th
                    className="text-start py-4 ps-4 text-white border-0"
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      borderTopLeftRadius: "12px",
                    }}
                  >
                    Feature
                  </th>
                  <th
                    className="text-center py-4 text-white border-0"
                    style={{ fontSize: "1.1rem", fontWeight: "600" }}
                  >
                    Starter
                  </th>
                  <th
                    className="text-center py-4 text-white border-0"
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      background: "rgba(255,255,255,0.1)",
                    }}
                  >
                    <span className="badge bg-white text-dark me-2 rounded-pill px-2 py-1">
                      ⭐
                    </span>
                    Professional
                  </th>
                  <th
                    className="text-center py-4 pe-4 text-white border-0"
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      borderTopRightRadius: "12px",
                    }}
                  >
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody style={{ background: "#fff" }}>
                <tr className="border-bottom">
                  <td className="fw-bold text-start ps-4 py-3" style={{ color: "#1f2937" }}>
                    AI Integration
                  </td>
                  <td className="text-center py-3">
                    <span className="px-3 py-1 bg-light rounded-pill text-muted">
                      Basic
                    </span>
                  </td>
                  <td className="text-center py-3" style={{ background: "#faf5ff" }}>
                    <span
                      className="px-3 py-1 rounded-pill"
                      style={{
                        background: "linear-gradient(135deg, #7c3aed20, #ec489920)",
                        color: "#7c3aed",
                        fontWeight: "500",
                      }}
                    >
                      Advanced
                    </span>
                  </td>
                  <td className="text-center py-3">
                    <span className="px-3 py-1 bg-light rounded-pill text-muted">
                      Custom
                    </span>
                  </td>
                </tr>
                <tr className="border-bottom">
                  <td className="fw-bold text-start ps-4 py-3" style={{ color: "#1f2937" }}>
                    Support
                  </td>
                  <td className="text-center py-3">📧 Email</td>
                  <td className="text-center py-3" style={{ background: "#faf5ff" }}>
                    ⚡ Priority
                  </td>
                  <td className="text-center py-3">🕒 24/7</td>
                </tr>
                <tr className="border-bottom">
                  <td className="fw-bold text-start ps-4 py-3" style={{ color: "#1f2937" }}>
                    Revisions
                  </td>
                  <td className="text-center py-3">2</td>
                  <td
                    className="text-center py-3"
                    style={{ background: "#faf5ff", fontWeight: "600", color: "#7c3aed" }}
                  >
                    5
                  </td>
                  <td className="text-center py-3">Unlimited</td>
                </tr>
                <tr className="border-bottom">
                  <td className="fw-bold text-start ps-4 py-3" style={{ color: "#1f2937" }}>
                    Delivery
                  </td>
                  <td className="text-center py-3">4 Weeks</td>
                  <td className="text-center py-3" style={{ background: "#faf5ff" }}>
                    6–8 Weeks
                  </td>
                  <td className="text-center py-3">Flexible</td>
                </tr>
                <tr>
                  <td
                    className="fw-bold text-start ps-4 py-3"
                    style={{ color: "#1f2937", borderBottomLeftRadius: "12px" }}
                  >
                    Analytics
                  </td>
                  <td className="text-center py-3">Monthly</td>
                  <td className="text-center py-3" style={{ background: "#faf5ff" }}>
                    Weekly
                  </td>
                  <td
                    className="text-center py-3"
                    style={{ borderBottomRightRadius: "12px" }}
                  >
                    Real-time
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Pricing;