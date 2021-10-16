import { Link } from "react-router-dom"
import logo from "../../images/logo.png"
import TR from "../../text_resource/text_resource_resouver"
import "./header.css"
export default function Header () {



    return (
        <> 
        <div className = "class"> 
         <img src= {logo}  />
         <div>  

         <button className = "header_button">{TR("login")}</button>
         <button className = "header_button">{TR("registation")}</button>
         <button className = "header_button">{TR("work_spaces")}</button>
         <button className = "header_button"> 0 800 300 150</button>
         <button className = "header_button"> RU</button>
         <button className = "header_button"> UA</button>
         
         </div>
       
        </div> 
          <div className = "line_blue">
           <div className = "nav_el">   
          <Link to = "/"><div className = "text_dicor">{TR('Главная')}</div></Link>
          </div>
          <div className = "nav_el"> 
          <Link to  = "/brand"><div className = "text_dicor">{TR('Бренды')}</div> </Link>
          </div>
          {/* /* <div className = "nav_el">   
           <div className = "text_dicor"><a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">{TR('Товары')}<b class="caret"></b></a></div> 
    </div> */ }
          
          <div className = "nav_el">   
          <Link to = "/dostavka">  <div className = "text_dicor">{TR('Доставка и оплата ')}</div> </Link>
          </div>
          <div className = "nav_el">   
          <Link to = "/Opt"><div className = "text_dicor">{TR('Опт')}</div></Link>
          </div>
          <div className = "nav_el">   
          <Link to = "/Kont"><div className = "text_dicor">{TR('Контакты')}</div></Link>
          </div>
          <div className = "nav_el"> 
          <div className = "text_dicor"> <a href = "https://recepty.posudy.net/"> {TR('Рецепты')}</a></div>
          </div>
       </div>

      
   </>
    )


} 
