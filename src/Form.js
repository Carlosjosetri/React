import React from "react";

export const Form = props=>{
  const{name,carnet,tarde,actualizadora,submitcambio} = props;
  return (
      <div>
  <form onSubmit={submitcambio}>
   <input placeholder="Nombre" value={name} id="name" onChange={actualizadora} />
   <input value={carnet} placeholder="Carnet" id="carnet" onChange={actualizadora} />
   <input value={tarde} placeholder="tarde?" id="tarde" onChange={actualizadora} />
            <button type="submit" >Guardar</button>



  </form>




  </div>
  )
  

}