module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("Comment", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        comment: {
            type: DataTypes.STRING,
        }, 
        post_id: {
            type: DataTypes.INTEGER,
        },
        user_id: {
            type: DataTypes.INTEGER,
        }
    }, {
		tableName: 'comments',
		name: {
			singular: 'comment',
			plural: 'comments'
		},
		timestamps: false
	});

    Comment.associate = function(models) {
        Comment.belongsTo(models.Post, {
            foreignKey: 'post_id', 
            targetKey: 'id'
        });
        Comment.belongsTo(models.User, {
            foreignKey: 'user_id', 
            targetKey: 'id'
        });
    }

    return Comment;
};    