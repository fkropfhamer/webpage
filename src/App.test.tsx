import { shallow } from "enzyme";
import React from "react";
import App from "./App";
import Footer from "./Footer";
import Header from "./Header";
import Welcome from "./Welcome";

it("renders correct", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Header />)).toBe(true);
  expect(wrapper.contains(<Welcome />)).toBe(true);
  expect(wrapper.contains(<Footer />)).toBe(true);
});
