import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";
import "@testing-library/jest-dom";
import React from "react";

describe("Pruebas en <AddCategory />", () => {
  const setCategories = jest.fn();

  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";
    input.simulate("change", { target: { value } });
  });

  test("No debe de postear la información con el submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });
});
