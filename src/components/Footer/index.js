import React from "react";
import Logo from "../../Assets/images/LogoWhite.svg";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function index() {
  return (
    <>
      <div className="footer pb-5">
        <Container fluid>
          <Row>
            <Col lg={{ span: 5, offset: 1 }} className="footer-column1">
              <img src={Logo} alt="Logo White" className="footer-logo" />
              <div className="footer-location">
                <h3>North Jakarta, DKI Jakarta, 14460</h3>
                <h3 className="mt-3">Follow Us On Social Media</h3>
                <div className="socials">
                  <div className="ellipse"></div>
                  <div className="ellipse"></div>
                  <div className="ellipse"></div>
                  <div className="ellipse"></div>
                </div>
              </div>
            </Col>
            <Col lg="3" className="footer-column2">
              <h5>Affile</h5>
              <ul className="footer-list">
                <li>
                  <Link to="/"></Link>Home
                </li>
                <li>
                  <Link to="#"></Link>Service
                </li>
                <li>
                  <Link to="#"></Link>Portfolio
                </li>
                <li>
                  <Link to="#"></Link>Team
                </li>
                <li>
                  <Link to="#"></Link>Contact
                </li>
              </ul>
            </Col>
            <Col lg="3" className="footer-column3">
              <h5>Help</h5>
              <ul className="footer-list">
                <li>
                  <Link to="#"></Link>FAQ
                </li>
                <li>
                  <Link to="#"></Link>Terms and Condition
                </li>
                <li>
                  <Link to="#"></Link>Privacy Policy
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="copyright pt-3 pb-3 text-center">
        <p>Copyright © 2022 Affile Developement. All Rights Reserved </p>
      </div>
    </>
  );
}

export default index;
