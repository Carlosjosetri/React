import React, {Component} from 'react'
import './App.css';
import {Form} from './Form'
import {List} from './list'



const initState = {
  name:"",
  tarde:"",

  carnet:""
}
class App extends Component{
  constructor(props){
        super(props);
        this.state={...initState, peoples:[]}
     
  }
    actualizadora =(event) =>{
            
      const value = event.target.value;
      const id = event.target.id
      this.setState({
            [id]:value
      })
}


   cambiosubmit = (event) =>{
      
       event.preventDefault()
       const {name,carnet,tarde} = this.state
       const peoples= [...this.state.peoples]
       peoples.push({name,carnet,tarde});
       this.setState({
             ...initState,
             peoples
       })
       

   }

   borrar = (carnet)=>{

    const peoples = this.state.peoples.filter(( 
             person, indice)=>{
      return indice!==carnet
})
    this.setState({
          ...initState,
          peoples
    })

   }


  
  render(){
        const {name, tarde, carnet, peoples}=this.state
        return(
              <div >
                    <Form name={name} carnet={carnet} tarde={tarde} actualizadora={this.actualizadora} submitcambio={this.cambiosubmit} />

                    <List peoples={peoples} chaskido={this.borrar}/>
              </div>
        )
  }
}
export default App;