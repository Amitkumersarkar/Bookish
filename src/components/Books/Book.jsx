import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, image, bookName, author, category, review, tags, publisher, yearOfPublishing } = book;

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <Link to={`/books/${bookId}`}>
                <figure>
                    <img className="h-[500px]" src={image} alt="book" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                </div>
            </Link>
            <div className="card-body pt-0">
                <h2 className="text-xl">{author}</h2>
                <h3>{publisher}</h3>
                <p>{yearOfPublishing}</p>
                <div className="rating">
                    <input type="radio" name={`rating-${bookId}`} className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                    <input type="radio" name={`rating-${bookId}`} className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                    <input type="radio" name={`rating-${bookId}`} className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                    <input type="radio" name={`rating-${bookId}`} className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                    <input type="radio" name={`rating-${bookId}`} className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                </div>
                <p className="mt-4">{review}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    <br />
                    <div className="badge badge-outline">{tags}</div>
                </div>
            </div>
        </div>
    );
};

export default Book;
