import HeroImg from '../../assets/books.jpg';
const Hero = () => {

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={HeroImg}
                    className="max-w-m rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Great News!</h1>
                    <p className="py-6">
                        Books to freshen up your bookshelf
                    </p>
                    <button className="btn btn-primary">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;