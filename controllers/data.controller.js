const Data = require("../models/data.model.js")

const getDataById = async (req, res) => {

    try {
        const { id } = req.params
        const data = await Data.findById(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }

}

module.exports = {
    getDataById
}