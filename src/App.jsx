import React, { createContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import Cards from './Cards';
import sdata from './sdata';
import Flashnews from './Flashnews';
import { Route,  Switch } from 'react-router-dom';
import Home from './Home';
import Magazine from './Maganize';
import Business from './Business';
import User from './User';
import Search from './Search';
import Error from './Error';

function App () {

    return <>
    <Header />  
    <Flashnews /> 
   <Switch>
       <Route exact path="/" component={Home}></Route>
       <Route  exact path="/magazine" render={()=><Magazine name='MagaZine'/>}></Route> {/*  passing props using render*/ }
       <Route path="/business" component={()=><Business name='Business Page' />}></Route>{ /* passing props using component but every time create new component while render does once so render is good */}
      <Route path='/user/:fname/:lname' component={User}></Route>
      <Route exact path='/search' component={Search}></Route>
      <Route component={Error}></Route>
   </Switch>

<Footer />

    </>
}
export default App;
