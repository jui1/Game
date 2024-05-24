import React, { useState } from 'react'

const Player = ({name,symbol,activePlayer}) => {
       const [isEditing,setIsEditing]=useState(false);
       const [nameHere,setname]=useState(name);
  return (
       <li className={activePlayer===symbol?'active':''}>
       <span className="player">
       {!isEditing?<span className="player-name">
           {nameHere}
         </span>:
         <input type='text' value={nameHere.toUpperCase()} onChange={e=>setname(e.target.value)}/>}
         <span className="player-symbol">
          {symbol}
         </span>  
         <button onClick={()=>setIsEditing(!isEditing)}>{!isEditing?'Edit':'Ok'}</button>
       </span>
     </li>
  )
}

export default Player
