const express= require('express');
const router = express.Router();
const Post = require("../models/post");
const createPath = require("../Helpers/create-path");
const { getPost,
        addPost,
        deletePost,
        editPost,
        putPost,
        getPosts,
        getAddPost,} = require("../controllers/post-controller")

router.post('/add-post', addPost)
router.delete('/posts/:id', deletePost)
router.put('/edit/:id', putPost)
router.get('/posts/:id', getPost)
router.get('/edit/:id', editPost)
router.get('/posts', getPosts)
router.get('/add-post', getAddPost)

module.exports = router;
