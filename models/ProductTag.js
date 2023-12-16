const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { }

ProductTag.init(
  {// define columns
    // Store a reference of the `id` of the `Product` that owns this tag
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
