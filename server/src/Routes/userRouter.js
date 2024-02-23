import express from 'express'
import { DeleteUser, GetAllUsers, GetUserByID, Login, Register, UpdateBasket, UpdateImage, UpdateInfo, UpdateName, UpdatePassword, UpdateWish } from "./../Controller/userController.js";

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
router.put("/info/:id", UpdateInfo)

// basket update
router.put('/basket/:id', UpdateBasket)
router.put('/wish/:id', UpdateWish)


export default router
