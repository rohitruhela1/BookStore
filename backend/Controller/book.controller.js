import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
    try {
        const books = await Book.find();  // Corrected to `books` for consistency in naming
        res.status(200).json(books);
    } catch (error) {
        console.log("Error: ", error);  // Corrected the semicolon placement
        res.status(500).json({ message: "Server Error" });
    }
};
