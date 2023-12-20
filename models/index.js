// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// const A = sequelize.define('A', /* ... */);
// const B = sequelize.define('B', /* ... */);

// A.hasOne(B); // A HasOne B
// A.belongsTo(B); // A BelongsTo B
// A.hasMany(B); // A HasMany B
// A.belongsToMany(B, { through: 'C' }); // A BelongsToMany B through the junction table C

//referenced: https://sequelize.org/docs/v6/core-concepts/assocs/
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag });

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, { through: ProductTag });


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
