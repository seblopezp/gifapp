import React from "react";
import PropTypes from "prop-types";
export const GridListItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <p className="subtitle is-6">{title}</p>
    </div>
  );
};
GridListItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
