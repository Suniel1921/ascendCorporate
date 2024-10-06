const cloudinary = require ('cloudinary').v2;
const upload = require ('../config/multerConfig');
const fileUploadModel = require('../models/fileUploadModel');

exports.uploadDocuments = [
    upload.array('images', 5),
    async (req, res) => {
        try {
            const { name } = req.body;

            if (!name) {
                return res.status(400).json({ success: false, message: 'All fields are required' });
            }

            // Check if req.files is an array and not empty
            if (!req.files || req.files.length === 0) {
                return res.status(400).json({ success: false, message: 'No files uploaded' });
            }

            const imageUrls = [];
            for (const file of req.files) {
                const result = await cloudinary.uploader.upload(file.path);
                imageUrls.push(result.secure_url);
            }

            // Include user ID from the request
            const createProduct = await fileUploadModel.create({
                name,
                images: imageUrls,
                user: req.user._id 
            });

            return res.status(201).json({ success: true, message: 'Documents uploaded successfully!', createProduct });
        } catch (error) {
            console.error(`Error uploading documents: ${error.message}`);
            return res.status(500).json({ success: false, message: `Internal server error: ${error.message}` });
        }
    }
];






//get all documents

exports.getAllDocuments = async (req, res) => {
    const userId = req.user._id;
    try {
        // console.log('Fetching documents for user:', userId);
        const getAllDocuments = await fileUploadModel.find({ user: userId }).populate('user', 'name');
        // console.log('Documents found:', getAllDocuments);
        if (getAllDocuments.length === 0) {
            return res.status(404).json({ success: false, message: 'No Documents found' });
        }
        return res.status(200).json({ success: true, message: 'All Documents found', getAllDocuments });
    } catch (error) {
        // console.error(`Error fetching documents: ${error.message}`); 
        return res.status(500).json({ success: false, message: `Internal server error: ${error.message}` });
    }
};
