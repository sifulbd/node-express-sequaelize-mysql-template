const db = require('../models')
module.exports = {
	users() {
		return db.User.findAll();
    },
    userById(id, options = {}) {
		const newOptions = options;
        newOptions.where = newOptions.where || {};
        newOptions.where.id = id;
        return db.User.findOne(newOptions);
    }, 
    updateUser(data, id) {
        return db.User.update(data, {
            where: {
                id
            }
        });
    },
    deleteUser(id) {
        return db.User.destroy({
            where: {  
                id
            }
        });
    },
    createUser(data) {
        return db.User.create(data);
    },
    blkadd(data) {
        return db.User.bulkCreate(data, { ignoreDuplicates: true });
    }
};