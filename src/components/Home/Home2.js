import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className= "blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hey there! My journey through different career paths has been quite a ride! 
              I started out in the culinary world, picking up skills that I still carry with me today. 
              But, I soon realized that it wasn't my true calling.
              <br />
              <br />
              So, I switched gears and ventured into the world of banking. Spent about six years there, 
              moving from a support role to crunching numbers as a data analyst. 
              I found a real passion for diving into data and turning it into compelling presentations. 
              But eventually, I felt like I hit a ceiling and that's when my interest in coding took off.
              <br />
              <br />
              I was lucky enough to join a coding program, and that's when I finally discovered my true passion!
              <br />
              <br />
              Now, I'm proficient in fundamental languages like <i><b className="blue">Javascript, HTML, and CSS</b></i>. 
              I'm currently focused on diving deeper into <i><b className="blue">React</b></i> to expand my skills further in this field.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className>connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/a-havens"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/amanda-havens/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
