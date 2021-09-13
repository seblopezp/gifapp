import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifList } from "./components/GifList";

export const GifApp = () => {
  const [categories, setCategories] = useState(["Hunter x hunter"]);

  return (
    <div>
      <h2>Gif app</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifList key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};
