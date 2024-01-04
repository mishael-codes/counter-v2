import Counter from "./components/counter"

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-evenly bg-sky-800">
      <h1 className="leading text-3xl font-bold text-white underline">Counter App</h1>
     <Counter />
    </div>
  )
}

export default App
