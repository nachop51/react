// import React, { useState } from "react";
import React from "react";
// import Accordion from "./Accordion";
// import Search from "./Search";
// import Dropdown from "./Dropdown";
import Translate from "./Translate";

// const items = [
//   {
//     title: "What is React?",
//     content: "React is a front end javascript framework",
//   },
//   {
//     title: "Why use React?",
//     content: "React is a favorite JS library among engineers",
//   },
//   {
//     title: "How do you use React?",
//     content: "You use React by creating components",
//   },
// ];

// const options = [
//   {
//     label: "The Color Red",
//     value: "red",
//   },
//   {
//     label: "The Color Green",
//     value: "green",
//   },
//   {
//     label: "A Shade of Blue",
//     value: "blue",
//   },
// ];

const App = () => {
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <React.Fragment>
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button> */}
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* {showDropdown ? (
        <Dropdown
          label="Select a color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}
      {/* <h3 style={{ color: selected.value }}>This text is {selected.value}!</h3> */}
      {/* <Translate /> */}
      <Translate />
    </React.Fragment>
  );
};

export default App;
