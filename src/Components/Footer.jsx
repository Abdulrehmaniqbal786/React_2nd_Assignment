import { Logo } from "./Logo";
const Footer = () => {
    return<div className="foot">
    <div className="col1">
        <div className="fool">
      <Logo/> 
      </div>
        <h4>Follow us:</h4>
        <img width='25px' src="src/assets/facebook.jpg" alt="" /> 
        <img width='25px' src="src/assets/pintrest.jpg" alt="" /> 
        <img width='25px' src="src/assets/twitter.jpg" alt="" /> 
        <img width='25px' src="src/assets/Vimeo.jpg" alt="" /> 
     </div>
     
     
     <div className="col2">
      <h4>USEFUL LINK</h4>
        <h5> Shopping Cat</h5>
        <h5>WIshlist</h5>
        <h5>Chekout</h5>
       <h5> Support</h5>
     </div>
     

     <div className="col3">
      <h4>ABOUT US</h4>
        <h5>About</h5>
        <h5>Products</h5>
        <h5>Terms and conditions</h5>
       <h5>Help Center</h5>
     </div>
     
     <div className="col4">
      <h4>NEWSLETTER</h4>
        <h5>Subscribe to get all new updates</h5>
        <input className="input" placeholder="Enter your email" type="text" />
        <img className="one" width='18px' src="src/assets/searchicon.jpg" alt="" />
       
     </div>

    
    
    
    
    
    </div>
        
   
    
    
   
    

    
}

export {Footer};