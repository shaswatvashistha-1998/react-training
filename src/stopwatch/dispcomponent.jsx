import React from 'react'
function Displaycomponent(props){
    return(
        <div>
            <span>{(props.time.h)}</span>:&nbsp;
            <span>{(props.time.m)}</span>:&nbsp;
            <span>{(props.time.s)}</span>:&nbsp;
            <span>{(props.time.ms)}</span>&nbsp;
        </div>
    )
}
export default Displaycomponent;