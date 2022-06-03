const Post = require("../models/post");
const createPath = require("../Helpers/create-path")

const handleError = (res, error) => {
    console.log(error)
    res.render(createPath('error'), {title: 'Error'})
}

const getPost = (req, res) =>{
    const title = "Post"
    Post
        .findById(req.params.id)
        .then((post) => res.render(createPath('post'), {post, title}))
        .catch((error) => handleError(res, error))
}

const addPost = (req, res) =>{
    const {title, author, text } = req.body
    const post = new Post({text, title, author})
    post
        .save()
        .then(() => {res.redirect("/posts")})
        .catch((error) => handleError(res, error))
}

const deletePost = (req, res) =>{
    const title = "Post"
    Post
        .findByIdAndDelete(req.params.id)
        .then((result) => {
            res.sendStatus(200)
        })
        .catch((error) => handleError(res, error))
}

const editPost = (req, res) =>{
    const title = "Edit post"
    Post
        .findById(req.params.id)
        .then((post) => res.render(createPath('edit-post'), {post, title}))
        .catch((error) => handleError(res, error))
}

const putPost = (req, res) =>{
    const { title, text, author } = req.body;
    const { id } = req.params;
    Post
        .findByIdAndUpdate(id, { title, text, author }, { new: true })
        .then((result) => res.redirect(`/posts/${id}`))
        .catch((error) => handleError(res, error))
}

const getPosts = (req, res) =>{
    const title = "Posts"
    Post
        .find()
        .sort({ createdAt: -1 })
        .then((posts) => res.render(createPath('posts'), {posts, title}))
        .catch((error) => handleError(res, error))
}

const getAddPost = (req, res) =>{
    const title = "Add new post"
    res.render(createPath('add-post'), {title})
}

module.exports = {
    getPost,
    addPost,
    deletePost,
    editPost,
    putPost,
    getPosts,
    getAddPost,
}