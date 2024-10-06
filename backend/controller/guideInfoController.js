const guideInfoModel = require("../models/guideInfoModel");

exports.submitGuideForm = async (req, res) => {
  try {
    const { firstName, lastName, primaryNumber, secondaryNumber, email, marketingOption } = req.body;

    // Server-side validation (you can also use a validation library like `joi`)
    if (!firstName || !lastName || !primaryNumber || !email || !marketingOption) {
      return res.status(400).json({ error: 'All required fields must be filled.' });
    }

    // Create a new guide entry
    const newGuide = new guideInfoModel({
      firstName,
      lastName,
      primaryNumber,
      secondaryNumber,
      email,
      marketingOption,
    });

    // Save the entry to the database
    await newGuide.save();

    // Send a success response
    return res.status(200).json({success: true, message: 'Thanks for you intrest in our guide' });
  } catch (error) {
    console.error('Error in form submission:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};
