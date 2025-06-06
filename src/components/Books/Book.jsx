import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const {
        bookId,
        image,
        bookName,
        author,
        category,
        review,
        tags,
        publisher,
        yearOfPublishing
    } = book;

    return (
        <div className="card w-96 bg-base-100 shadow-md">
            <Link to={`/books/${bookId}`}>
                <figure className="h-96 bg-base-400 flex items-center justify-center p-4">
                    <img
                        src={image}
                        alt="book"
                        className="w-full h-full object-contain"
                    />
                </figure>
            </Link>

            <div className="card-body space-y-3">
                <Link to={`/books/${bookId}`}>
                    <h2 className="card-title text-xl font-bold text-primary">
                        {bookName}
                        <span className="badge badge-secondary">NEW</span>
                    </h2>
                </Link>

                <div className="space-y-1">
                    <p className="text-sm text-gray-500"><span className="font-semibold">Author:</span> {author}</p>
                    <p className="text-sm text-gray-500"><span className="font-semibold">Publisher:</span> {publisher}</p>
                    <p className="text-sm text-gray-500"><span className="font-semibold">Published:</span> {yearOfPublishing}</p>
                </div>

                <div className="rating">
                    <input type="radio" name={`rating-${bookId}`} className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                    <input type="radio" name={`rating-${bookId}`} className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                    <input type="radio" name={`rating-${bookId}`} className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                    <input type="radio" name={`rating-${bookId}`} className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                    <input type="radio" name={`rating-${bookId}`} className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                </div>

                <p className="text-sm text-gray-600">{review}</p>

                <div className="card-actions justify-end flex-wrap gap-2 mt-2">
                    <span className="badge badge-outline">{category}</span>
                    <span className="badge badge-outline">{tags}</span>
                </div>
            </div>
        </div>
    );
};

export default Book;
