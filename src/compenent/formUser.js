import React from "react"

class User extends React.Component {
    render() {
        return (
            
                                <div className="ID-card ">
                    <div className="top-row">
                        <img className="flag" src="https://www.guide-metiers.ma/wp-content/uploads/2019/02/estem.couleur-min-1200x900-cropped.png" alt="national flag" />
                        <h4 className="card-title-en">Student CARD</h4>
                    </div>
            
                        <div className="middle-row">
                        <h4 className="name-title">Name</h4>
                        <h3 className="name-en">{this.props.name}</h3>
                        </div>
            
                        <div className="bottom-row">
                        <h4 className="ID-number-title">ID No.</h4>
                        <h3 className="ID-number">{this.props.cin}</h3>
                        </div>
            
                    
                        <div className="ID-photo"></div>
                
                </div>
               
                
        )
    }
}

export default class FormUsers extends React.Component {
    constructor(props) {
        super(props)
        this.state = { users: [], name: "", cin: "" }
    }

    addUser = () => {
        const users = this.state.users
        users.push({ name: this.state.name, cin: this.state.cin })
        this.setState({ users: users })
    }

    render() {
        return (
            <div style={{margin:50}}>
                <div className="overflow-x-auto h-100 grid grid-rows-1 grid-flow-col gap-4">
                    {this.state.users.map((u, i) => <User key={i} name={u.name} cin={u.cin} />)}
                </div>
                <div>
                    <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Ajouter Nouveau Utilisateur</h2>
                    <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                        <form>
                            <div className="mb-5">
                                <label className="block mb-2 font-bold text-gray-600">
                                    Name
                                    <input className="border border-gray-300 shadow p-3 w-full rounded mb-" onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} />
                                </label>
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 font-bold text-gray-600">
                                    CIN
                                    <input className="border border-gray-300 shadow p-3 w-full rounded mb-" onChange={(e) => this.setState({ cin: e.target.value })} value={this.state.cin} />
                                </label>
                            </div>
                        </form>
                        <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg" onClick={this.addUser}>Ajouter</button>
                    </div>
                </div>
            </div>
        )
    }
}