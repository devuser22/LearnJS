const heading1 = React.createElement(
  "h2",
  { style: { color: "red" }, id: "heading-1" },
  "React Js first line"
);

const heading2 = React.createElement(
  "h3",
  { style: { color: "green" }, id: "heading-2" },
  "Learning React JS- 2nd line "
);

const container = React.createElement("div", {}, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
