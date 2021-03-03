const db = require('../models')
module.exports = {
	comments() {
		return db.Comment.findAll();
    },
    commentById(id, options = {}) {
		const newOptions = options;
        newOptions.where = newOptions.where || {};
        newOptions.where.id = id;
        return db.Comment.findOne(newOptions);
    }, 
    updateComment(data, id) {
        return db.Comment.update(data, {
            where: {
                id
            }
        });
    },
    deleteComment(id) {
        return db.Comment.destroy({
            where: {  
                id
            }
        });
    },
    createComment(data) {
        return db.Comment.create(data);
    }
};