"use client"
import { useState } from "react";
export default function Home() {
  const [counter, setCounter] = useState(0)
  const incr=(kitna=1)=>{
    setCounter(counter +kitna)
  }
  const decr=(kitna= 1)=>{
    setCounter(counter - kitna)
  }
  return (
    <><h1>COUNTER APP</h1>
     <button onClick={()=>incr(3)}> INCREMENT 3</button>
     <button onClick={()=>incr(2)}> INCREMENT 2</button>
     <button onClick={()=>incr()}> INCREMENT 1</button>{counter}
      <button onClick={()=>decr()}>DECREMENT 1</button>
      <button onClick={()=>decr(2)}>DECREMENT 2</button>
      <button onClick={()=>decr(3)}>DECREMENT 3</button>
    </>
  );
}