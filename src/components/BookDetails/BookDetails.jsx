import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../Utility/AddToDb";

const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id);

    const {
        bookId: currentBookId,
        image,
        bookName,
        author,
        category,
        rating,
        publisher,
        review,
        description
    } = book;

    const handleMarkAsRead = (id) => {
        addToStoredReadList(id);
    }

    return (
        <div className="my-12 max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-primary">
                Book Details
            </h2>

            <div className="flex flex-col md:flex-row gap-10 items-start">
                {/* Image */}
                <img
                    src={image}
                    alt={bookName}
                    className="w-full max-w-sm h-96 object-contain rounded-lg shadow-md bg-base-400 p-4 mx-auto md:mx-0"
                />

                {/* Book Info */}
                <div className="space-y-4 flex-1">
                    <h3 className="text-2xl font-semibold text-primary">{bookName}</h3>
                    <p><span className="font-medium">Author:</span> {author}</p>
                    <p><span className="font-medium">Publisher:</span> {publisher}</p>
                    <p><span className="font-medium">Category:</span> {category}</p>
                    <p><span className="font-medium">Rating:</span> {rating} / 5</p>
                    <p><span className="font-medium">Book ID:</span> {currentBookId}</p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mt-6">
                        <button onClick={() => handleMarkAsRead(bookId)} className="btn bg-cyan-700 text-white hover:bg-cyan-800">
                            Mark as Read
                        </button>
                        <button className="btn bg-fuchsia-800 text-white hover:bg-fuchsia-900">
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className="mt-12">
                <h4 className="text-xl font-semibold mb-3 text-white">Description</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                    {description || "No description available for this book."}
                </p>
            </div>

            {/* Review Section */}
            <div className="mt-10">
                <h4 className="text-xl font-semibold mb-3 text-white">Review</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                    {review || "No reviews available."}
                </p>
            </div>
        </div>
    );
};

export default BookDetails;
