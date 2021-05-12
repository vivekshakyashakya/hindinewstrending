import React, { useEffect, useState } from 'react';
import axios from 'axios';
 const Api1=()=>{
     const [num,setNum]=useState();
     const [name,setName]=useState();
     const [moves,setMoves]=useState();
    useEffect(()=>{
        async function getData() {
        const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        setName(res.data.name);
        setMoves(res.data.moves.length);
        console.log(res);
        }
        getData();
    });
     const clickme=(event)=>{         
         setNum(event.target.value);
     }

return <>
<div className='text-center'>
<h1>You choose value <span style={{color:'red'}}>{num}</span></h1>
<h1>My name is <span style={{color:'red'}}>{name}</span></h1>
<h1>I have <span style={{color:'red'}}>{moves}</span> Moves</h1>
<select onChange={clickme}>
    <option value='1'>1</option>
    <option value='3'>3</option>
    <option value='4'>4</option>
    <option value='5'>5</option>
    <option value='25'>25</option>
</select></div>
</>
 }
 export default Api1;