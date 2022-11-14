import React from 'react'
export default class Forme extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            name: "Default Name"
        }
    }

    render(){
        return (
            <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                <form className="mb-5">
                    <label className="block mb-2 font-bold text-gray-600">Nom : </label>
                    <input className="border border-gray-300 shadow p-3 w-full rounded mb-" type="text" value={this.state.name} onChange={(e)=> {
                        this.setState({name: e.target.value.toUpperCase()})
                    }}/>
                    {this.state.name.length < 4 &&<span style={{color: 'red'}}>Invalid Text</span>}
                </form>
            </div>
        )
    }


}