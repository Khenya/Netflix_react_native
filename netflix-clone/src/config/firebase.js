const { initializeApp } = require('firebase-admin/app');
const { credential, firestore, auth } = require('firebase-admin');
const firebaseSetup = require('./netflix.json');

initializeApp({
    credential: credential.cert(firebaseSetup),
    //databaseURL: 'https://c-instagram-default-rtdb.firebaseio.com/'
});

const db = firestore();
const authInstance = auth();

module.exports = { db, authInstance};