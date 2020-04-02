import React, {useContext} from 'react'
import {NyhedContext} from '../context/NyhedContext'

const Nyhed = (props) => {

    const {findNyhed} = useContext(NyhedContext);

    let nyhedsID = +props.match.params.nyhedsid; // + er for at lave idèn om til et tal/number  - ellers er det ern string
    const nyhed = findNyhed(nyhedsID);
    
    return (
        <div key={nyhed.id}>
            <h2>{nyhed.title}</h2>
            <p>{nyhed.body}</p>
            
        </div>
    )
}

export default Nyhed
