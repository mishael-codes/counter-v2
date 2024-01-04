import { useState } from "react";

function useCounter(){
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const reset = () => {
    setCount(0)
  }
  const incrementBy10 = () => {
    setCount(count + 10)
  }
  const decrementBy10 = () => {
    setCount(count - 10)
  }
  const setValue = (value) => {
    setCount(value)
  }
  

  return {count, increment, decrement, reset, incrementBy10, decrementBy10, setValue}
}

export default useCounter