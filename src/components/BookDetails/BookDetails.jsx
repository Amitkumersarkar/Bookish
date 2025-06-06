import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id)
    console.log(book, data, bookId, id);

    const { bookId: currentBookId, image, bookName, author, category, rating, publisher } = book;
    return (
        <div className="my-12">
            <h2 className="text-xl mb-5 font-semibold">book details : {bookId}</h2>
            <img className="w-48" src={image} alt="" />
            <br />
            <div>
                <h2>{currentBookId}</h2>
                <h2 className="font-bold">Book Name : {bookName}</h2>
                <p className="font-semibold">Author : {author}</p>
                <p>Publisher : {publisher}</p>
                <p>Category : {category}</p>
                <p>Rating : {rating}</p>

            </div>
            <br />
            <button className="btn btn-ghost bg-cyan-700 text-white mb-7 mr-5">Read</button>
            <button className="btn btn-ghost bg-fuchsia-800 text-white mb-7">WishList</button>
        </div>
    );
};

export default BookDetails;