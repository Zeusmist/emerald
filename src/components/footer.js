import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/footer.css";
import SubscriptionForm from "./subscription";

const QuickNavs = () => (
  <div className="footer_listing">
    <div class="list">
      <a href="/">Login</a>
    </div>
    <div class="list">
      <a href="/">Register</a>
    </div>
    <div class="list">
      <a href="/">Farms Projects</a>
    </div>
    <div class="list">
      <a href="/">How it works</a>
    </div>
    <div class="list">
      <a href="/">FAQ</a>
    </div>
  </div>
);

const Subscribe = () => (
  <div className="footer_listing">
    <div class="list">
      <a href="/">Subscribe to our newsletter here</a>
    </div>
    <div class="list">
      <a href="/">
        <SubscriptionForm />
      </a>
    </div>
  </div>
);

const RecentPost = () => (
  <div className="footer_listing">
    <div class="list">
      <a href="/">Details of recent post</a>
    </div>
  </div>
);

const sections = [
  { name: "About us" },
  { name: "Contact us" },
  { name: "Quick Navigation", ChildComponent: QuickNavs },
  { name: "Subscribe", ChildComponent: Subscribe },
  { name: "Recent Post", ChildComponent: RecentPost },
];

export default function Footer() {
  return (
    <Container fluid style={{ padding: 0 }}>
      <div className="emerald_footer">
        {sections.map((section, i) => (
          <Col key={i} class="footer_section">
            <p>
              <span>{section.name}</span>
            </p>
            {section.ChildComponent && <section.ChildComponent />}
          </Col>
        ))}
      </div>
      {/* <Row className="emerald_footer">
      </Row> */}
    </Container>
  );
}
