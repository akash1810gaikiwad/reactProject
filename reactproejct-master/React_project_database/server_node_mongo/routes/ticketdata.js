const router = require("express").Router();
const { Ticket, validate } = require("../models/ticketdata");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const ticket = await Ticket.findOne({ email: req.body.email });
		if (ticket)
			return res
				.status(409)
				.send({ message: "ticket with given already Exist!" });
				await new Ticket ({ ...req.body}).save();
		res.status(201).send({ message: "User created successfully" });
		
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});




router.get("/find/:id", async (req, res) => {

	
		const ticketFind = await Ticket.findById(req.params.id);
		
	  
		if (!ticketFind) {
		  res.status(500).json({
			Error: err,
			status: false,
		  });
		}
		res.send(ticketFind);
	





});






module.exports = router;
