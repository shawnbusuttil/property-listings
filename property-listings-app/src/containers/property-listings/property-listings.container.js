import React, { Component } from "react";

import { httpClient } from "../../axios";
import Property from "../../components/property/property.component";
import Spinner from "../../components/spinner/spinner.component";

import "./property-listings.container.scss";

class PropertyListings extends Component {
	state = {
		isBusy: false,
		properties: null
	};

	async componentDidMount() {
		this.setState({ isBusy: true });
		try {
			const results = await httpClient.get("/api/listings");
			this.setState({ properties: results.data, isBusy: false });
		}
		catch (e) {
			this.setState({ isBusy: false });
		}
	}

	render() {
		let view = this.state.isBusy ? <Spinner /> : <p className="property-listings-content">Properties could not be loaded.</p>;

		if (this.state.properties) {
			if (this.state.properties.length === 0) {
				view = <p className="property-listings-content">No properties listed.</p>;
			}
			else {
				view = (this.state.properties.map(property =>
					<Property key={property.airbnbId} details={property} />));
			}
		}

		return <div className="property-listings">
			<h1>Property Listings</h1>
			{view}
		</div>;
	}
}

export default PropertyListings;