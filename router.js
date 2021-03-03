import postRoute from './modules/post/postRoutes';

export default function(app) {
    app.use("/posts", postRoute);
}