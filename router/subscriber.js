const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');

// Route to handle subscriber registration
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    
    // Check if the email is already subscribed
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).send('Email is already subscribed!');
    }

    // If the email is not subscribed, save it to the database
    const subscriber = new Subscriber({ email });
    await subscriber.save();
    res.status(200 ).send('Successfully subscribed!');
  } catch (error) {
    console.error('Error subscribing:', error);
    res.status(500).send('Failed to subscribe');
  }
});

module.exports = router;
