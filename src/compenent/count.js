import React from "react";

export default class Count extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:1,
            size: 10 
        }
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
        this.setState({size:this.state.size+1})
    }
    render(){
        return(
            <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
            <h1 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10" style={{fontSize : this.state.size}}>
                {this.state.count}
                </h1>
                <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg" onClick={this.increment}>
                    increment
                </button>
            </div>
        )
    }
} 