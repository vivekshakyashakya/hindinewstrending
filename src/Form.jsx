import React, { useState } from 'react';
const Form =()=> {
    const state=useState();
    //console.log(state);
const [name,setName] = useState({
   fname : '',
   email : '',
   phone : '',
   msg : '',
});

//const [fullname,setfullname]=useState();


const onsubmits=(event)=>{
event.preventDefault();
//setfullname(name);
} 
 const inputEvent=(event)=> {
     const name= event.target.name;
     const value= event.target.value;
    setName((preval)=>{
      // now we use short and new method, usind spread operator
      console.log([name]);
     return {
        ...preval, // its fetch previous object which we are passing
        [name]:value  // set values
        

     }
     

      // this is old method
      /*  if(name =='fName') {
        return {
            fname : value,
            email : preval.email,
            phone : preval.phone,
        }
       }
      else if(name =='email') {
        return {
            fname : preval.fname,
            email : value,
            phone : preval.phone,
        }
       }
      else if(name =='phone') {
        return {
            fname : preval.fname,
            email : preval.email,
            phone : value,
        }
       } */
     

    });
 }

return <>
<form onSubmit={onsubmits}>
<h1>Name:{name.fname}, Email: {name.email}, Phone: {name.phone}, Msg: {name.msg} </h1>
Name: <input type="text" placeholder="Name" name="fname" onChange={inputEvent}  />
Email: <input type="text" placeholder="Email" name="email" onChange={inputEvent}/>
Phone: <input type="text" placeholder="Phone" name="phone" onChange={inputEvent} />
Message: <input type="text" placeholder="Message" name="msg" onChange={inputEvent} />
<br />
<button type="submit">Submit</button>
</form>
</>
}
export default Form;