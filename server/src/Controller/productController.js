import Product from "../Models/productModel.js"

export const get_prduct = async (req, res) => {
    try {
        const data = await Product.find({})
        res.status(200).send({ message: "sucsess GET", data })
    } catch (error) {
        res.status(500).send({ message: "NOT sucsess GET" })
    }
}

export const post_product = async (req, res) => {
    try {
        const data = new Product(req.body)
        await data.save()

        res.status(200).send({ message: "sucsess POST", data })
    } catch (error) {
        res.status(500).send({ message: "NOT sucsess POST" })
    }
}

export const get_id_product = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Product.findById(id)
        res.status(200).send({ message: "sucsess DELETE", data })
    } catch (error) {
        res.status(500).send({ message: "NOT sucsess DELETE" })
    }
}
export const del_product = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Product.findByIdAndDelete(id)
        res.status(200).send({ message: "sucsess DELETE", data })
    } catch (error) {
        res.status(500).send({ message: "NOT sucsess DELETE" })
    }
}