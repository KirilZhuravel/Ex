import "./end.css"
import TR from "../../text_resource/text_resource_resouver"

 export default function End () {


  return (  

     <>
     <div className = "well">
       <div className = "done">
     <h5> В помощь покупателю
</h5>
    <p className ="p">Проверить статус заказа</p>
     <p className ="p" >Оплата и доставка</p>
     <p className ="p">  Возврат и обмен</p>
    <p className ="p">Гарантия</p>
   <p className ="p">Инструкции</p>
   </div>
   
   <div className = "done">
     <h5>Контакты
</h5>
   
     <p className ="p">0 (800) 300-150</p>
     <p className ="p"> 068 505 13 01</p>
    <p className ="p" >068 505 13 03</p>
   <p className ="p_">mailer@posudy.net</p>
   </div>
   
   <div className = "done_2">
     <h5> Способы оплаты
</h5>
    <p>У нас вы можете производить
оплату заказов всеми наиболее
популярными способами</p>
   
   </div>
     </div>

       <div className ="end_box" >
        <a>©2007-{new Date ().getFullYear()} {TR(" Всеукраинский интернет-магазин посуды.net")}</a>
        <a>{TR("Официальный представитель торговых марок Staub, Zwilling J.A. Henckels, Risoli, Thun, Bormioli Rocco, Frabosk, Imperia, BergHOFF и Cook/Co на територии Украин")}</a>
        <a>{TR("Бесплатная доставка в Киев, Львов, Днепропетровск, Одессу, Харьков, Запорожье, Ровно и Ивано-Франковск")}</a>
       </div>
 </>
  )
 }
