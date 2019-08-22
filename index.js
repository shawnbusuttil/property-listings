const fs = require("fs");
const path = require("path");
const cors = require("cors");
const express = require("express");

const location = require("./location.utils");

const app = express();

app.use(express.static(path.join(__dirname, "property-listings-app/public")));

app.get("/api/listings", cors(), async (req, res) => {
    const listings = JSON.parse(fs.readFileSync("./assets/listings.json", "utf-8"));

    const properties = await Promise.all(listings.map(async item => {
        const geolocation = await location.getLocationData(item.address.postCode, item.address.city);

        const property = {
            ...item,
            geolocation,
            isServicing: location.isServicing(geolocation)
        }

        return property;
    }));

    res.send(properties);
});

app.get("/*", (req, res) => {
    res.redirect("/");
});

app.listen(process.env.PORT || 8080);