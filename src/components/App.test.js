import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/react/cleanup-after-each";
import { render, fireEvent } from "@testing-library/react";

import testData from "../testData.json";
import wait from "waait";

import App from "./App";
import { fetchImages } from "../api/index.js";

jest.mock("../api/index.js", () => ({
  fetchImages: jest.fn()
}));

const changeInput = (value, input) => {
   fireEvent.change(input, {
    target: { value }
  });
} 

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("should fire fetchImages once per 500ms", async () => {
  fetchImages.mockReturnValue(Promise.resolve(testData));

  const { getByPlaceholderText } = render(<App />);
  const input = getByPlaceholderText(/Enter tags to search/i)
  changeInput('s', input);
  changeInput('sum', input);
  changeInput('summer', input);

  await wait(520);

  expect(fetchImages).toHaveBeenCalledTimes(1);
});

test("should render card for each image", async () => {
  fetchImages.mockReturnValue(Promise.resolve(testData));

  const { getByPlaceholderText, container } = render(<App />);
  const input = getByPlaceholderText(/Enter tags to search/i)
  changeInput('summer', input);

  await wait(520);

  const allCards = container.querySelectorAll("div .card");
  expect(allCards.length).toEqual(testData.items.length);
});