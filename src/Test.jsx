import React, { createContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import Cards from './Cards';
import sdata from './sdata';
import State from './state';
//import Gettime from './GetTime';
//import Form from './Form';
import TodoList from './TodoList';
import IncreDecre from './IncreDecre';
import Flashnews from './Flashnews';
import ComA from './ComA';
import RestApi from './RestApi1';
import { Route,  Switch } from 'react-router-dom';

const FirstName = createContext();
const LastName = createContext();
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




function App () {

    return <>
    <Header />  
    <Flashnews />
    
    <RestApi />
    <FirstName.Provider value={"Vivek Anik"}><LastName.Provider value={"Shakya"}><ComA /></LastName.Provider></FirstName.Provider>
    
    <div className="content-wrapper">
    <div className="container">
    <div className="row">
    {sdata.map( (val)=>{
 return   <Cards age={val.age} name={val.name}/>
})}
</div></div></div>

<Footer />

    </>
}
export default App;
export {FirstName,LastName};