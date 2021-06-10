import { getAllFilms, getFilmsFromSearch } from "./movies.service";

describe("testing film retrieval", () => {
  it("getAllFilms returns all films", async () => {
    const result = await getAllFilms();
    expect(result.length).toEqual(20);
  });
  it("keyword search returns valid results", async () => {
    const result = await getFilmsFromSearch("bat");
    expect(result[0].title).toEqual("Batman Begins");
  });
  it("keyword search returns empty list with invalid keyword", async () => {
    const result = await getFilmsFromSearch("aerihbv");
    expect(result).toEqual([]);
  });
});

export {};
