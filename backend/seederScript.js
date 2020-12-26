require('dotenv').config();


const productsData = require('./data/products')
const connectDB = require('./config/db')
const Product = require('./models/Product')

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(productsData);

        console.log("Data Import Sucess")

        process.exit();
    } catch (err) {
        console.error("Error with Data Import", err);
        process.exit(1);
    }
}

importData();