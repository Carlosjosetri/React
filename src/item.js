import React from 'react'

export const Item = (props) =>{
  const {name,carnet,tarde,chaskido} = props;
  return(
     <div>
      <h4>{name}</h4>
      <span>Carnet: {carnet}  </span>
      <br></br>
      <span>Tarde: {tarde}  </span>
      <br></br>
      <span
          onClick={chaskido}
         
          >
            x
          </span>


     </div>



  )


}