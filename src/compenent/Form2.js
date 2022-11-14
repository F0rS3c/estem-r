import React from "react";
class Form2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : "", 
            cin : ""
        }
    }

    handle_name=(e)=>{
        let name=e.target.value;
        let UpperName=name.toUpperCase()
        this.setState({
            name: UpperName
            
        })
    }
    handle_cin=(e)=>{
        let cin=e.target.value;
        if(cin.length > 8 ){
            this.setState({cin : "cin invalid"})
        }
        else{
            this.setState({cin : cin})
        }
    }
    render(){
        return(
            <form className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2" >
                <label className="block mb-2 font-bold text-gray-600">
                    nom:
                </label>
                <input className="border border-gray-300 shadow p-3 w-full rounded mb-" type="text" value={this.state.name} onChange = {this.handle_name} />
                <label className="block mb-2 font-bold text-gray-600">
                    CIN:
                </label>
                <input className="border border-gray-300 mg-3 shadow p-3 w-full rounded mb-" type="text" value={this.state.cin} onChange =  {this.handle_cin}/>
                <br/>
                <input className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg" type="submit" value="submit"/>
                                </form>
                

        )
    }
}
export default Form2;