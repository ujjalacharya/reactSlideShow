const React = require("react");
const ReactDOM = require("react-dom");
var Show = require("./Show.js");
var shows = require("./shows.json");



ReactDOM.render(
    <div>
    <Show shows={shows} showIndex={1}/>
    </div>
    
    ,document.getElementById("root")
);