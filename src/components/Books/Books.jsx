import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('./booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <>
            <h2 className="text-4xl font-bold text-center mt-5 pb-5 border-b-1">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 m-6 gap-6">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </>

    );
};

export default Books;