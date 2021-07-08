const mongoose = require("mongoose");

const billSchema = mongoose.Schema({
    name: String,
    description: String,
    type: String,
    amount: Number,
    deadline: Date,
    paid: Boolean,
}, 
{timestamps: true}
);

const Bill = mongoose.model("Bill", billSchema);

module.exports = {
    Bill,
}