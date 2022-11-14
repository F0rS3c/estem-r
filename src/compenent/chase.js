import React from "react";
class Chase extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            left : '725',
            top : '380',
            pswd : ''
        }
    }


    handlePswd = (event)=> {
        let pswd = event.target.value
      
        if(pswd.length > 5){

            this.setState({pswd : 'incorrect'})

           
        
        }
    

        else
        if(pswd.length !== 'sddi4')
        this.setState({pswd})
        }
        mobe = () => {
            
            if(this.state.pswd === 'incorrect'){
            this.setState({top : (Math.random() * 800) })
            this.setState({left : (Math.random() * 400) })}
            else{

            }
    
    
        }
      
          render() {
            return (
            <div style={{marginTop:'200px'}}>
                <form>
                    <center>
                    <input class="bg-transparent  font-semibold      py-2 px-4 border border-blue-500  rounded" style={{}} onChange={this.handlePswd} value={this.state.pswd} placeholder='password'/><br></br><h6 style={{opacity : '.1'}}>hint : "sddi4"</h6><br></br>
                 
                 <input class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"  onMouseOver={this.mobe}  style={{position : 'absolute' , left : this.state.left + 'px' , top : this.state.top + 'px'}}  type="submit" value='submit' />

                    </center>
           
                    
                </form>
              
            </div>
            );
            }

    }

    export default Chase   ; 