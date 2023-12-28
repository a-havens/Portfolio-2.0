import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hey there folks, I'm <span className= "blue">Amanda Havens</span>
            , hailing from <span className= "blue"> Independence, KY.</span>
            <br />
            <br />
            Right now, I'm knee-deep in a software engineering bootcamp through Thinkful. 
            I've knocked out the fundamentals, dabbled in frontend and backend work, and currently, 
            I'm diving headfirst into data algorithms. 
            Mark your calendars because I'm set to wrap this up by February 2024!
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing video/board games.
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading sci/fi fantasy novels.
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking for my friends and family.
            </li>
            <li className="about-activity">
              <ImPointRight /> taking care of all my adorable pets!
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
