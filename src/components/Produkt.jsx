import React, {useContext} from 'react'
import {ProduktContext} from '../context/ProduktContext'
import { Link } from 'react-router-dom';

const Produkt = (props) => {

    const {findProdukt} = useContext(ProduktContext);

    let produktsID = +props.match.params.produktsid; // + er for at lave id'en om til et tal/number  - ellers er det en string
    const produkt = findProdukt(produktsID);
    
    return (
        <div key={produkt.produktid}>
            <h2 className="text-uppercase">{produkt.produkttitel}</h2>
            <p className="font-italic">{produkt.produktinfo}</p>
            <p>kr. {produkt.produktpris} ,-</p>
            <p>{produkt.produktbeskrivelse}</p>

            <Link to="/produkter"><button type="button" className="btn btn-primary">Tilbage til produkter</button></Link>
           
        </div>
    )
}

export default Produkt