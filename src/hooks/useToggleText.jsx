import { useState } from "react";

const useToggleText = () => {
  const moreBtns = document.querySelector(".hideThis");
  const [text, setText] = useState("Show More");

  const toggle = () => {
    if (text == "Show More" && moreBtns.className.includes("hidden")) {
      setText("Hide More");
      moreBtns.classList.remove("hidden");
      moreBtns.classList.add("flex");
    } else {
      setText("Show More");
      moreBtns.classList.remove("flex");
      moreBtns.classList.add("hidden");
    }
  };

  // const showMore = () => {

  // }

  return { text, toggle };
};

export default useToggleText;
