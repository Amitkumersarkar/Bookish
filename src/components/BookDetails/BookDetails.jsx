import { useParams } from "react-router-dom";

const BookDetails = () => {
    const { bookId } = useParams();
    console.log(bookId);
    return (
        <div>
            <h2>book details : {bookId}</h2>
        </div>
    );
};

export default BookDetails;