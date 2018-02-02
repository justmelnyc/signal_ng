let functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const express = require('express');
const router = new express.Router();
const routerNonAuth = new express.Router();
const cors = require('cors')({origin: true});

router.use(cors);
routerNonAuth.use(cors);

routerNonAuth.post('/create-account', (req, res) => {
  admin.auth().createUser({
    email: req.email,
    emailVerified: false,
    password: req.password,
    displayName: req.name,
    photoURL: '',
    disabled: false
  })
    .then(function(userRecord) {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log("Successfully created new user:", userRecord);
      res.send(200, userRecord);
    })
    .catch(function(error) {
      console.log("Error creating new user:", error);
      res.status(500).send(error.message);
    });
});

exports.addNewAccount = functions.https.onRequest((req, res) => {
  req.url = '/create-account';
  return routerNonAuth(req, res)
});
