
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  const [amount,setamount]=useState(0);
  const [rate,setRate]=useState(0);
  const [year,setYear]=useState(0);
  const [interest,setInterest]=useState(0);

  function calculate(e){
      const output=amount*rate*year/100;
      setInterest(output)
  }
  function reset(e){
        setInterest(0);
        setamount(0);
        setRate(0);
        setYear(0);
  }

  console.log(amount,year,rate);
  return (
    <div className="App ">
       <div className="container">
      <div className="header"><h1>INTEREST CALCULATOR</h1>
      </div>
      <hr/>
      <div className="total">
      <h1> &#8377; {interest}</h1>
      <p>Your Total Interest</p>
     </div>
     
    <form id='in' >
    <div className="input">
    <TextField value={amount||''} style={{marginTop:'27px',marginBottom:'10px',width:'100%'}} id="outlined-basic" onChange={(e)=>setamount(e.target.value)} label="Amount" variant="outlined"/><br/>
    <TextField value={rate||''} onChange={(e)=>setRate(e.target.value)}  style={{marginBottom:'10px',width:'100%'}}  id="outlined-basic2" label="Rate" variant="outlined" /><br/>
    <TextField value={year||''} onChange={(e)=>setYear(e.target.value)}  style={{marginBottom:'10px',width:'100%'}}  id="outlined-basic3" label="Year" variant="outlined" /><br/>
    <Button onClick={(e)=>calculate(e)}  style={{marginBottom:'10px',marginRight:'10px'}}  variant="contained">Calculate</Button>
    <Button onClick={(e)=>reset(e)} style={{marginBottom:'10px'}}  variant="outlined">Reset</Button>
      </div>
    </form>
     </div>
     
  </div>
    
    
  
  
  );
}

export default App;
