import React from "react";
import Card from "react-bootstrap/Card";
import { 
  GiBookCover, 
  GiConsoleController,
  GiCook,
  GiSittingDog,
  GiCat,
} from "react-icons/gi";

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
            Right now, I'm on the tail-end of my software engineering bootcamp through Thinkful. 
            I've knocked out the fundamentals, worked in frontend and backend development, and currently, 
            I'm diving headfirst into data algorithms. 
            I'm set to earn my certificate by February 2024!
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <GiConsoleController /> Playing video/board games.
            </li>
            <li className="about-activity">
              <GiBookCover /> Reading sci/fi fantasy novels.
            </li>
            <li className="about-activity">
              <GiCook /> Cooking for my friends and family.
            </li>
            <li className="about-activity">
              <GiSittingDog /> <GiCat /> taking care of all my adorable pets!
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
