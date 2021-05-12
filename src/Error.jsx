import React from 'react';
import {NavLink} from 'react-router-dom';
const Error=()=>{
return <><div class="content-wrapper">
<div class="container">
    <h1>404 Error Page</h1>
    <h2>Sorry, This page doesn't exist</h2>
    <NavLink to='/'>Go back</NavLink>
</div></div>
</>
}
export default Error;