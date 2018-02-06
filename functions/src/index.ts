let functions = require('firebase-functions');
import * as firebase from 'firebase';

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
    email: req.body.email,
    emailVerified: false,
    password: req.body.password,
    displayName: req.body.name,
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

routerNonAuth.post('/delete-account', (req, res) => {
  admin.auth().deleteUser(req.body)
    .then(function() {
      console.log("Successfully deleted selected account:", );
      res.send(200);
    })
    .catch(function(error) {
      console.log("Error deleting account:", error);
      res.status(500).send(error.message);
    });
});

routerNonAuth.post('/delete-video', (req, res) => {
  const storageRef = firebase.storage().ref();
  console.log('deleteVideo = ', req.body.name);
  const uploadsRef = storageRef.child(`/uploads/${req.body.name}`);

  uploadsRef.delete()
    .then(function () {
      console.log("Successfully deleted selected video:", );
      res.send(200);
    })
    .catch(function (error) {
      console.log("Error deleting video:", error);
      res.status(500).send(error.message);
    })
});

exports.addNewAccount = functions.https.onRequest((req, res) => {
  req.url = '/create-account';
  return routerNonAuth(req, res)
});

exports.deleteAccount = functions.https.onRequest((req, res) => {
  req.url = '/delete-account';
  return routerNonAuth(req, res)
});

exports.deleteVideo = functions.https.onRequest((req, res) => {
  req.url = '/delete-video';
  return routerNonAuth(req, res)
});
