const {Router} = require('express');
const commentRouter = new Router();
const commentController = require('./commentController');
const commentRules = require('./rules/commentRules');
const validate = require('./../../validate');
const {checkSchema, validationResult} = require('express-validator');

commentRouter.get("/", commentController.getComments);
commentRouter.get("/:id", commentController.getComment);
commentRouter.post("/create", validate(checkSchema(commentRules)), commentController.createComment);
commentRouter.delete('/delete/:id', commentController.deleteComment);

module.exports = commentRouter;
