import { getGifs } from "../../helpers/getGifs";

describe("Pruebas con getGifs", () => {
  test("Debe de traer 10 elementos", async () => {
    const gifs = await getGifs("Spacex");
    expect(gifs.length).toBe(10);
  });
});
