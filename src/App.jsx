import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Counter from "./components/counter";
import NotFound from "./components/notFound";

function App() {
  return (
    // <div className="w-screen h-screen flex flex-col items-center justify-evenly bg-sky-800">
    //   <h1 className="leading text-3xl font-bold text-white underline">Counter App</h1>
    //  <Counter />
    // </div>
    <Router>
      <div className="w-screen h-screen flex flex-col items-center justify-evenly bg-sky-800">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
