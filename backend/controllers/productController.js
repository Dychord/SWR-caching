const router = require('express').Router()
const productModel = require('../model/productModel')


// create product
router.post('/create', async (req, res) => {
    try {
        const { title, price, description, category, image, rating } = req.body;
        
        // Create the product with the provided data    
        const product = await productModel.create({
            title,
            price,
            description,
            category,
            image,
            rating: {
                rate: rating.rate,
                count: rating.count
            }
        });

        // Send back the created product as response
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create product', error });
    }
});

router.get('/products', async (req,res)=>{
    const products = await productModel.find({})
    return res.json(products)
})

router.delete('/delete-duplicate', async (req, res) => {
    try {
      // Step 1: Find duplicate products based on title
      const duplicates = await productModel.aggregate([
        {
          $group: {
            _id: { title: "$title" }, // Group by title
            count: { $sum: 1 }, // Count duplicates
            ids: { $push: "$_id" } // Push IDs of duplicate products
          }
        },
        {
          $match: {
            count: { $gt: 1 } // Keep only duplicates
          }
        }
      ]);
  
      // Step 2: Delete duplicates
      for (const duplicate of duplicates) {
        // Keep the first product and delete the rest
        const idsToDelete = duplicate.ids.slice(1); // Exclude the first ID
        await productModel.deleteMany({ _id: { $in: idsToDelete } });
      }
  
      return res.status(200).json({ message: 'Duplicates deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting duplicates', error });
    }
  });

module.exports = router