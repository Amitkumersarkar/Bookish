import { FaBookOpen, FaRocket, FaChalkboardTeacher } from 'react-icons/fa';

const Service = () => {
    return (
        <div className="min-h-screen bg-base-200 px-6 py-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-primary mb-4">📚 Our Services</h2>
                <p className="text-center text-gray-600 mb-10">
                    Explore the wide range of services we offer to help you learn, grow, and succeed.
                </p>

                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {/* Service 1 */}
                    <div className="card bg-base-100 shadow-md p-6 border rounded-xl hover:shadow-lg transition">
                        <FaBookOpen className="text-5xl text-primary mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Vast Book Collection</h3>
                        <p className="text-gray-600">
                            Browse thousands of books across genres curated for readers of all interests and ages.
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className="card bg-base-100 shadow-md p-6 border rounded-xl hover:shadow-lg transition">
                        <FaRocket className="text-5xl text-secondary mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Fast & Easy Access</h3>
                        <p className="text-gray-600">
                            Search, preview, and access books anytime, anywhere with our lightning-fast platform.
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className="card bg-base-100 shadow-md p-6 border rounded-xl hover:shadow-lg transition">
                        <FaChalkboardTeacher className="text-5xl text-accent mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Expert Recommendations</h3>
                        <p className="text-gray-600">
                            Get suggestions from educators and authors tailored to your reading goals and learning journey.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
