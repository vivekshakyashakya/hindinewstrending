import React, { useEffect, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
const InDe =()=>{
    const [num,setNum]=useState(0);
    useEffect(()=>{
        alert('Clicked');
    });
    const Increment=()=>{
        setNum(num+1);
      
    }
    const Decrement=()=>{
        if(num>0){
            setNum(num-1);
        }
        
    } 
    return <>
     <div className="box col-md-6 col-sm-12" style={{float:'left'}}>
    <h1>{num}</h1>
    <div className="box col-md-6 col-sm-12" style={{float:'left'}}><button className="btn btn-success">Hello</button><Button  onClick={Increment} ><AddIcon/></Button></div>
    <div className="box col-md-6 col-sm-12" style={{float:'left'}}><Button onClick={Decrement}><RemoveIcon/></Button></div>
    </div>
    </>

}
export default InDe;