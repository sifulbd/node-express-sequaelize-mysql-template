module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("Post", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
        }
    }, {
		tableName: 'posts',
		name: {
			singular: 'post',
			plural: 'posts'
		},
		timestamps: false
	});

    Post.associate = function(models) {
        Post.belongsTo(models.User, {
            foreignKey: 'user_id', 
            targetKey: 'id'
        });

        Post.hasMany(models.Comment, {
            foreignKey: 'post_id',
            targetKey: 'id'
        });
    }

    return Post;
};    