import { useState } from 'react';
import './App.css';
import Soon from './images/Image-Coming-Soon.jpg'
import Header from './components/header/header';
import TR from './text_resource/text_resource_resouver';
import End from './components/end/end';
import Brand from './components/brands/brand';
import { BrowserRouter as Router, Switch , Route, Link } from 'react-router-dom';
import Opt from './components/brands/opt';
import Dostavka from './components/brands/dostavka';
import Kont from './components/brands/Kont';
import Main from './components/header/main';
function App() {
  return (
<div className = "App" >
<Router>
   <Header> </Header>
   <Switch>
        
           <Route exact path="/main">
            <img src = {Soon} alt = "404"  />
          </Route>
             <Route path="/brand" >
             <Brand/>
             </Route>
         


          
        
           
              <Route  path = "/dostavka">
                <Dostavka/>
              </Route>
          



           
              <Route  path = "/opt">  
                 <Opt/>
              </Route>


           
              <Route  path = "/kont">  
                 <Kont/>
              </Route>

   
        </Switch>
  
   <End> </End>
   
 </Router>
    </div>
  );
}

export default App;
