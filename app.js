const express = require("express");

const app = express();
const bodyparser = require("body-parser");

const port = process.env.PORT || 3200;
const orders = ["cona"];

const request = require('request');
const appId = "&appid=00f15b895b890a78c52bde8b3b59ea67";
const url = "api.openweathermap.org/data/2.5/weather?q=";
var cityId;

function getCityData(cityName){
//  request('https://'+ url + cityName + appId, { json: true }, (err, res, body) => {
  var options = {
    url: "https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&units=metric"+ appId,
};
    return new Promise(function(resolve, reject) {
      // Do async job
         request.get(options, function(err, resp, body) {
             if (err) {
                 reject(err);
             } else {
                 resolve(JSON.parse(body));
             }
         })
     });
    }

// middleware
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));



app.get("/get_orders", (req, res) => {
  const cityName= req.query.q;
  var initializePromise = getCityData(cityName);
  initializePromise.then(function(result) {
      userDetails = result;
      res.status(200).send([userDetails]);
  }, function(err) {
      console.log(err);
  })
});

app.listen(port, () => {
  console.log(`running at port ${port}`);
});