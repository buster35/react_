import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import badge from "../../assets/FSF-badge.png"

const MainBody = React.forwardRef(
  ({ gradient, title, message, message2, icons }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          backgroundImage: "linear-gradient( 136deg, #4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1 )",
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div></div>
        <Container className="text-center">
          <h1 ref={ref} className="display-1">
            {title}
          </h1>
          
            <div className="lead typist">
              {message}
              <br/>
              {message2}
            </div>
          
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
          </div>
          <div className="badge">
            <a target="_blank" rel="noopener noreferrer" href="https://www.credly.com/badges/59fa3498-9012-42db-bd50-e8e7fa2cf684/public_url">
              <img src={badge} alt="university of minnesota web dev badge" style={{width: "120px", height: "auto"}}/>
            </a>
          </div>
          <br />
            Scroll for more
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
