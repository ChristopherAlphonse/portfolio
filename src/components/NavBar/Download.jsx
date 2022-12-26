import { Link } from "react-router-dom";
import React from "react";
import { Resume } from "../../assets";

const Download = () => {
  return (
    <div>
      <Link to={Resume} target="_blank">
        Resume
      </Link>
    </div>
  );
};

export default Download;
