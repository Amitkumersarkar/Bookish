import { NavLink } from 'react-router-dom';
import HeroImg from '../../assets/books.jpg';

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col-reverse lg:flex-row justify-between gap-10 px-4 lg:px-20">
                {/* Text Section */}
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-4">
                        Great News for Book Lovers!
                    </h1>
                    <p className="py-4 text-lg text-gray-700">
                        Discover new titles and freshen up your bookshelf with hand-picked recommendations just for you.
                    </p>
                    <NavLink to='/viewthelist'>
                        <button className="btn btn-primary btn-lg mt-4">
                            View The List
                        </button>
                    </NavLink>
                </div>

                {/* Image Section */}
                <img
                    src={HeroImg}
                    alt="Books"
                    className="w-full max-w-md lg:max-w-xl rounded-lg shadow-2xl object-cover"
                />
            </div>
        </div>
    );
};

export default Hero;
