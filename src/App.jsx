import './App.css';
import { Bestsell } from './Components/Bestsell';
import { Links } from './Components/Links';
import { Logo } from './Components/Logo';
import { Shopbtn } from './Components/Shopbtn';
import { Sliderimg } from './Components/Sliderimg';
import { Winter } from './Components/Winter';
import { Second } from './Components/second';
import {All} from './Components/All'
import { Footer } from './Components/Footer';
import { Scdfooter } from './Components/Scdfooter';





const Website = () => {
  return <>
  
  <div className='nav'>
  <Logo />
  <Links/>
  
</div>
<Sliderimg/>
<Shopbtn label='SHOP NOW'/>


 
<div className='level2'>
<Second/>
</div>

<h1 className='level2h'>Premium Home<br/>Decorator</h1>
<a className='an' href="#">LEARN MORE</a>
  

  <div className='level3'>
  <h1>Best Sell</h1>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
     Lorem Ipsum has been the industry's standard dummy text</p>

  </div>
  <Bestsell />

<div className='level4'>
<Winter />
</div>

<div className='level5'>
<h1>All Products</h1>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting<br/> industry.
 Lorem Ipsum has been theindustry's standard dummy text</p>

</div>
<Bestsell/>

<All/>

<div className='footer'>
<Footer/>

<Scdfooter/>
</div>





  </>
 
}

export default Website;