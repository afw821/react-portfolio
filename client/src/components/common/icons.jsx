import React from "react";

const icons = () => {
  return (
    <div className="d-flex justify-content-center mt-3">
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
  );
};

export default icons;
