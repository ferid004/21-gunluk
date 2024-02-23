import User from "../Models/userModel.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


// Post

export const Register = async (req, res) => {
    try {
        const { username, password} = req.body
        const FindUser = await User.findOne({ username: username })
        
        if (FindUser) {
                res.status(409).json("Username already exists!")
                return
            }
            
            const hashedPass = await bcrypt.hash(password, 10);
            
            const newUser = await User.create({
                username: username,
                password: hashedPass,
            })
            console.log(username);

        const token = jwt.sign({
            userId: newUser._id,
            username: newUser.username,
            role: newUser.role,
            image: newUser.image,
            info:newUser.info,
            basket: newUser.basket,
            wishlist: newUser.wishlist,
        }, "Ferid", { expiresIn: '12h' })

        res.status(202).json({
            message: `${newUser.username} created successfully!`,
            data: token
        })

    } catch (error) {
        res.status(500).send({ message: "NOT sucsess POST" })
    }
}

export const Login = async (req, res) => {
    try {
        const { username, password } = req.body

        const FindUser = await User.findOne({ username: username })

        if (!FindUser) {
            res.status(409).json({ message: "Wrong usename and password!" })
            return
        }

        if (!(await bcrypt.compare(password, FindUser.password))) {
            res.status(409).json({ message: "Username or Password  is incorrect!" })
            return
        }

        const token = jwt.sign({
            userId: FindUser._id,
            username: FindUser.username,
            role: FindUser.role,
            image: FindUser.image,
            info: FindUser.info,
            basket: FindUser.basket,
            wishlist: FindUser.wishlist,
        }, "Ferid", { expiresIn: '12h' })

        res.status(202).json({
            message: `Salam, ${FindUser.username}!`,
            data: token
        })

    } catch (error) {
        res.status(500).send({ message: "NOT sucsess POST" })
    }
}


// Get

export const GetAllUsers = async (req, res) => {
    try {
        const data = await User.find({})
        res.status(200).send({ message: "sucsess GET", data })
    } catch (error) {
        res.status(500).send({ message: "NOT sucsess GET" })
    }
}


export const GetUserByID = async (req, res) => {
    try {
        const { id } = req.params
        const data = await User.findById(id)
        res.status(200).send({ message: "sucsess DELETE", data })
    } catch (error) {
        res.status(500).send({ message: "NOT sucsess DELETE" })
    }
}


// Delete

export const DeleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const data = await User.findByIdAndDelete(id)
        res.status(200).send({ message: "sucsess DELETE", data })
    } catch (error) {
        res.status(500).send({ message: "NOT sucsess DELETE" })
    }
}


//Update

export const UpdateName = async (req, res) => {
    try {
        const { id } = req.params
        const { username } = req.body
        const data = await User.findByIdAndUpdate(id, { username: username })
        res.status(200).send({ message: "Username successfully updated!", data })
    } catch (error) {
        res.status(500).send({ message: "NOT sucsess Update" })
    }
}

export const UpdateImage = async (req, res) => {
    try {
        const { id } = req.params
        const { image } = req.body
        const data = await User.findByIdAndUpdate(id, { image: image })
        res.status(200).send({ message: "Profile image successfully updated!", data })
    } catch (error) {
        res.status(500).send({ message: "NOT sucsess Update" })
    }
}
export const UpdateInfo = async (req, res) => {
    try {
        const { id } = req.params
        const { info } = req.body
        const data = await User.findByIdAndUpdate(id, { info: info })
        res.status(200).send({ message: "Profile info successfully updated!", data })
    } catch (error) {
        res.status(500).send({ message: "NOT sucsess Update" })
    }
}

export const UpdatePassword = async (req, res) => {
    try {
        const { id } = req.params
        const { password } = req.body

        const hasedPass = await bcrypt.hash(password, 10)

        const data = await User.findByIdAndUpdate(id, { password: hasedPass })

        res.status(200).send({ message: "Pasword successfully updated!", data })
    } catch (error) {
        res.status(500).send({ message: "NOT sucsess Update" })
    }
}



//// basket update
 export const UpdateBasket = async (req, res) => {
    try {
        const { id } = req.params
        const { basket } = req.body
        const data = await User.findByIdAndUpdate(id, {basket:basket})
        res.status(200).send({ message: "sucsess DELETE", data })
    } catch (error) {
        res.status(500).send({ message: "NOT sucsess Update" })
    }
 }
 export const UpdateWish = async (req, res) => {
    try {
        const { id } = req.params
        const { wishlist } = req.body
        const data = await User.findByIdAndUpdate(id, {wishlist:wishlist})
        res.status(200).send({ message: "sucsess DELETE", data })
    } catch (error) {
        res.status(500).send({ message: "NOT sucsess Update" })
    }
 }