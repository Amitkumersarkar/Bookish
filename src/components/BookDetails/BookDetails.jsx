import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const { bookId } = useParams();
    const data = useLoaderData();
    const book = data.find(book => book.bookId === bookId)
    console.log(book);
    return (
        <div>
            <h2>book details : {bookId}</h2>
        </div>
    );
};

export default BookDetails;