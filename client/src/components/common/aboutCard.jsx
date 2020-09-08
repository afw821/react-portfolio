import React from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
} from "mdbreact";
import { Link } from "react-router-dom";
import Icons from "./icons";
import TechIcon from "./techIcons";
import Button from "./button";

const aboutCard = ({
  activeTab,
  handleSetActiveTab,
  clientWidth,
  aboutCardText,
  aboutCardTitle,
}) => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center">
            <MDBCardTitle className="card-title h4 pb-2">
              <strong>About Me</strong>
            </MDBCardTitle>

            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
              className="img-fluid"
            />
            <MDBCardBody>
              <MDBCardTitle className="indigo-text h5 m-4">
                {aboutCardTitle}
              </MDBCardTitle>
              <MDBCardText>{aboutCardText}</MDBCardText>
              <MDBCardTitle className="indigo-text h5 m-4">
                Technologies I Use
              </MDBCardTitle>
              <MDBCardText>
                <div
                  className={`row ${
                    clientWidth < 768 ? "d-flex justify-content-center" : ""
                  }`}
                >
                  <div
                    className={`${
                      clientWidth > 767 ? "col" : "col-6"
                    } d-flex justify-content-center`}
                  >
                    <TechIcon icon="react" text="React.js" isFab={true} />
                    <TechIcon icon="js-square" text="JavaScript" isFab={true} />
                    <TechIcon icon="node" text="Node.js" isFab={true} />
                    <TechIcon icon="database" text="MySQL" isFab={false} />
                    <TechIcon icon="microsoft" text="C# .NET" isFab={true} />

                    {clientWidth < 768 ? ( //row gets too small hide these and render them in the row below
                      ""
                    ) : (
                      <>
                        <TechIcon icon="git-alt" text="Git" isFab={true} />
                        <TechIcon
                          icon="bootstrap"
                          text="Bootstrap"
                          isFab={true}
                        />
                        <TechIcon icon="css3-alt" text="css" isFab={true} />
                        <TechIcon
                          icon="npm"
                          text="Node Package Manager"
                          isFab={true}
                        />
                      </>
                    )}
                  </div>
                </div>

                {clientWidth > 767 ? (
                  ""
                ) : (
                  <div className="row d-flex justify-content-center">
                    <div className="col d-flex justify-content-center">
                      <>
                        <TechIcon icon="git-alt" text="Git" isFab={true} />
                        <TechIcon
                          icon="bootstrap"
                          text="Bootstrap"
                          isFab={true}
                        />
                        <TechIcon icon="css3-alt" text="css" isFab={true} />
                        <TechIcon
                          icon="npm"
                          text="Node Package Manager"
                          isFab={true}
                        />
                      </>
                    </div>
                  </div>
                )}
              </MDBCardText>
              <hr className="my-4" />
              <div className="pt-2">
                <Button
                  icon="code"
                  to="/projects"
                  handleSetActiveTab={handleSetActiveTab}
                  color="primary"
                  btnText="Projects"
                  activeTab="Projects"
                />
                <Button
                  icon="envelope"
                  to="/contact"
                  handleSetActiveTab={handleSetActiveTab}
                  color="primary"
                  btnText="Contact"
                  activeTab="Contact"
                />
              </div>

              <MDBCol className="d-flex justify-content-center mt-4" md="12">
                <MDBCol md="3" className="d-flex justify-content-around">
                  <Icons />
                </MDBCol>
              </MDBCol>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default aboutCard;
