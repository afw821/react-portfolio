import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const aboutCard = () => {
    return (<MDBCol style={{ maxWidth: "42rem" }}>
        <MDBCard>
            <MDBCardImage style={{ width: "100%" }} className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                waves />
            <MDBCardBody>
                <MDBCardTitle>About Me</MDBCardTitle>
                <MDBCardText style={{ fontWeight: "bolder" }}>I've been developing software for 2 years. I attended Georgia Tech's full stack coding bootcamp in 2018.
                After graduating I was hired by Young Consulting and have been working as a full stack .NET MVC Developer.
                I specialize in Full Stack JavaScript development, Node.js, React, MySQL, MongoDB, C#, ASP.NET, Git, Azure.
                Im my spare time I enjoy working out and watching Atlanta Braves Baseball.
                    </MDBCardText>

            </MDBCardBody>
        </MDBCard>
    </MDBCol>);
}

export default aboutCard;
