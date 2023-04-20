
import React, { useState } from "react";
import './../styles/App.css';
let products=[
  {name:'Apple',value:20},
  {name:'Banana',value:10},
  {name:'Neutella',value:30},
  {name:'Razor',value:5},
  {name:'CornFlakes',value:15},
  {name:'Sound Bar',value:50},
  {name:'Iphone',value:80}
]
const App = () => {
  const [budget,setBudget]=useState(0);
  return (
    <div>
        {/* Do not remove the main div */}
        <h3>Enter your budget to check available items:</h3>
        <input value={budget} onChange={(e)=>setBudget(e.target.value)} type="number"/>
        <h3>Items you can buy are in Green color</h3>
        <table className="productsList">
          {
            products.map((product)=>{
              return <tr className='product'>
                  <td>{product.name}</td>
                  <td style={{color:(product.value>budget)?"red":"green"}}>{product.value}</td>
                </tr>
            })
          }
        </table>
    </div>
  )
}

export default App
