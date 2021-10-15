import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { GifApp } from "../GifApp";
const wrapper = shallow(<GifApp />);
describe("Pruebas en <GifApp />", () => {
  test("Debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar lista de categorias", () => {
    const categories = ["Studio Ghibli", "Jujutsu Kaisen"];
    const wrapper = shallow(<GifApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifList").length).toBe(categories.length);
  });
});
