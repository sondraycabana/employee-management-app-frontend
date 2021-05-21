 import React,{ useState} from 'react'
//import React from 'react'
import Home from './Components/Home'
import ListEmployeeComponents from './Components/ListEmployeeComponents';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateEmployeeComponents from './Components/CreateEmployeeComponents';
import UpdateEmployeeComponent from './Components/UpdateEmploymentComponent';
import ViewEmployeeComponent from './Components/ViewEmployeeComponent'

function App() {
  return (
    <div>
    <Router>

    
    <HeaderComponent/>
    <div className= "container">
    hello huys
          <Switch> 
          
                  <Route path = "/" exact component = {ListEmployeeComponents}></Route>
                  <Route path = "/employees" component = {ListEmployeeComponents}></Route>
                  //step 1
                  <Route path = "/add-employee/:id" component = {CreateEmployeeComponents}></Route>
                  <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                  {/*<Route path = "/update-employee/:id" component = {UpdateEmployeeComponent }></Route>*/}

          </Switch>
          
    </div> 
     <FooterComponent/>
     
    </Router>
    </div>
    
  );
}

export default App
