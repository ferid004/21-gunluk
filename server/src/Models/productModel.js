import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: String,
    info: String,
    src: String,
    price: Number,
});

const Product = mongoose.model('product_lahiye', productSchema);

export default Product