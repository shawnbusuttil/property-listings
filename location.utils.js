const axios = require("axios");

const API_KEY = "AIzaSyDzLu0ZzJHCRPYrFDStPAGFikmcmM5Zj_k";

const SERVICE_AREA = {
	radius: 20000,
	latitude: 51.5073835,
	longitude: -0.1277801
};

geocodeClient = axios.create({
	baseURL: "https://maps.googleapis.com/maps/api"
});

getLocationData = async (postCode, city) => {
	const encodedAddress = `${postCode.replace(" ", "+")},${city}`;

	try {
		const geolocation = await geocodeClient.get(`/geocode/json?address=${encodedAddress}&key=${API_KEY}`);
		const location = geolocation.data.results[0].geometry.location;
		return {
			latitude: location.lat,
			longitude: location.lng
		};
	}
	catch(e) {
		console.log(e);
	}
},

isServicing = (geolocation, serviceArea = SERVICE_AREA) => {
	return Math.pow(geolocation.latitude - serviceArea.latitude, 2)
		+ Math.pow(geolocation.longitude - serviceArea.longitude, 2)
		< Math.pow(serviceArea.radius, 2);
}

module.exports = {
	getLocationData,
	isServicing
};