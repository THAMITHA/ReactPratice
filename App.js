const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "thamitha do fast1"),
    React.createElement("h2", {}, "i am heading2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "thaitha do it fast1"),
    React.createElement("h2", {}, "i am heading2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("heading"));
console.log(parent);
root.render(parent);
