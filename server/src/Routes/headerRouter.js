import express from 'express'
import { del_data, get_data, get_id, post_data,  } from '../Controller/headerController.js'

const router=express.Router()

router.get('/',get_data)
router.get('/:id',get_id)
router.post('/',post_data)
router.delete('/:id',del_data)

export default router
