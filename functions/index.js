const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
admin.initializeApp();

// Cloud Function to check if a user already exists
exports.checkEmailExists = functions.https.onRequest(async (req, res) => {
  const {email} = req.body;

  if (!email) {
    return res.status(400).send("MissingInput");
  }

  try {
    // Check for email in firbease auth
    const emailExists = admin.auth().getUserByEmail(email);
    // Check for email in firestore collection
    const db = admin.firestore();
    const docRef = db.collection("users").doc(email);
    const doc = await docRef.get();

    if (emailExists && doc.exists) {
      return res.status(200).send();
    } else {
      return res.status(404).send("UserNotFound");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
