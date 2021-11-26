const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51JjToBSAz6mTYX28O1kpkjh1DYXAjZ3rCvtCiToHKESmT4QcT1eWPWFNbJ6FO64zSFUBGQ2KWyqd7HdIMtoRq2KQ00LpZealBy"
);

// API

// App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request recieved! for this amount:", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  //   Ok created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// -Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-9b18d/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
