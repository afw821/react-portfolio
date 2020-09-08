import React from "react";
import AboutCard from "./common/aboutCard";

const About = ({ activeTab, handleSetActiveTab, clientWidth }) => {
  const aboutCardText = `I've been developing software for 2 years. I attended Georgia
  Tech's full stack coding bootcamp in 2018. After graduating I
  was hired by Young Consulting and have been working as a full
  stack .NET MVC Developer. I specialize in Full Stack JavaScript
  development, Node.js, React, MySQL, MongoDB, C#, ASP.NET, Git,
  Azure. Im my spare time I enjoy working out and watching Atlanta
  Braves Baseball and exploring the Smoky Mountains.`;

  const aboutCardTitle = "Full-Stack Software Developer at Young Consulting";

  return (
    <AboutCard
      activeTab={activeTab}
      handleSetActiveTab={handleSetActiveTab}
      clientWidth={clientWidth}
      aboutCardText={aboutCardText}
      aboutCardTitle={aboutCardTitle}
    />
  );
};

export default About;
