const db = require('./../models')
module.exports = {
	posts() {
		return db.Post.findAll();
    },
    postById(id, options = {}) {
		const newOptions = options;
        newOptions.where = newOptions.where || {};
        newOptions.where.id = id;
        return db.Post.findOne(newOptions);
    }, 
    postByUserId(id, options = {}) {
		const newOptions = options;
        newOptions.where = newOptions.where || {};
        newOptions.where.id = id;
        return db.Post.findAll(newOptions);
    }, 
    updatePost(data, id) {
        return db.Post.update(data, {
            where: {
                id
            }
        });
    },
    deletePost(id) {
        return db.Post.destroy({
            where: {  
                id
            }
        });
    },
    createPost(data) {
        return db.Post.create(data);
    }
};