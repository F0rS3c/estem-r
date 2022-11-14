import React from "react";

class Fetch extends React.Component {

    constructor(props){
        super(props)
        this.state = { 
            posts : []
        }
    }


    // handleCIN = (event)=> {

    //     axios.get(`https://jsonplaceholder.typicode.com/posts`)
    //     .then(res => {
    //       const posts = res.data;
    //       this.setState({posts});
    //     })
    //     }
        handelFetch = e => {
            e.preventDefault();
            const fetchData =  () => {
              
                fetch("https://jsonplaceholder.typicode.com/posts")
                .then (response => response.json())
               
                .then (response => {
                    const posts = response
                    this.setState({posts})
                    console.log(posts)
                })
                
                .catch (error => alert("Erreur :" + error));
                
                
               
            };
            fetchData();

          };

          clea = () => {
            this.setState();
          }

       
       

  


    
      
          render() {
      
          
            return (
            <div>
                <form >
                {/* <ul>
        {
          this.state.posts
            .map(posts =>
              <li key={posts.userId}>{posts.title}</li>
            )
        }
      </ul> */}

                <button onClick={this.handelFetch} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" style={{width:'100%'}}>
fetch</button>
<button onClick={this.clea} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" style={{width:'100%'}}>
clear</button>


                         
                </form>

                <div class="container mx-auto px-4 sm:px-8">
  <div class="py-8">
    <div>
      <h2 class="text-2xl font-semibold leading-tight">Fetched data</h2>
    </div>
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div
        class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
      >
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                id
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                title
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
               body
              </th>
        
           
            </tr>
          </thead>
          {this.state.posts.map((val,key)=>{
            return(
          <tbody>

            <tr>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex">
              
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                    {val.userId}

                    </p>
                    <p class="text-gray-900 whitespace-no-wrap">
                    {val.id}

                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{val.title}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{val.body}</p>
              </td>
      

            </tr>
         

          </tbody>
            )  })}
        </table>
      </div>
    </div>
  </div>
</div></div>
              
          
            );
            }

    }

    export default Fetch   ; 