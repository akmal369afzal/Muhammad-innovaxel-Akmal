import Url from "../models/url.model.js";
import { nanoid } from "nanoid";


export const createShortUrl = async (req, res) => {
	try {
		const OriginalUrl = req.body.originalUrl;
		if (!OriginalUrl) {
			return res.status(400).json({ message: "OriginalUrl is required" });
		}
		const id =  nanoid(4);
        const shortUrl = await Url.create({ url: OriginalUrl, shortCode: id });
        res.status(201).json({ message: "shortUrl created", shortUrl: shortUrl });
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.message });
	}
};


export const getAllUrl = async (req, res) => {
	try {
        const Urls = await Url.find();
        res.status(201).json({ message: "shortUrl created", Urls: Urls });
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.message });
	}
};