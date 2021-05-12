import React from 'react';
const SearchResult =(props)=>{
const img =`https://source.unsplash.com/600x400/?${props.name}`;
return <><img src={img} /></>
}
export default SearchResult;