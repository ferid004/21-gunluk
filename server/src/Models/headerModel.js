import mongoose from 'mongoose'

const headerSchema = new mongoose.Schema({
    src: String
});

const Header = mongoose.model('headerFoto', headerSchema);

export default Header

