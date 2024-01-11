import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="w-96 h-80 flex items-center justify-evenly flex-col bg-sky-600 rounded-xl shadow-2xl shadow-sky-600 border-solid border-8 border-white overflow-hidden">
      <h1 className="text-white font-bold text-2xl">
        Welcome to my Counter App
      </h1>
      <div className="flex items-center justify-between w-3/4">
        <Link
          to="/counter"
          className="text-white font-semibold border-2 border-white rounded-md shadow-md shadow-sky-400 py-1 px-2"
        >
          Start
        </Link>
        <Link
          to="/notFound"
          className="text-white font-semibold border-2 border-white rounded-md shadow-md shadow-sky-400 py-1 px-2"
        >
          Tutorial
        </Link>
      </div>
    </div>
  );
};

export default Home;
