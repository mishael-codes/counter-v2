import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-red-800">
      <div className="w-96 h-80 flex items-center justify-evenly flex-col bg-red-600 rounded-xl shadow-2xl shadow-red-600 border-solid border-8 border-white overflow-hidden text-white text-center">
        <h1 className="text-4xl">ERROR 404</h1>
        <p>Page Not Found</p>
      </div>
      <Link to="/" className="text-white font-semibold border-2 border-white rounded-md shadow-md shadow-red-400 py-1 px-2 mt-8">Home</Link>
    </div>
  );
};

export default NotFound;
