import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a front-end js framework",
  },
  {
    title: "Why use React?",
    content: "React is a favourite js libary under engineers",
  },
  {
    title: "Why do you use React?",
    content: "You use React by creating components",
  },
];

const App = () => {
  return (
    <div>
      <Search />
    </div>
  );
};

export default App;
