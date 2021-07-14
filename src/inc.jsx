import React,{useState} from 'react';

const Incdec = () =>{
    
  const [num,setNum] = useState(0);

  const incNum =()=>{
     setNum(num+1) 
  }
    
  const decNum =()=>{
    if(num >0){
    setNum(num-1) 
 }
else{
    alert("Sorry,Zero Limit Reached");
 } 
}
    return(
        <>
<div className='main'>
    <div className='center'>
     <div className='heading'>
     <h1>Increment And Decrement App</h1>
     </div>
     <h1>{num}</h1>
     <div classname='btn'>
         <button className='button button1' onClick={incNum}>Increment</button>
         <button className='button button2' onClick={decNum}>Decrement</button>
     </div>
    </div>
</div>
        </>
    )
}

export default Incdec;