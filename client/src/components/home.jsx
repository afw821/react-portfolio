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
  return (
    <>
      <JumboTron
        message={text.message}
        resume={Resume}
        description={text.description}
      />
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <div className="card card-cascade wider">
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
                <strong>Software Developer</strong>
              </h5>

              <p className="card-text">
                Former U.S. Marine and Software Developer at Young Consulting
              </p>

              <a
                className="px-2 fa-lg li-ic"
                href="https://www.linkedin.com/in/alex-watkins-b1a52182/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                className="px-2 fa-lg tw-ic"
                href="https://github.com/afw821"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                className="px-2 fa-lg fb-ic"
                href="https://www.facebook.com/profile.php?id=7021411"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
