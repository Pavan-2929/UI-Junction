import Contact from "../model/contact.model.js"


export const createContact = async (req, res) => {
    try {
        const newContact = await Contact.create(req.body)

        res.status(200).json(newContact)
    } catch (error) {
        console.log(error);
    }
}