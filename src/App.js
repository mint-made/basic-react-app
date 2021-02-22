import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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

const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color green",
    value: "green",
  },
  {
    label: "A shade of blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/basic-react-app/">
        <Accordion items={items} />
      </Route>
      <Route path="/basic-react-app/list">
        <Search />
      </Route>
      <Route path="/basic-react-app/dropdown">
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/basic-react-app/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
