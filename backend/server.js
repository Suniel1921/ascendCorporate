const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connectDB = require('./config/dbConn');
const authRoute = require('./routes/authRoute');
const priceRoute = require('./routes/priceRoute');
const contactRoute = require ('./routes/contactRoute');
const orderRoute = require ('./routes/orderRoute')
const fileUploadRoute = require ('./routes/fileUploadRoute');
const homeRoute = require ('./routes/homeRoute');
const guideInfoRoute = require ('./routes/guideInfoRoute');

const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// Routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/price', priceRoute);
app.use('/api/v1/contact', contactRoute);
app.use('/api/v1/order', orderRoute);
app.use('/api/v1/fileUpload', fileUploadRoute);
app.use('/api/v1/home', homeRoute)
app.use('/api/v1/guide', guideInfoRoute)


app.get('/', (req, res) => {
  res.send('Welcome to Nepal Tech');
});

app.listen(port, () => {
  console.log(`Server is running on port no: ${port}`);
});
