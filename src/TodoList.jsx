import React, { useState } from 'react';

const TodoList =()=>{
    const [list,setList] = useState("");
    const [Items,setItems] =useState([]);

const eventInput =(event)=>{
    let value=event.target.value;
    setList(value);

}
const clickbtn =(event)=>{   
    setItems((itemval)=>{
        return [...itemval,list];
    });
    setList('');
    
}
const removeitem =(index)=>{
    setItems((itemv)=>{
        return  itemv.filter((ivalue,id)=>{    return index!==id;  } )
    })
  
    
    
}

return <>
 <div className="box col-md-6 col-sm-12" style={{float:'left'}}>
    <input type="text" name="namebox" onChange={eventInput}  value={list} /> <button type="submit" onClick={clickbtn}>Add</button>
    <ul style={{textAlign:'left'}}>
       { Items.map( (valitem, ind) => { 
        return <li id={ind}>{valitem}    <span id={ind} style={{color:'red', cursor:'pointer'}} onClick={()=>removeitem(ind)}>remove</span></li>;
       } ) } 
    </ul>
    </div>
</>
}
export default TodoList;