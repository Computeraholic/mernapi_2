// JavaScript source code
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
//Models
var Post = require('../models/Post.js');
var User = require('../models/User.js');
var db = mongoose.connection;