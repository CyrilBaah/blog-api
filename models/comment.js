'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Post }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'id', as: 'user' });
      this.belongsTo(Post, { foreignKey: 'id', as: 'post' });
    }
  };
  Comment.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },  
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userUuid: {
      type: DataTypes.UUIDV4,
      allowNull: false
    }
    }, 
    {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};