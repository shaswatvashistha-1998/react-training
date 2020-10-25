import React,{useState,useEffect} from 'react';
export default function List(){
    const [list1,push]=useState('');
    const [data,put]=useState([]);
    function display(value){
            put(data=>[...data,value]);
            console.log(data)
        };
    function ComponentExample() {
            useEffect(() => {
                return () => {
                    console.log('component unmounted')
                }
            }, [data])
        }    
    function Delete(value){
        put(data.splice(data.indexOf(value),1));
    }
return(
    <>
    <input type="text" name="title" value={list1} onChange={(e)=>{push(e.target.value)}}/>
    <button onClick={()=>display(list1)}>Send</button>
    <button onClick={()=>Delete()}>Delete</button>
    <button onClick={()=>ComponentExample()}>Unmount</button>
{data.map((e)=><ol><li>{e}</li></ol>)}
    </>
)
}