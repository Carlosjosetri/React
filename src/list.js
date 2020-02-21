import React from 'react';
import {Item} from './item'


export const List =(props)=>{
  return(
    <div>
    {props.peoples.map((person, index)=>{
        return <Item key={index} {...person} chaskido={()=>props.chaskido(index)}/>
    })}
   </div> 


  )

}

