import express from 'express';
import { connectToDatabase } from '../lib/mongodb';
import { ObjectId } from 'mongodb';

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const { db } = await connectToDatabase();
    const products = await db.collection('products').find({}).toArray();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Get a single product by ID
router.get('/:id', async (req, res) => {
  try {
    const { db } = await connectToDatabase();
    const product = await db.collection('products').findOne({ 
      _id: new ObjectId(req.params.id) 
    });
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// Create a new product
router.post('/', async (req, res) => {
  try {
    const { name, description, price, category, inStock, imageSrc } = req.body;
    
    // Basic validation
    if (!name || !description || price === undefined) {
      return res.status(400).json({ error: 'Required fields missing' });
    }
    
    const { db } = await connectToDatabase();
    
    const result = await db.collection('products').insertOne({
      name,
      description,
      price: Number(price),
      category,
      inStock: Boolean(inStock),
      imageSrc: imageSrc || '/placeholder.jpg',
      createdAt: new Date()
    });
    
    res.status(201).json({
      id: result.insertedId,
      success: true,
      message: 'Product created successfully'
    });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// Update a product
router.put('/:id', async (req, res) => {
  try {
    const { name, description, price, category, inStock, imageSrc } = req.body;
    
    // Basic validation
    if (!name && !description && price === undefined && 
        category === undefined && inStock === undefined && imageSrc === undefined) {
      return res.status(400).json({ error: 'No fields to update' });
    }
    
    const { db } = await connectToDatabase();
    
    const updateData: any = {};
    if (name !== undefined) updateData.name = name;
    if (description !== undefined) updateData.description = description;
    if (price !== undefined) updateData.price = Number(price);
    if (category !== undefined) updateData.category = category;
    if (inStock !== undefined) updateData.inStock = Boolean(inStock);
    if (imageSrc !== undefined) updateData.imageSrc = imageSrc;
    updateData.updatedAt = new Date();
    
    const result = await db.collection('products').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: updateData }
    );
    
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json({
      success: true,
      message: 'Product updated successfully'
    });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// Delete a product
router.delete('/:id', async (req, res) => {
  try {
    const { db } = await connectToDatabase();
    
    const result = await db.collection('products').deleteOne({
      _id: new ObjectId(req.params.id)
    });
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json({
      success: true,
      message: 'Product deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

export default router;