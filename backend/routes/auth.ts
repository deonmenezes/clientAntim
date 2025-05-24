import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { connectToDatabase } from '../lib/mongodb';

const router = express.Router();

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Check if all required fields are provided
    if (!username) {
      return res.status(400).json({ error: "Username is required" });
    }
    
    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }

    // Connect to database
    const { db } = await connectToDatabase();
    
    // Hardcoded admin check for development purposes
    const isAdminUser = username === process.env.ADMIN_USERNAME;
    const isAdminPassword = password === process.env.ADMIN_PASSWORD;
    
    if (isAdminUser && isAdminPassword) {
      // Generate JWT token for admin user
      const token = jwt.sign(
        { username: process.env.ADMIN_USERNAME, role: "admin" },
        process.env.JWT_SECRET || "fallback-secret-key",
        { expiresIn: "1d" }
      );
      
      return res.json({
        success: true,
        message: "Authentication successful",
        token,
        user: {
          username: process.env.ADMIN_USERNAME,
          role: "admin"
        }
      });
    }
    
    // If not matching hardcoded admin, check database
    const user = await db.collection("users").findOne({ username });
    
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    
    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { username: user.username, role: user.role || "user" },
      process.env.JWT_SECRET || "fallback-secret-key",
      { expiresIn: "1d" }
    );
    
    return res.json({
      success: true,
      message: "Authentication successful",
      token,
      user: {
        username: user.username,
        role: user.role || "user"
      }
    });
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(500).json({ error: "Authentication failed" });
  }
});

// Add more auth routes as needed (register, logout, etc.)

export default router;