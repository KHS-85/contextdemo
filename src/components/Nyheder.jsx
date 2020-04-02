import React, { useContext } from 'react'
import { NyhedContext } from '../context/NyhedContext'
import { Link } from 'react-router-dom'

const Nyheder = (props) => {

    const { nyheder, sletNyhed } = useContext(NyhedContext);
    console.log(nyheder.length);
    const allenyheder = nyheder.length ? (      
        nyheder.map(n => {
            return (
                <article key={n.id}>
                    <h2>{n.title}</h2>
                    <p>{n.body.substring(0,6)} ...<Link to={"/nyhed/" + n.id}>Læs mere</Link></p>
                    <button onClick={() => sletNyhed(n.id)}>Slet dennne nyhed</button>
                    {/* {n.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>))} */}
                </article>
            )
        }) 
           ) : (
            <article><h3>Der er ikke nogle nyheder</h3></article>
        )


    return (
        <div>
            {allenyheder}
        </div>
    )
}

export default Nyheder
