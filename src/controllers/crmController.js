import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model("Contact", ContactSchema); //Contact will be a collection

export const addContact = (req, res) => {
	const newUser = new Contact(req.body);

	newUser.save((err, contact) => {
		if (err) {
			res.send(err);
		} else {
			res.json(contact);
		}
	});
};

export const getContact = (req, res) => {
	Contact.find({}, (err, results) => {
		if (err) {
			res.send(err);
		} else {
			res.json(results);
		}
	});
};

export const getContactWithId = (req, res) => {
	Contact.findOne({ _id: req.params.id }, (err, results) => {
		if (err) {
			res.send(err);
		} else {
			res.json(results);
		}
	});

	// Contact.findById(req.params.id, (err, results) => {
	// 	if (err) {
	// 		res.send(err);
	// 	} else {
	// 		res.json(results);
	// 	}
	// });

	// 2 ways to write
	//the first one is more toward to mongoShell
	//the second one is more toward mongoose syntax
};

export const updateContact = (req, res) => {
	Contact.updateMany(
		{ _id: req.params.id },
		{ $set: req.body },
		{ $upsert: true },
		(err, contact) => {
			if (err) {
				res.send(err);
			} else {
				res.json(contact);
			}
		}
	);

	// Contact.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, contact) => {
	//     if(err) res.send(err)
	//     res.json(contact)
	// })
};

export const deleteContact = (req, res) => {
	// Contact.deleteOne({ _id: req.params.id }, (err, contact) => {
	// 	if (err) res.send(err);
	// 	res.json(contact);
	// });

	Contact.findByIdAndDelete(req.params.id, (err, contact) => {
		if (err) res.send(err);
		res.json(contact);
	});
};
