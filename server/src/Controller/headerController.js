import Header from "../Models/headerModel.js"


export const get_data = async (req, res) => {
    try {
        const data = await Header.find({})
        res.status(200).send({ message: "sucsess GET", data })
    } catch (error) {
        res.status(500).send({ message: "NOT sucsess GET" })
    }
}

export const post_data = async (req, res) => {
    try {
        const data = new Header(req.body)
        await data.save()

        res.status(200).send({ message: "sucsess POST", data })
    } catch (error) {
        res.status(500).send({ message: "NOT sucsess POST" })
    }
}

export const get_id = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Header.findById(id)
        res.status(200).send({ message: "sucsess DELETE", data })
    } catch (error) {
        res.status(500).send({ message: "NOT sucsess DELETE" })
    }
}
export const del_data = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Header.findByIdAndDelete(id)
        res.status(200).send({ message: "sucsess DELETE", data })
    } catch (error) {
        res.status(500).send({ message: "NOT sucsess DELETE" })
    }
}
