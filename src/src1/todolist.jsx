import React,{useState,useEffect} from 'react';
export default function List(){
    const [list1,push]=useState('');
    const [data,put]=useState([]);
    function display(value){
            put(data=>[...data,value]);
        };
    // function ComponentExample() {
    //         useEffect(() => {
    //             return () => {
    //                 console.log('component unmounted')
    //             }
    //         }, [data])
    //     }    
    function Delete(s){
        let value=s.target.value;
        let filteredvalues=data.filter((e)=>!(value==e))
        put(filteredvalues);
    }
    function search(value){
        let filteredvalues=data.filter((e)=>value.toLowerCase()==e.toLowerCase());
        put(filteredvalues);
    }
return(
    <>
    <input type="text" name="title" value={list1} onChange={(e)=>{push(e.target.value)}}/>
    <button onClick={()=>display(list1)}>Send</button>
    <button onClick={()=>{search(list1)}}>search</button>
    {/* <button onClick={()=>ComponentExample()}>Unmount</button> */}
    {data.map((e)=><ul><li>{e}<button  value={e} onClick={(e)=>Delete(e)}>Delete</button></li></ul>)}
    </>
)
}
// import React from "react";

// class Todo extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       task: "",
//       list: [],
//     };
//   }

//   updateInput(value) {
//     this.setState({
//       task: value,
//     });
//   }

//   addItem() {
//     if (this.state.task !== "") {
//       const task = {
//         id: Math.random(),
//         value: this.state.task,
//       };

//       const list = [...this.state.list];
//       list.push(task);

//       this.setState({
//         list,
//         task: "",
//       });
//     }
//   }

//   deleteItem(key) {
//     const list = [...this.state.list];

//     const updateList = list.filter((item) => item.id !== key);
//     this.setState({
//       list: updateList,
//     });
//   }

//   render() {
//     return (
//       <>
//         <div>
//           <div>
//             <h1>To-Do List</h1>
//             <input
//               type="text"
//               name="task"
//               value={this.state.task}
//               onChange={(item) => this.updateInput(item.target.value)}
//             />

//             <button onClick={() => this.addItem()}>Add Task</button>
//           </div>
//           <div>
//             <div>
             
//               {this.state.list.map((item) => {
//                 return (
//                   <div>
//                     {item.value}
//                     <button onClick={() => this.deleteItem(item.id)}>
//                       X
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }
// export default Todo;