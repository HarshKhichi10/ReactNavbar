import React, { Component } from 'react'
import { MenuItem }from './MenuItem'
import  './Navbar.css'
import Button from '../Button'
class Navbar extends Component {
    
    state = { clicked :false }
   clickHandle= ()=>{

    this.setState({ clicked : !this.state.clicked })

   }
        
    render() {
        return (
            <div>
             <nav>
                 <div className="Navbar-items"> 
                <h1 className='navbar-logo'>  React  <i class="fa fa-react" aria-hidden="true" id="nextbtn"></i> </h1>
            
            
                    <div className="menu-icon" onClick={this.clickHandle}>
                        <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'} aria-hidden="true" > </i> 
                     </div>  
                      
                <ul classname={(this.state.clicked) ? 'nav-links active' : 'nav-links'}>
                 {MenuItem.map((item,index) =>{
                     return(
                    <li > <a className={item.cName} href={item.url}> {item.title} </a></li>
   
                     )

                 })}
                    
                </ul>
                <Button> Sign Up</Button>
                </div>

                 </nav>       
            </div>
        )
    }
}


export default  Navbar