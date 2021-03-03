const {Router} = require('express');
const userRouter = new Router();
const userController = require('./userController');
const userRules = require('./rules/userRules');
const validate = require('./../../validate');
const {body, checkSchema, validationResult} = require('express-validator');

userRouter.get("/", userController.getUsers);
userRouter.get("/:id", userController.getUser);
userRouter.post("/create", validate(checkSchema(userRules)), userController.createUser);
userRouter.post("/blkcreate", validate(checkSchema(userRules)), userController.createUser);

module.exports = userRouter;
