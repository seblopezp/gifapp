import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GridListItem } from "../components/GridListItem";
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
