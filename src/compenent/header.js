import React from "react";
import {
  Route,
  NavLink,
  HashRouter,
  useNavigate
} from "react-router-dom";

function Header(){
  return(

    <div>
<header>
     <nav
        class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
      >
       <div>
          <NavLink to="/">
            <img
          
              width="150"
              height="32.125"
              src="https://www.guide-metiers.ma/wp-content/uploads/2019/02/estem.couleur-min-1200x900-cropped.png"
            />
          </NavLink>
        </div>
    
       
       <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            class="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
         
            <li>
              
            <NavLink className="md:p-4 py-2 block hover:text-purple-400  " to="/fetch"> fetch </NavLink>
            
            </li>
            <li>
              
              <NavLink className="md:p-4 py-2 block hover:text-purple-400  " to="/chase"> chase </NavLink>
              
              </li>
              <li>
              
              <NavLink className="md:p-4 py-2 block hover:text-purple-400  " to="/Bigger"> Bigger </NavLink>
              
              </li>
              <li>
              
              <NavLink className="md:p-4 py-2 block hover:text-purple-400  " to="/demo"> demo </NavLink>
              
              </li>
              <li>
              
              <NavLink className="md:p-4 py-2 block hover:text-purple-400  " to="/form"> Form </NavLink>
              
              </li>
              <li>
              
              <NavLink className="md:p-4 py-2 block hover:text-purple-400  " to="/Formuser"> FormUser </NavLink>
              
              </li>

              <li>
              
              <NavLink className="md:p-4 py-2 block hover:text-purple-400  " to="/Form2"> Form2 </NavLink>
              
              </li>
              <li>
              
              <NavLink className="md:p-4 py-2 block hover:text-purple-400  " to="/count"> count </NavLink>
              
              </li>
           
            
          </ul>
        </div>
    </nav>
  </header>
      </div>
  )
}
  
    
    
    export default Header ;
