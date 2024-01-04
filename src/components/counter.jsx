import * as Icon from "react-feather";
import useCounter from "../hooks/useCounter";
import useToggleText from "../hooks/useToggleText";

function Counter() {
  const {
    count,
    increment,
    incrementBy10,
    decrementBy10,
    decrement,
    setValue,
    reset
  } = useCounter();

  const { text, toggle } = useToggleText();

  const handleChange = (e) => {
    let value = e.target.value;
    let maxLength = e.target.maxLength;
    if (!value) {
      setValue(0);
    } else if (value.length > maxLength) {
      value = value.slice(0, maxLength);
      setValue(value);
    } else setValue(parseInt(value, 10));
  };

  return (
    <div className="w-96 h-80 flex items-center justify-evenly flex-col bg-sky-600 rounded-xl shadow-2xl shadow-sky-600 border-solid border-8 border-white">
      <p className="text-white font-bold text-2xl md:text-4xl">{count}</p>
      <div className="buttons w-full flex justify-around flex-wrap">
        <button
          className="text-white font-semibold border-2 border-white rounded-md shadow-md shadow-sky-400 py-1 px-2 active:-translate-y-1 transition-all"
          onClick={increment}
        >
          <Icon.ChevronUp />
        </button>
        <button
          className="text-white font-semibold border-2 border-white rounded-md shadow-md shadow-sky-400 py-1 px-2 active:translate-y-1 transition-all"
          onClick={decrement}
        >
          <Icon.ChevronDown />
        </button>
        <button
          className="text-white font-semibold border-2 border-white rounded-md shadow-md shadow-sky-400 py-1 px-2 active:scale-75 transition-all"
          onClick={reset}
        >
          <Icon.RotateCcw />
        </button>
        <div className="mt-4 hideThis hidden buttons w-full justify-around">
          <button
            className="text-white font-semibold border-2 border-white rounded-md shadow-md shadow-sky-400 py-1 px-2 active:-translate-y-2 transition-all"
            onClick={incrementBy10}
          >
            <Icon.ChevronsUp />
          </button>
          <button
            className="text-white font-semibold border-2 border-white rounded-md shadow-md shadow-sky-400 py-1 px-2 active:translate-y-2 transition-all"
            onClick={decrementBy10}
          >
            <Icon.ChevronsDown />
          </button>
          <input
            type="number"
            maxLength={15}
            placeholder="Enter a number"
            className="w-[44px] bg-sky-600 text-white font-semibold border-2 border-white rounded-md shadow-md shadow-sky-400 py-1 px-2 focus:outline-none"
            onChange={handleChange}
          />
        </div>
      </div>
      <button
        onClick={toggle}
        className="text-white font-semibold border-2 border-white rounded-md shadow-md shadow-sky-400 py-1 px-2 active:scale-90 transition-all"
      >
        {text}
      </button>
    </div>
  );
}

export default Counter;
