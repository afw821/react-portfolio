import React from "react";
import JumboTron from "./common/jumbotron";
import Resume from "../assests/Resume.pdf";
import PortfolioPic from "../assests/wedding2.jpg";
const Home = () => {
  const text = {
    message: "Welcome to My Portfolio Website",
    description:
      "Below are links to download my resume, navigate to my GitHub and my LinkedIn pages",
  };

  const icons = true;
  return (
    <>
      <JumboTron
        message={text.message}
        resume={Resume}
        description={text.description}
        icons={icons}
      />
      <div className="row">
        <div className="col d-flex justify-content-center">
          <div className="card card-cascade wider form-width card-mb">
            <div className="view view-cascade overlay">
              <img
                className="card-img-top"
                src={PortfolioPic}
                alt="Card image cap"
              />
              <a href="#!">
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>

            <div className="card-body card-body-cascade text-center">
              <h4 className="card-title">
                <strong>Alex Watkins</strong>
              </h4>

              <h5 className="blue-text pb-2">
                <strong>Full-Stack Software Developer</strong>
              </h5>

              <p className="card-text">
                Former U.S. Marine and Software Developer at Young Consulting
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
