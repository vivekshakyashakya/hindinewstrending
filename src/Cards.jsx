import React from 'react';
function Cards(props) {
   // console.log(props);
    return <>
    
    <div className="box col-md-6 col-sm-12">
        <h1>Name: {props.name}</h1>
        <h2>Age: {props.age}</h2>
    
    </div>
   
    </>
}
export default Cards;