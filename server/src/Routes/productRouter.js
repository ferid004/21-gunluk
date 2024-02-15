import express from 'express'
import { del_product, get_id_product, get_prduct, post_product } from '../Controller/productController.js'

const router=express.Router()

router.get('/',get_prduct)
router.get('/:id',get_id_product)
router.post('/',post_product)
router.delete('/:id',del_product)

export default router