import React from "react";
import { Link } from "react-router-dom";
import { MDBBtn, MDBIcon } from "mdbreact";

const button = ({
  icon,
  to,
  handleSetActiveTab,
  color,
  btnText,
  activeTab,
}) => {
  return (
    <Link to={to} onClick={() => handleSetActiveTab(activeTab)}>
      <MDBBtn color={color} className="waves-effect">
        {btnText} <MDBIcon icon={icon} />
      </MDBBtn>
    </Link>
  );
};

export default button;
