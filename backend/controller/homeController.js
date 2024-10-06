const cloudinary = require('cloudinary').v2;
const upload = require('../config/multerConfig');
const homeModel = require('../models/homeModel');

exports.uploadHomeData = [
    upload.array('images', 5), // Accept up to 5 images
    async (req, res) => {
        try {
            const { heading, paragraph, contactNumber } = req.body;

            if (!heading || !paragraph || !contactNumber) {
                return res.status(400).json({ success: false, message: 'All fields are required' });
            }

            // Upload images to Cloudinary and get their URLs
            const imageUrls = [];
            for (const file of req.files) {
                const result = await cloudinary.uploader.upload(file.path);
                imageUrls.push(result.secure_url);
            }

            // Create product with Cloudinary image URLs
            const createProduct = await homeModel.create({
                heading,
                paragraph,
                contactNumber,
                images: imageUrls
            });

            return res.status(201).json({ success: true, message: 'Home images uploaded successfully!', createProduct });
        } catch (error) {
            res.status(500).json({ success: false, message: `Internal server error: ${error}` });
        }
    }
];

// New controller to get home data
exports.getHomeData = async (req, res) => {
    try {
        // Fetch all home data from the database
        const homeData = await homeModel.find();

        // If no data is found, return a 404 response
        if (!homeData || homeData.length === 0) {
            return res.status(404).json({ success: false, message: 'No home data found' });
        }

        // Return the fetched home data
        return res.status(200).json({ success: true, homeData });
    } catch (error) {
        return res.status(500).json({ success: false, message: `Internal server error: ${error}` });
    }
};
