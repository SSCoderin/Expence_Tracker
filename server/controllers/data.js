const Data = require("../models/data-model");

const expense = async (req, res) => {
    try {
        const { category, amount, comment, date, time } = req.body;
        const newData = await Data.create({
            category,
            amount,
            comment,
            date,
            time
        });
        res.status(201).json({
            message: "Data added successfully",
            newData
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal server error",error
        });
    }
};



const viewdata = async (req, res) => {
    try {
        const data = await Data.find();
        res.status(200).json({
            message: "Data fetched successfully",
            data
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error
        });
    }
};  



module.exports = {
    expense , viewdata
}