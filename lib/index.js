"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
exports.helloWorld2 = functions.https.onRequest((request, response) => {
  response.send("Hello 2 Firebase!");
});
exports.helloWorld3 = functions.https.onRequest((request, response) => {
  response.send("Hello 3 Firebase!");
});
//# sourceMappingURL=index.js.map
