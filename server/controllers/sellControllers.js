require('dotenv').config();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse');

// Environment variables
const JWT_SECRET = process.env.JWT_SECRET;

const sellItem_post = async (req, res, next) => {
	const data = req.body;
	const item = data.item;
	console.log(item);
	try {
		const decodedToken = jwt.verify(data.token, JWT_SECRET);
		User.updateOne({ _id: decodedToken.id }, { $push: { onSale: item } })
			.then(da => {
				console.log(da);
				res.status(200).json({ success: true });
			})
			.catch(err => next(new ErrorResponse('Error selling crop', 401)));
		User.findById(decodedToken.id).then(res => console.log(res));
	} catch (error) {
		console.log(error);
		return next(new ErrorResponse('Unauthorized user', 401));
	}
};

module.exports = {
	sellItem_post,
};
