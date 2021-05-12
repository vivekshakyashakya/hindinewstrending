import { useEffect, useState } from "react";

function State() {    //create a component

  const [count,setCount] =  useState(50);   //const [count,setCount] this is array destructuring,
  // count is current value,setCount is updated value and Usestate(50) is initial value.
  // useState always define in functional component 
 useEffect(()=>{
  document.title=`You clicked me ${count} times`;
 });
  function clickme () {
setCount(count+1);
    
}
   
   return <>
    <h1>{count}</h1>
        <button onClick={clickme}>Click me</button>
    </>
}
export default State;