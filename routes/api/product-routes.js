const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint
router.get('/', async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Product.findAll({
      include: [
        { model: Category },
        { model: Tag }
      ],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [{ model: Category },
      { model: Tag }],
      where: {
        product_id: req.params.product_id,
      },
    });

    if (!productData) {
      res.status(404).json({ message: 'No product found with that id!' });
      return;
    };
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create new product
  try {
    const productData = await Product.create(req.body);
    if (req.body.tagIds?.length) {
      const productTagId = req.body.tagIds.map((tag_id) => ({
        product_id: productData.id,
        tag_id,
      }));

      await ProductTag.bulkCreate(productTagId);
    }

    res.status(201).json({ product: productData });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update product
  Product.update(
    {
      // All the fields you can update and the data attached to the request body.
      product_name: req.body.product_name,
      price: req.body.price,
      stock: req.body.stock,
    },
    {
      //specifies records to be updated
      // Gets the product based on the id given in the request parameters
      where: {
        id: req.params.id,
        //where id exists we'll edit info with info above
      },
    }
  )
    .then((productUpdated) => {
      // Sends the updated product as a json response
      res.json(productUpdated);
    })
    .catch((err) => res.json(err));
});


router.delete('/:id', async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!productData) {
      res.status(404).json({ message: 'No product found with that id!' });
      return;
    }

    res.status(200).json({ message: 'Product deleted!' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
