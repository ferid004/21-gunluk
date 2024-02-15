import express from 'express'
import { DeleteUser, GetAllUsers, GetUserByID, Login, Register, UpdateImage, UpdateName, UpdatePassword } from "./../Controller/userController.js";

const router = express.Router()


// Post

router.post('/login', Login)
router.post('/register', Register)


// Get

router.get('/', GetAllUsers)
router.get('/:id', GetUserByID)


// Delete

router.delete('/:id', DeleteUser)


// Put

router.put("/username/:id", UpdateName)
router.put("/password/:id", UpdatePassword)
router.put("/image/:id", UpdateImage)



export default router
