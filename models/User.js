module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        companyname: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
        },
        website: {
            type: DataTypes.STRING,
        },

    }, {
		tableName: 'users',
		name: {
			singular: 'user',
			plural: 'users'
		},
		timestamps: false
	});

    User.associate = (models) => {

        models.User.hasMany(models.Post, {
			foreignKey: 'user_id',
			targetKey: 'id'
		});

        models.User.hasMany(models.Comment, {
            foreignKey: 'user_id',
            targetKey: 'id'
        });
    }

    return User;
};