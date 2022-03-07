module.exports.midw1 = function (req, res, next) {
    //pre processing are
    //  here we can interrup req object
    console.log("preprocessing of middleware1");
    next()
    // post processing 
    // here we can interrup res object
    console.log("postprocessing of middleware1");
}