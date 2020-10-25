import React,{ useState } from 'react';
// class create extends Component{
//     constructor(){
//     super()
//         this.state={
//             tick:0
//         }
//     }
//     onincrement(){
//         this.setState({
//             tick:this.state.tick+1
//         }    
//         )}
//     ondecrement(){
//         this.setState({
//             tick:this.state.tick-1
//         }    
//         )}
//     onreset(){
//         this.setState({
//             tick:0
//         }    
//         )}    
//     render(){
//     return(<div>
//     <h1>{this.state.tick}</h1>
//         <button onClick={()=>this.onincrement()}>+</button>
//         <button onClick={()=>this.ondecrement()}>-</button>
//         <button onClick={()=>this.onreset()}>Reset</button>
//     </div> 
//     )
    
// }
// }
export default function Create(){
const [counter,increement]=useState(0);
function decreementcount(){
    if(counter<=0){
        increement(counter)
    }
    else{
        increement(counter-1)
    }
}
 function reset(previous){
     increement(previous=>0)
 }
return(<div>
         <h1>{counter}</h1>
             <button onClick={()=>increement(counter+1)}>+</button>
             <button onClick={()=>decreementcount()}>-</button>
             <button onClick={(e)=>reset(e)}>Reset</button>
         </div> 
         )
}