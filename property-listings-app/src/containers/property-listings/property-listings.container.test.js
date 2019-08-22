import React from "react";
import { shallow } from "enzyme";

import mockAxios from "axios";

import PropertyListings from "./property-listings.container";
import Property from "../../components/property/property.component";

const MOCK_SHALLOW_PROPERTIES = [
	{
		airbnbId: "property1"
	}, 
	{
		airbnbId: "property2"
	}, 
	{
		airbnbId: "property3"
	}
];

describe("PropertyListingsSpecs", () => {
	beforeEach(() => {
		mockAxios.get.mockImplementation(() => Promise.resolve( { data: MOCK_SHALLOW_PROPERTIES }));
	});
	
	it("should fetch properties from server", done => {
		const wrapper = shallow(<PropertyListings />);
		
		setTimeout(() => {
			wrapper.update();
	
			const state = wrapper.instance().state;

			expect(mockAxios.get).toHaveBeenCalledTimes(1);
			expect(state.properties).toEqual(MOCK_SHALLOW_PROPERTIES);
	
			done();
		});
	});

	it("should render the correct number of properties", () => {
		const wrapper = shallow(<PropertyListings />);
		
		setTimeout(() => {
			wrapper.update();
			expect(wrapper.find(Property).length).toEqual(MOCK_SHALLOW_PROPERTIES.length);
	
			done();
		});
	});
});
