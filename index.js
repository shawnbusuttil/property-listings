const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "property-listings-app/public")));

app.get("/api/listings", (req, res) => {
    const data = fs.readFileSync("./assets/listings.json", "utf-8");
    res.send(data);
});

app.get("/*", (req, res) => {
    res.redirect("/");
});

app.listen(process.env.PORT || 8080);