import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import App from "./App";
import PropertyListings from "./containers/property-listings/property-listings.container";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("contains property listings", () => {
  const wrapper = shallow(<App />);
  const propertyListings = <PropertyListings />;
  expect(wrapper.contains(propertyListings)).toEqual(true);
});
