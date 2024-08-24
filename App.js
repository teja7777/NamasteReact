import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [
            React.createElement("h1", { key: "t1" }, "I am Heading-1"),
            React.createElement("h1", { key: "t2" }, "I am Heading-2")
        ]
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);