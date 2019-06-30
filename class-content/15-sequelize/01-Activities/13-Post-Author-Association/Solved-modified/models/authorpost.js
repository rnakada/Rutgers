module.exports = function(sequelize, DataTypes) {
    var AuthorPost = sequelize.define("AuthorPost", {});

    AuthorPost.associate = function(models) {
        AuthorPost.belongsTo(models.Author, {
            foreignKey: {
                allowNull: false
            }
        });
        AuthorPost.belongsTo(models.Post, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return AuthorPost;
};
