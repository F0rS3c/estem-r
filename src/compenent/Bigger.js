import React from "react";
class Bigger extends React.Component {
    constructor(){
        super();
        
        this.state = {
            big : 12
        }
        }
        increment = () => {
        this.setState({big : this.state.big+1})
        }
        render() {
        return (
        <div>
            <button class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" style={{width:'100%'}} value="Increment" onClick = { this.increment}>Increment</button>
      <center>
      <h1 style={{fontSize: this.state.big}}>make me bigger</h1>
        </center> 
        </div>
        );
        }
    }
    export default Bigger   ; 