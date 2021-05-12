import { useState } from "react";

const Gettime = ()=> {
    
let gettime = new Date().toLocaleTimeString();
const [time, setTime ] = useState(gettime);
let bg ='#ff0000';
const [cbg,setbg] = useState(bg);

const clickTime = () => {
    gettime = new Date().toLocaleTimeString();
    setTime(gettime);
     bg ='#00ff00';
    setbg(bg);

}  
//setTimeout(function(){ setTime(gettime); }, 1000);
return <>
<div className="box col-md-6 col-sm-12" style={{float:'left',backgroundColor:cbg}}>
<h1>Time:{time}</h1>
<button onClick={clickTime}>Get Time</button>
</div>
</>
}
export default Gettime;