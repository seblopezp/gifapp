import React, { useState, useEffect } from "react";
import { GridListItem } from "./GridListItem";

export const GifList = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}&limit=10&api_key=SDeQeaPOdOnwKdDpTgEPYCzBE99meXqa`;

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    setImages(gifs);
  };

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((img) => (
          <GridListItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
