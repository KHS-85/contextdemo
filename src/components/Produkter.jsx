import React, { useContext } from 'react'
import { ProduktContext } from '../context/ProduktContext'
import { Link } from 'react-router-dom'

const Produkter = (props) => {

    const { produkter, sletProdukt } = useContext(ProduktContext);
    console.log(produkter.length);
    const alleprodukter = produkter.length ? (      
        produkter.map(n => {
            return (
    
                <article key={n.produktid}>
                    <h2>{n.produkttitel}</h2>
                    <p>{n.produktinfo}</p>
                    <p>kr. {n.produktpris} ,-</p>
                    <p>{n.produktbeskrivelse.substring(0,16)} ...<Link to={"/produkt/" + n.produktid}> Læs mere</Link></p>
                    <button className="mb-5" onClick={() => sletProdukt(n.produktid)}>Slet dette produkt</button>
                </article>
                
            )
        }) 
           ) : (
            <article><h3>Der er ikke nogle produkter</h3></article>
        )


    return (
        <div>
            {alleprodukter}
        </div>
        
    )
}

export default Produkter