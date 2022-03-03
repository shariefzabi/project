const express = require("express");
const Animal = require("../locationPoductDetails/marketingDetailsSchema.js");
const animalAPI = express();

animalAPI.get("/get-animal/:animalID", function (req, res) {
  const locationdetails = req.app.get("locationdetails");
  locationdetails.findOne({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      if ("locationDetails" in result) {
        console.log("Animal details are available and can be fetched!");

        data = {
          price: result.locationDetails.cattleMarket.price,
          breed: result.locationDetails.cattleMarket.breed,
          animalId: result.locationDetails.cattleMarket.animalId,
          weight: result.locationDetails.cattleMarket.weight,
        };
        console.log(data);
        res.status(200).send({
          message: "Animal data fetched successfully!!",
          payload: data,
        });
      } else {
        res
          .status(200)
          .send({ message: "Animal does not exists with this animal ID!" });
        // console.log("Animal does not exists with this animal ID!");
      }
    }
  });
});
animalAPI.use((err, req, res, next) => {
  res.send({ message: err.message });
});

module.exports = animalAPI;
