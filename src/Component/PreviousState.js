import React, { useState } from 'react'

function PreviousState() {
    const [count, setCount] = useState(0);
    const increamentFive = () => {
        for (let i = 0; i < 5; i++){
            setCount(prev => prev +1)
        }
    }
  return (
      <div>
          <input type='text' value={count}/>
          <button onClick={()=>setCount(0)}>reset</button>
          <button onClick={() => setCount(count+1)}>Increament</button>
          <button onClick={() => setCount(count-1)}>Decreament</button>
          {/* <button onClick={() => setCount(count + 5)}>Increament 5 step</button> */}
          <button onClick={increamentFive}>Increament 5 step</button>
        </div>
  )
}

export default PreviousState