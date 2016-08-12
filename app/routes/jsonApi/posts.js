'use strict'
const express = require('express');
const router = express.Router();
const path = require('path')
const postModelClass = require('../../Models/postModels/postModel')
const post = new postModelClass
const passport = require('passport')

router.route('/')
  .get((req, res, next) => {
    post.getAllPosts().then((posts) => {res.json(posts)})
  })
  .post(passport.authenticate('bearer', {session: false}), (req, res, next) => {
    post.createPost(req.body).then((createResponse) => res.sendStatus(200))
  })

 


module.exports = router
