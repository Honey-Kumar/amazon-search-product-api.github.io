const express = require("express");
const request = require("request-promise");
const PORT = process.env.PORT || 5000;
// const api_key = "2d97bdd8941c03a712a6f822bd87ef02";
// const generateapikey(api_key) = `http://api.scraperapi.com?api_key=${api_key}&autoparse=true`;
const generateapikey = (api_key) =>
  `http://api.scraperapi.com?api_key=${api_key}&autoparse=true`;
const app = express();
app.get("/", (req, res) => {
  res.send("<center><h1>Welcome to Scrapper Flipkart API</h1></center>");
});
app.get("/product/:productId", async (req, res) => {
  const { productId } = req.params;
  const { api_key } = req.query;
  try {
    const response = await request(
      `${generateapikey(api_key)}&url=https://www.amazon.in/dp/${productId}`
    );
    res.json(JSON.parse(response));
  } catch (error) {
    res.send(error);
  }
});

app.get("/product/:productId/review", async (req, res) => {
  const { productId } = req.params;
  const { api_key } = req.query;
  try {
    const response = await request(
      `${generateapikey(
        api_key
      )}&url=https://www.amazon.in/product-reviews/${productId}`
    );
    res.json(JSON.parse(response));
  } catch (error) {
    res.send(error);
  }
});

app.get("/product/:productId/offers", async (req, res) => {
  const { productId } = req.params;
  const { api_key } = req.query;
  try {
    const response = await request(
      `${generateapikey(
        api_key
      )}&url=https://www.amazon.in/gp/offer-listing/${productId}`
    );
    res.json(JSON.parse(response));
  } catch (error) {
    res.send(error);
  }
});

app.get("/search/:searchquerry", async (req, res) => {
  const { searchquerry } = req.params;
  const { api_key } = req.query;
  try {
    const response = await request(
      `${generateapikey(api_key)}&url=https://www.amazon.in/s?k=${searchquerry}`
    );
    res.json(JSON.parse(response));
  } catch (error) {
    res.send(error);
  }
});

app.get("/category/:categoryquerry", async (req, res) => {
  const { categoryquerry } = req.params;
  const { api_key } = req.query;
  try {
    const response = await request(
      `${generateapikey(api_key)}&url=https://www.amazon.in/${categoryquerry}`
    );
    res.json(JSON.parse(response));
  } catch (error) {
    res.send(error);
  }
});

app.listen(PORT, () => console.log(`server is running on the port ${PORT}`));
