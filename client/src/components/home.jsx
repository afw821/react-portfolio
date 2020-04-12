import React from "react";
import JumboTron from "./common/jumbotron";
import Resume from "../assests/Resume.pdf";

const Home = () => {
  const text = {
    message: "Welcome to My Portfolio website",
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
      <p>
        This website was created utilizing MongoDB, Express.js, React.js and
        Node.js. Other technologies that I used to create this site include
        Bcrypt, JSON Web Token
      </p>
    </>
  );
};

export default Home;
