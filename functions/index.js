const functions = require("firebase-functions");
const express = require('express');
const path = require('path')
const fs = require('fs')
prerender = require("prerender-node")
const cors = require('cors')
const admin = require('firebase-admin');
const jwt = require('jsonwebtoken');
const app = require('express')(); 
app.use(cors());
const firebase = require ('firebase');
// const FBAuth = require('./util/FBAuth');
// const FBAuthPro = require('./util/FBAuthPro');

const { agences } = require('./handlers/agences.js')
app.get('/agences',agences)

const { agents } = require('./handlers/agents.js')
app.get('/agents',agents)

const { search } = require('./handlers/search.js')
app.get('/search',search)

exports.api = functions.https.onRequest(app);
const corsHandler = cors({origin: true});

