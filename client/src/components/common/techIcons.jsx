import React from "react";
import { MDBIcon } from "mdbreact";

const techIcon = ({ icon, text, isFab }) => {
  return (
    <div className="d-flex flex-column">
      {isFab ? (
        <MDBIcon
          className="mr-3 ml-3"
          style={{ fontSize: "3rem" }}
          fab
          icon={icon}
        />
      ) : (
        <MDBIcon
          className="mr-3 ml-3"
          style={{ fontSize: "3rem" }}
          icon={icon}
        />
      )}

      <small>{text}</small>
    </div>
  );
};

export default techIcon;
