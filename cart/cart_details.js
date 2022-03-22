const express = require("express");
const Animal = require("../locationPoductDetails/marketingDetailsSchema");
const expressAsyncHandler = require("express-async-handler");
const router = express.Router();
// const animalAPI = express();

router.get(
  "/get-animal/:locationName/:animalId",
  expressAsyncHandler(async (req, res) => {
    console.log(res);
    let locationName = req.params.locationName;
    let animalId = req.params.animalId;
    console.log(animalId);
    let locationdbs = await Animal.findOne({ locationName: locationName });
    //   console.log(locationdbs);
    if (locationdbs == null) {
      res
        .status(200)
        .send({ message: "location does not exist with this location name" });
    } else {
      let animalData = locationdbs.cattleMarkets.find(
        (animal) => animal.animalId == animalId
      );
      if (animalData == null) {
        res.status(200).send({
          message: "Animal data doesn't exist with this animal Id!!",
        });
      } else {
        data = {
          price: animalData.price,
          animalId: animalData.animalId,
          weight: animalData.weight,
        };
        res.status(200).send({
          message: "Animal data fetched successfully!!",
          payload: data,
        });
        console.log(animalData);
      }
    }
  })
);

// animalAPI.get("/get-animal/:locationName", function (req, res) {
//   let locationName = req.params.locationName;
//   console.log(locationName);
//   //   let animalId = req.params.animalId;
//   //   const locationdbs = req.app.get("locationdbs");
//   //   console.log(locationdbs);
//   Animal.findOne({ locationName: locationName }),
//     function (err, result) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(result);
//         if ("cattleMarkets" in result) {
//           console.log("Animal details are available and can be fetched!");
//           console.log(result);
//           //   console.log(locationdbs);

//           data = {
//             price: result.cattleMarket.price,
//             //   breed: result.locationDetails.cattleMarket.breed,
//             //   animalId: result.locationDetails.cattleMarket.animalId,
//             //   weight: result.locationDetails.cattleMarket.weight,
//           };
//           console.log(data);
//           res.status(200).send({
//             message: "Animal data fetched successfully!!",
//             payload: data,
//           });
//         } else {
//           res
//             .status(200)
//             .send({ message: "Animal does not exists with this animal ID!" });
//           // console.log("Animal does not exists with this animal ID!");
//         }
//       }
//     };
// });
router.use((err, req, res, next) => {
  res.send({ message: err.message });
});

module.exports = router;
