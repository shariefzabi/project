// const Order = require('./orderdetailsSchema');


// const getMaxId = (idObjsList)=>{
//     var idsList = idObjsList.map(ido => ido.orderId);
//     if (idsList.length === 0) return 0;
//     return Math.max(...idsList);
// }

// exports.addOrder = function(req, res){
//     let { body, params, query } = req;
//     console.log("body: ", body);
//   let orderDocument = body;
  
//   try {
//     Emp.find().select({ orderId: 1, _id: 0 })
//       .sort({ orderId: -1 }).limit(1)
//       .exec(function (err, result) {
//         let maxId = getMaxId(result);
//         orderDocument.orderId = maxId + 1;
//         const order = new Order(orderDocument);
//         order.save(function (err, result) {
//           if (err) {
//             // throw err;
//             console.log(err);
//             return res.status(400).send(err);
//           }
//           console.log(result);
//           return res.send(order);
//         });
//     })
//   } catch (err) {
//     return res.status(500).send(err.toString());
//   }
// }