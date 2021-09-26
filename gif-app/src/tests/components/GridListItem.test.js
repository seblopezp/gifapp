import React from "react";
import { shallow } from "enzyme";
import { GridListItem } from "../../components/GridListItem";
const title = "Un titulo";
const url = "https://localhost/algo.jpg";
const wrapper = shallow(<GridListItem title={title} url={url} />);

describe("Pruebas en GridItem", () => {
  test("Debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener un parrafo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("Debe ser una imagen, ser igual a la url y tener tener alt", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("Debe de tener animate_fadeIn", () => {
    const div = wrapper.find("div");
    const className = div.prop("className");
    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
