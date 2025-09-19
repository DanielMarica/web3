const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Path to the expenses JSON file
const expensesFilePath = path.join(__dirname, '../data/expenses.json');

// GET /expenses - Returns all expenses from the JSON file
router.get('/expenses', (req, res) => {
  try {
    // Read the expenses JSON file
    const data = fs.readFileSync(expensesFilePath, 'utf8');
    const expenses = JSON.parse(data);
    
    // Return the expenses
    res.status(200).json(expenses);
  } catch (error) {
    console.error('Error reading expenses file:', error);
    res.status(500).json({ error: 'Failed to read expenses data' });
  }
});

module.exports = router;
