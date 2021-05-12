import React, { useContext } from 'react';
import {FirstName,LastName} from './App';


const ComC =()=>{
    const fname = useContext(FirstName);
const lname = useContext(LastName);
    return <>
    
    <h1>This is {fname} {lname}</h1>
    </>
}

/* this is old and lengty so we use useContext;
const ComC =()=>{
    return <>
  / <FirstName.Consumer>{(fname)=>{ return <>

    <LastName.Consumer>
       {(lname)=>{
           return <h1>This is  {fname} {lname} </h1>; 

       }}
   </LastName.Consumer>
   </>
   
   
    }}
   
   </FirstName.Consumer> 
</>
} */
export default ComC;