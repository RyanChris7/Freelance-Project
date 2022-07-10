import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import Network from "../Assets/lottie/network.json";
import Lottie from "react-lottie";

function Home() {
  const networkLottie = {
    loop: true,
    autoplay: true,
    animationData: Network,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="navigation">
        <Navbar />
      </div>

      <div className="vertical-line"></div>

      <Container>
        <div className="maincontent1 mt-5 pt-2">
          <div className="landing-content">
            <h1>
              Expand Brand and Business <br />
              <span>Through Tech Services</span>
            </h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim <br /> veniam, quis nostrud
            </p>
            <div className="landing-button mt-5">
              <button className="button-1">Learn More</button>
              <button className="button-2">Get Started</button>
            </div>
          </div>
        </div>
      </Container>

      <Container className="About-Container mb-5">
        <Row>
          <Col>
            <div className="lottie">
              <Lottie options={networkLottie} height={500} width={500} />
            </div>
          </Col>
          <Col>
            <div className="about-us">
              <h1>About AFFILE</h1>
              <h3 className="mt-4">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod tempor
              </h3>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut <br />
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco <br />
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in <br />
                reprehenderit in voluptate velit esse cillum .
              </p>
            </div>
            <div>
              <button className="button-3 mt-3">Hire Us</button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* <Container className="achievement mt-5 text-center">
        Acheivement
      </Container> */}

      <Footer />
    </>
  );
}

export default Home;
