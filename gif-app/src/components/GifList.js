import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GridListItem } from "./GridListItem";
import PropTypes from "prop-types";
export const GifList = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}
      <div className="card-grid">
        {images.map((img) => (
          <GridListItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

GifList.propTypes = {
  category: PropTypes.string.isRequired,
};
