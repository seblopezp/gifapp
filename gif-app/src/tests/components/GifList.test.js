import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { GifList } from "../../components/GifList";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");
describe("Pruebas en <GridList />", () => {
  const category = "Hola mundo";
  test("Debe mostrarse correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifList category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe de mostrar items cuando se cargan imágenes", () => {
    const gifs = [
      {
        id: "123",
        url: "https://localhost:8080",
        title: "Hola mundo",
      },
      {
        id: "1234",
        url: "https://localhost:8080",
        title: "Hola mundo",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifList category={category} />);
    //expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GridListItem").length).toBe(gifs.length);
  });
});
