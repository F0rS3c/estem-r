import React from "react";

export default class Demo extends React.Component {
    constructor(props){
        super(props)
        this.state = { date : new Date() , color : 'red' , hide : 'none'}
        }
        alertt = () => {
            
            alert(this.state.date.toISOString())
        }
        changeColor = () => {
                this.setState({color:'green'})
        }
        changeColorr = () => {
            this.setState({color:'red'})
    }

    occ = () => {
      
        if(this.state.hide === 'none'){
            this.setState({hide:''})
        }
        else {
            this.setState({hide:'none'})
        }
    }

   
        render() {
            return (
                <div>
                    <center>
                    <h1 onMouseOver={this.changeColor} onMouseLeave={this.changeColorr} style={{color : this.state.color }} >{this.state.date.toISOString()}</h1>

                    </center>
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" style={{width:'100%'}}onClick ={this.alertt}>Afficher</button>
  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" style={{width:'100%'}} onClick={this.occ}>Toggle</button>
  <h1 style={{display : this.state.hide}}>Id anim anim id veniam fugiat elit do voluptate. Nostrud ad culpa duis sint deserunt. Eiusmod dolor magna proident mollit velit non tempor commodo. Adipisicing sit enim excepteur adipisicing do nisi Lorem pariatur tempor proident duis. Ex in pariatur adipisicing mollit aute est tempor qui occaecat amet id officia labore non.

Ex pariatur proident amet irure laboris incididunt est Lorem ut quis laborum. Ad qui non commodo voluptate nulla velit eu qui incididunt nostrud dolor. Enim dolore dolore commodo qui non sint do velit non ullamco magna sint sint. Ea tempor ullamco non duis exercitation excepteur anim dolore anim. Eiusmod aute eu nostrud dolore deserunt veniam nisi quis amet irure quis velit. Eiusmod incididunt laboris ullamco ut ipsum. Nulla tempor aliqua Lorem incididunt minim consequat ea aliquip dolore proident aliqua.</h1>

      

                </div>
                );
      
        } 
    }