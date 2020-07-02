import * as functions from "firebase-functions";

export const helloWorld2 = functions.https.onRequest((request, response) => {
  response.send("Hello 2 Firebase!");
});
export const helloWorld3 = functions.https.onRequest((request, response) => {
  response.send("Hello 3 Firebase!");
});
