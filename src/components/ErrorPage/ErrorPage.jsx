import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-4xl font-bold text-[#FF444A]">Page Not Found</h2>
        <p className="mt-4 text-lg font-medium text-gray-700">Sorry, the page you are looking for doesn't exist.</p>
        <Link
          to="/"
          className="mt-8 px-4 py-2 bg-[#FF444A] font-bold text-white rounded-full hover:bg-[#c92d33] transition duration-300 ease-in-out"
        >
          Go Back to Home
        </Link>
      </div>
    );
};

export default ErrorPage;