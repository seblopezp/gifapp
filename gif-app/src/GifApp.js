import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifList } from "./components/GifList";

export const GifApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <div>
      <h1 className="title">Gif App</h1>
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
