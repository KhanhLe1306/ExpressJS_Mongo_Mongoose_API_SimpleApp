import { addContact, getContact, getContactWithId, updateContact, deleteContact } from "../controllers/crmController";

const routes = (app) => {
	app
		.route("/contact")
		.get((req, res, next) => {
			//middleware
			console.log(`Request from ${req.originalUrl}`);
			console.log(`Request from ${req.method}`);
			next();
		}, getContact)

		.post(addContact);

	app
		.route("/contact/:id")
		.get(getContactWithId)

		.put(updateContact)

		.delete(deleteContact);
};

export default routes;
