import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className= "blue">Amanda Havens </span>
            from <span className= "blue"> Independence, KY.</span>
            <br />
            I am currently enrolled in a software engineer bootcamp provided by Thinkful.
            <br />
            I have completed my fundementals, frontend, and backend sections, and currently
            working on data algorithms. My expected completion date is February 6th, 2024.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games.
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading sci/fi fantasy novels.
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Software and cathedrals are much the same - first we build them, then we pray."{" "}
          </p>
          <footer className="blockquote-footer">Sam Redwine</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
