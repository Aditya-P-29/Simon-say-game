import binarySearch from "./binary-search.js";

describe("Binary Search Algorithm", () => {
  test("should find the key when it exists in the array", () => {
    const arr = [1, 2, 3, 4, 5, 7, 8, 9];
    const key = 5;
    expect(binarySearch(arr, key)).toBe(4);
  });

  test("should return -1 when the key is missing from the array", () => {
    const arr = [2, 4, 6, 8, 10];
    const key = 99;
    expect(binarySearch(arr, key)).toBe(-1);
  });


  test("should correctly find the element at the last index", () => {
    const arr = [1, 2, 3, 4, 6, 7, 8, 9, 10];
    const key = 10;
    expect(binarySearch(arr, key)).toBe(8);
  });
});
 