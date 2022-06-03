const express= require('express');
const router = express.Router();
const Post = require("../models/post");
const createPath = require("../Helpers/create-path");
const { getPost,
        addPost,
        deletePost,
        putPost,
        getPosts,
        } = require("../controllers/api-post-controller")

router.post('/api/post', addPost)
router.delete('/api/posts/:id', deletePost)
router.put('/api/post/:id', putPost)
router.get('/api/posts/:id', getPost)
router.get('/api/posts', getPosts)

module.exports = router;
