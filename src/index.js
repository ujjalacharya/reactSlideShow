const React = require("react");
const ReactDOM = require("react-dom");
var Show = require("./Show.js");
var shows = require("./shows.json");



ReactDOM.render(
    <div>
    <Show show={shows[0]}/>
    <Show show={shows[1]}/>
    <Show show={shows[2]}/>
    </div>
    
    ,document.getElementById("root")
);