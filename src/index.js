const React = require("react");
const ReactDOM = require("react-dom");


// <h1>Hello World</h1>

// const App = React.createElement("h1", null, "Hello World");
// const App = <h1>Howdy Mate</h1>

var Component = function(greeting){
    return (
        <h1>How you doin!</h1>
    )
}


// ReactDOM.render(
//     React.createElement(Component),
//      document.getElementById("root")
//     );

ReactDOM.render(
    <Component />,
    document.getElementById("root")
);