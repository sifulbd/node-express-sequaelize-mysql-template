const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const cors = require("cors");

const PORT = process.env.PORT || 7000;

const db = require("./models");
const postRouter = require("./modules/post/postRoutes");
const userRouter = require("./modules/user/userRoutes");
const commentRouter = require("./modules/comment/commentRoutes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/posts", postRouter);
app.use("/users", userRouter);
app.use("/comments", commentRouter);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(` listening at .. ${PORT}`);
    });
});
