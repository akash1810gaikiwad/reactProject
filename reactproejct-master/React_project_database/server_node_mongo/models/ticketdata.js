const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");


const ticketSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	train: { type: String, required: true },
	train_no: { type: String, required: true },
	time: { type: String, required: true },
	destination: { type: String, required: true },
});

ticketSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const Ticket = mongoose.model("ticket", ticketSchema);

const validate = (data) => {
	const schema = Joi.object({
		name: Joi.string().required().label("train"),
		email: Joi.string().email().required().label("Email"),
		train: Joi.string().required().label("train"),
		train_no: Joi.string().required().label("train_no"),
		time: Joi.string().required().label("time"),
		destination:Joi.string().required().label("destination"),
	});
	return schema.validate(data);
};

module.exports = { Ticket, validate };
