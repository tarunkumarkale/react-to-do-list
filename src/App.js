import React, { useState } from 'react'
import OK from './OK'
import './Ap.css'


const App = () => {
const[one,setone]=useState('')
const[two,settwo]=useState([])

const first=(e)=>{
      setone(e.target.value)

}


const tarun=()=>{
    settwo((perevalue)=>{
         return [...perevalue,one]
        });
        setone('');
      };
      const trash=(index)=>{
          let eon=[...two]
          eon.splice(index,1)
           settwo(eon)
      }

  return (
<> 
             <h1 className='head'>Welcome to-do  list</h1>
<div>
  <input type="text"  onChange={(e)=>first(e)}  value={one}/>
    <button onClick={tarun}> + </button>
    
         {
          two.map((curl ,index ,arry)=> <OK  element={curl}   id={index}  del={()=>trash(index)}/> )
         }
         </div>
</>
  )
}

export default App
