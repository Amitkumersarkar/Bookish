import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-4">
            <div role="alert" className="alert alert-error shadow-lg text-xl max-w-md w-full flex items-center justify-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">Error 404 — Page Not Found</span>
            </div>

            <p className="mt-4 text-base text-gray-500">Sorry, the page you are looking for doesn't exist or has been moved.</p>

            <Link to="/" className="btn btn-primary mt-6">Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;
