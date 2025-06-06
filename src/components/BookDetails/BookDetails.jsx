import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const { bookId } = useParams();
    const data = useLoaderData();
    console.log( data);
    return (
        <div>
            <h2>book details : {bookId}</h2>
        </div>
    );
};

export default BookDetails;