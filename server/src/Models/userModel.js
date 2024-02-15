import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    image: {type:String,},
    info: {type:String,},
    role: {type:String, enum:["user", "admin"], default:"user"},
    basket: [],
    wishlist: [],
});

const User = mongoose.model('patient', userSchema);

export default User
