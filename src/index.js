const React = require("react");
const ReactDOM = require("react-dom");
var createClass = require('create-react-class');



// var Component = function (props) {
//     //   var style = {
//     //       color: props.color
//     //   }
//     return (
//         <div style={{ color: props.color }}>
//             <h1>{props.greeting}</h1>
//         </div>
//     )
// }
var Component = createClass({
    getInitialState: function(){
        return{
            color: 'blue'
        }
    },

    handleButtonClick: function(){
        this.setState(function(prevState){
           console.log(prevState)
           return {
               color: (prevState.color === 'blue' ? 'green' : 'blue')
           }
        })
    },

    render: function(){
        return (
                   <div>
                        <div style={{ color: this.state.color }}>
                        <h1>{this.props.greeting}</h1>
                     </div>

                     <button onClick={this.handleButtonClick}>Click Me!</button>
                   </div>
        )
    }
})




ReactDOM.render(
    <div>
        <Component greeting='Hey there Delialh'/>
    </div>
    ,document.getElementById("root")
);