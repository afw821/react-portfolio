import React from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCardTitle,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
  MDBBtn,
} from "mdbreact";

const aboutCard = () => {
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
                Full-Stack Software Developer at Young Consulting
              </MDBCardTitle>
              <MDBCardText>
                I've been developing software for 2 years. I attended Georgia
                Tech's full stack coding bootcamp in 2018. After graduating I
                was hired by Young Consulting and have been working as a full
                stack .NET MVC Developer. I specialize in Full Stack JavaScript
                development, Node.js, React, MySQL, MongoDB, C#, ASP.NET, Git,
                Azure. Im my spare time I enjoy working out and watching Atlanta
                Braves Baseball and exploring the Smoky Mountains.
              </MDBCardText>
              <MDBCardTitle className="indigo-text h5 m-4">
                Technologies I Use
              </MDBCardTitle>
              <MDBCardText>
                <div className="row">
                  <div className="col d-flex justify-content-center">
                    <div className="d-flex flex-column">
                      <MDBIcon
                        className="mr-3 ml-3"
                        style={{ fontSize: "3rem" }}
                        fab
                        icon="react"
                      />
                      <small>React.js</small>
                    </div>
                    <div className="d-flex flex-column">
                      <MDBIcon
                        className="mr-3 ml-3"
                        style={{ fontSize: "3rem" }}
                        fab
                        icon="js-square"
                      />
                      <small>JavaScript</small>
                    </div>
                    <div className="d-flex flex-column">
                      <MDBIcon
                        className="mr-3 ml-3"
                        style={{ fontSize: "3rem" }}
                        fab
                        icon="node"
                      />
                      <small>Node.js</small>
                    </div>
                    <div className="d-flex flex-column">
                      <MDBIcon
                        className="mr-3 ml-3"
                        style={{ fontSize: "3rem" }}
                        icon="database"
                      />
                      <small>MySQL</small>
                    </div>
                    <div className="d-flex flex-column">
                      <MDBIcon
                        className="mr-3 ml-3"
                        style={{ fontSize: "3rem" }}
                        fab
                        icon="git-alt"
                      />
                      <small>Git</small>
                    </div>
                    <div className="d-flex flex-row">
                      <MDBIcon className="mr-1" style={{ fontSize: "3rem" }}>
                        C
                      </MDBIcon>
                      <MDBIcon
                        className="mr-3"
                        style={{ fontSize: "2rem" }}
                        icon="hashtag"
                      />
                    </div>

                    <div className="d-flex flex-column">
                      <MDBIcon
                        className="mr-3 ml-3"
                        style={{ fontSize: "3rem" }}
                        fab
                        icon="bootstrap"
                      />

                      <small>Bootstrap</small>
                    </div>
                    <div className="d-flex flex-column">
                      <MDBIcon
                        className="mr-3 ml-3"
                        style={{ fontSize: "3rem" }}
                        fab
                        icon="css3-alt"
                      />
                      <small>css</small>
                    </div>
                    <div className="d-flex flex-column">
                      <MDBIcon
                        className="ml-3"
                        style={{ fontSize: "2rem" }}
                        fab
                        icon="npm"
                      />
                      <small>node package manager</small>
                    </div>
                  </div>
                </div>
              </MDBCardText>
              <hr className="my-4" />
              <div className="pt-2">
                <MDBBtn color="primary" className="waves-effect">
                  Projects <MDBIcon icon="code" />
                </MDBBtn>
                <MDBBtn outline color="primary" className="waves-effect">
                  Contact <MDBIcon icon="envelope" />
                </MDBBtn>
              </div>

              <MDBCol className="d-flex justify-content-center mt-4" md="12">
                <MDBCol md="3" className="d-flex justify-content-around">
                  <a
                    href="https://www.linkedin.com/in/alex-watkins-b1a52182/"
                    target="_blank"
                  >
                    <MDBIcon
                      fab
                      icon="linkedin-in"
                      className="grey-text"
                      size="lg"
                    />
                  </a>
                  <a href="https://github.com/afw821" target="_blank">
                    <MDBIcon
                      fab
                      icon="github"
                      className="grey-text"
                      size="lg"
                    />
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=7021411"
                    target="_blank"
                  >
                    <MDBIcon
                      fab
                      icon="facebook-f"
                      className="grey-text"
                      size="lg"
                    />
                  </a>
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
