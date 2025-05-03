import Url from "../models/url.model.js";
import { nanoid } from "nanoid";


export const createShortUrl = async (req, res) => {
	try {
		const OriginalUrl = req.body.originalUrl;
		if (!OriginalUrl) {
			return res.status(400).json({ message: "OriginalUrl is required" });
		}
		const id = nanoid(4);
		const shortUrl = await Url.create({ url: OriginalUrl, shortCode: id });
		res.status(201).json({ message: "shortUrl created", shortUrl: shortUrl });
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const updateShortUrl = async (req, res) => {
	try {
		const { id } = req.params;

		if (!id) {
			return res.status(400).json({ message: "ID required" });
		}

		const newCode = nanoid(4);
		const updatedUrl = await Url.findByIdAndUpdate(id, { shortCode: newCode });

		if (!updatedUrl) {
			return res.status(404).json({ message: "Short URL not found" });
		}

		res.status(200).json({ message: "URL updated", shortCode: newCode });
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const deleteShortUrl = async (req, res) => {
	try {
		const { id } = req.params;

		const deletedUrl = await Url.findByIdAndDelete(id);

		if (!deletedUrl) {
			return res.status(404).json({ message: "Short URL not found" });
		}

		res.status(204).send();
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.message });
	}
};


export const getAllUrl = async (req, res) => {
	try {
		const Urls = await Url.find();
		res.status(200).json({ message: "shortUrl created", Urls: Urls });
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.message });
	}
};