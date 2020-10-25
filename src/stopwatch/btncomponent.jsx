import React from 'react'
function Displaycomponent(props){
    return(
        <div>
            <button onClick={props.start}>Start</button>
            <button onClick={props.stop}>Stop</button>
            <button>Reset</button>
        </div>
    )
}
export default Displaycomponent;