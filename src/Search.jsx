import React, { useState } from 'react';
import SearchResult from './SearchResult';
const Search=()=>{
    const [res,setRes]=useState();
    const changeEvent =(event)=>{
        const value=event.target.value;
        setRes(value);

    }
return <>
<div class="content-wrapper">
<div class="container">
<div className="col-xl-12 col-md-8 stretch-card grid-margin justify-content-center">

<input type="text" placeholder="Search Anything" class="form-control"  onChange={changeEvent}/>
</div>
<div className="col-xl-12  grid-margin text-center">
<h1>Results:</h1> <br></br>
<SearchResult name={res}/>
</div>
</div></div>
</>
}
export default Search;