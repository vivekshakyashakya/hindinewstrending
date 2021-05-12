import React from 'react';
import {useParams} from 'react-router-dom';

/*const User = ({match} ) =>{
return <><div class="content-wrapper">
<div class="container">
    <h1>This is {match.params.name} page</h1>
</div></div></>;
} */
const User = ( ) =>{
    const {fname,lname} =useParams();
return <><div class="content-wrapper">
<div class="container">
    <h1>This is {fname} and {lname} page</h1>
</div></div></>;
} 

export default User;