import React from "react";
import { mount } from "enzyme";

import Property from "./property.component";

const MOCK_PROPERTY = {
	owner: "Sherlock Holmes",
	address: {
		line1: "221B",
		line4: "Baker Street",
		postCode: "NW1 6XE",
		city: "London",
		country: "U.K."
	},
	isServicing: true
}

describe("PropertySpecs", () => {
	it("renders with the data given", () => {
		const wrapper = mount(<Property details={MOCK_PROPERTY} />);
		expect(wrapper.prop("details")).toEqual(MOCK_PROPERTY);
	});
})