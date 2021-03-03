const {Router} = require('express');
const postRouter = new Router();
const postController = require('./postController');
const validate = require('./../../validate');
const postRules = require('./rules/postRules');
const {checkSchema} = require('express-validator');


postRouter.get("/", postController.getPosts);
postRouter.get('/:id', postController.getPost);
postRouter.get('/update/:id', postController.getUpdatePost);
postRouter.put('/update/:id', validate(checkSchema(postRules)), postController.putUpdatePost);
postRouter.post('/create', validate(checkSchema(postRules)), postController.createPost);
postRouter.delete('/delete/:id', postController.deletePost);
postRouter.get('/user/:userId', postController.getUserPosts)

module.exports = postRouter;
