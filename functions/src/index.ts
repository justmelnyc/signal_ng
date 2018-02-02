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
  console.log('here is backend');
  // admin.database().ref(`/reservations`).push(reservationObj).then(snapshot => {
  //   let reservationMessage = `Hi, Reservation have been made from ${req.user.name}. <br/>Below are details of the reservation. <br/><br/>User: ${req.user.name} <br/>Email: ${req.user.email}<br/>Service Type: ${reservationObj.type}<br/>Reservation Date:${reservationObj.reservationDate}<br/>Time: ${reservationObj.reservationTime}`;
  //   console.log('reservation message', reservationMessage);
  //   sendEmail(req.user.email, adminEmail, `Reservation made`, 'text/html', reservationMessage, function(error, response) {
  //     if (error) {
  //       console.log('Sendgrid Error response received',error);
  //     } else {
  //       console.log('Sendgrid Mail Sent');
  //     }
  //   });
  //   let reservationMessageToUser = `Hi, Reservation have been successfully made from <br/>Below are details of the reservation. <br/><br/>Service Type: ${reservationObj.type}<br/>Reservation Date:${reservationObj.reservationDate}<br/>Time: ${reservationObj.reservationTime}<br/><br/>If the information is not correct, please contact support team<br/><br/>Best Regards<br/>Support Team`;
  //   sendEmail(adminEmail, req.user.email, `Reservation made`, 'text/html', reservationMessageToUser, function(error, response) {
  //     if (error) {
  //       console.log('Sendgrid Error response received',error);
  //     } else {
  //       console.log('Sendgrid Mail Sent');
  //     }
  //   });
  //   res.send(200, reservationObj);
  // }).catch(error => {
  //   res.status(500).send(error.message);
  // });
});

exports.addNewAccount = functions.https.onRequest((req, res) => {
  req.url = '/create-account';
  return routerNonAuth(req, res)
});

// router.post('/bookservice', (req, res) => {
//   const amount = req.body.amount * 100; // as cent
//   const card = req.body.token;
//   let charge = {amount, currency, card};
//
//   return stripe.charges.create(charge).then(response => {
//       // If the result is seccessful, write it back to the database
//       let reservationObj = req.body.reservation;
//       reservationObj.transactionId = response.id;
//       reservationObj.client = {
//         uid: req.user.user_id,
//         email: req.user.email,
//         name: req.user.name,
//         avatar: req.user.picture
//       };
//       reservationObj.userId = req.user.user_id;
//
//       admin.database().ref(`/reservations`).push(reservationObj).then(snapshot => {
//         let reservationMessage = `Hi, Reservation have been made from ${req.user.name}. <br/>Below are details of the reservation. <br/><br/>User: ${req.user.name} <br/>Email: ${req.user.email}<br/>Service Type: ${reservationObj.type}<br/>Reservation Date:${reservationObj.reservationDate}<br/>Time: ${reservationObj.reservationTime}`;
//         console.log('reservation message', reservationMessage);
//         sendEmail(req.user.email, adminEmail, `Reservation made`, 'text/html', reservationMessage, function(error, response) {
//           if (error) {
//             console.log('Sendgrid Error response received',error);
//           } else {
//             console.log('Sendgrid Mail Sent');
//           }
//         });
//         let reservationMessageToUser = `Hi, Reservation have been successfully made from <br/>Below are details of the reservation. <br/><br/>Service Type: ${reservationObj.type}<br/>Reservation Date:${reservationObj.reservationDate}<br/>Time: ${reservationObj.reservationTime}<br/><br/>If the information is not correct, please contact support team<br/><br/>Best Regards<br/>Support Team`;
//         sendEmail(adminEmail, req.user.email, `Reservation made`, 'text/html', reservationMessageToUser, function(error, response) {
//           if (error) {
//             console.log('Sendgrid Error response received',error);
//           } else {
//             console.log('Sendgrid Mail Sent');
//           }
//         });
//         res.send(200, reservationObj);
//       }).catch(error => {
//         res.status(500).send(error.message);
//       });
//     }, error => {
//       // We want to capture errors and render them in a user-friendly way, while
//       // still logging an exception with Stackdriver
//       console.log("Stripe charge error", error)
//       res.status(500).send(error.message);
//     }
//   );
// });
