import towaru from "../../images/tovary-mesyatsa_250x250.jpg"
import Demey from  "../../images/demeyere_250x250.jpg"
import Staub from  "../../images/staub-logo-600x600_250x250.jpg"
import ZWILLING from "../../images/zwilling-logo-600x600_250x250.jpg"
import Thun from "../../images/thun-logo-600x600_250x250.jpg"
import Bormioli from "../../images/bormioli-rocco-600x600_250x250.jpg"
import Risoli from "../../images/risoli-loogo-600x600_250x250.jpg"
import BSF from "../../images/bsf-logo-600x600_250x250.jpg"
import Ballarini from "../../images/ballarini_250x250.jpg"
import RCR from "../../images/rcr_250x250.jpg"
import Inperia from "../../images/imperia-logo-600x600_250x250.jpg"
import Frabosk from "../../images/frabosk-logo-600x600_250x250.jpg"
import "./brand.css"
import { Link } from "react-router-dom"
export default function Brand () {

   document.querySelector("#camera_wrap_196")
    return (  
   
   <>
<div>
 <Link to = "/" > <h4 href = "" className = "title"> Бренды</h4> </Link>
 


</div>

 <div className = "brands">
<div className = "ded">
<div className = "hover"> <a> Товары месяца </a>
   <img src={towaru} alt="" /> </div>

   <div className = "hover"> <a>Demeyere </a>
   <img src={Demey} alt="" /> </div>


   <div className = "hover"> <a> Staub </a>
   <img src={Staub} alt="" /> </div>

   </div>
   <div className = "dee">
   <div className = "hover"> <a> ZWILLING J.A HENCKELS</a>
   <img src={ZWILLING} alt="" /> </div>


   <div className = "hover"> <a> Чешский фарфор Thun</a>
   <img src={Thun} alt="" /> </div>


   <div className = "hover"> <a>Bormioli Rocco </a>
   <img src={Bormioli} alt="" /> </div>
   </div>
<div className = "dad">
   <div className = "hover"> <a>Risoli </a>
   <img src={Risoli} alt="" /> </div>


   <div className = "hover"> <a>BSF </a>
   <img src={BSF} alt="" /> </div>


   <div className = "hover"> <a>Ballarini </a>
   <img src={Ballarini} alt="" /> </div>
   </div>
<div className = "daa">
   <div className = "hover"> <a>Итальянский хрусталь RCR </a>
   <img src={RCR} alt="" /> </div>


   <div className = "hover"> <a>Лапшерезки Inperia </a>
   <img src={Inperia} alt="" /> </div>


   <div className = "hover"> <a>Frabosk </a>
   <img src={Frabosk} alt="" /> </div>

   </div>
 </div>
</>
    )
   }