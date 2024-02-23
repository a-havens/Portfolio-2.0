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
            <p>I completed my software engineering bootcamp through Thinkful February of 2024.
            </p> 
            <p>On the front-end, I wield a strong understanding of HTML, CSS, and JavaScript, crafting user interfaces 
              that seamlessly blend aesthetics with functionality. My expertise extends to popular frameworks 
              like React, allowing me to build dynamic and responsive web applications that provide a delightful 
              user experience.
            </p>
            <p>Delving into the back-end, I am well-versed in server-side languages such as Node.js, enabling me 
              to architect robust and scalable back-end systems. My proficiency extends to database management, 
              with hands-on experience in SQL databases like elephantSQL, PostgreSQL, and more.
            </p>
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
              <GiSittingDog /> <GiCat /> Taking care of all my adorable pets!
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
