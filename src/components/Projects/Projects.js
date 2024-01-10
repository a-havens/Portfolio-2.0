import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import recipeTrackerImage from "../../Assets/Projects/recipetracker.png";
import flashcardAppImage from "../../Assets/Projects/flashcard-app.png";
import decoderImage from "../../Assets/Projects/decoderRing.png";
import moviesImage from "../../Assets/Projects/welovemovies.png";

function Projects() {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className= "blue">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath= {recipeTrackerImage}
                isBlog={false}
                title="Recipe Tracker"
                description="Personal tracker app that allows users to collect, archive, and organize recipes."
                ghLink="https://github.com/a-havens/recipe-tracker"
                demoLink="https://recipe-tracker-7nmd.onrender.com/"
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath= {flashcardAppImage}
                isBlog={false}
                title="Flashcard App"
                description="Personal app that allows users to create flashcards to study and organize them by Decks."
                ghLink="https://github.com/a-havens/flashcard-app"
                demoLink="https://flashcard-app-qmto.onrender.com/"
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath= {moviesImage}
                isBlog={false}
                title="WeLoveMovies"
                description="Application that will show movies playing in theaters, and provides synopsis, runtime, and reviews."
                ghLink="https://github.com/a-havens/WeLoveMovies_backend"
                demoLink="https://welovemovies-frontend-mcnr.onrender.com/"
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath= {decoderImage}
                isBlog={false}
                title="Decoder Ring"
                description="Application that will either encode or decode a string using a variety of ciphers."
                ghLink="https://github.com/a-havens/decoder-ring"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
  
  export default Projects;
