import React, { useState, useContext } from 'react';
import {ProduktContext} from '../context/ProduktContext'
import Produkter from './Produkter';

const OpretProdukt = (props) => {
    const {tilfoejProdukt} = useContext(ProduktContext);

    //state til indholdet i en ny produkt
    const [produkttitel, setProdukttitel] = useState('');
    const [produktinfo, setProduktinfo] = useState('');
    const [produktpris, setProduktpris] = useState('');
    const [produktbeskrivelse, setProduktbeskrivelse] = useState('');

    // HÅNDTER STATE, så den sendes til ProduktContext
    const handleSubmit = (e) => {
        e.preventDefault();
        tilfoejProdukt(produkttitel, produktinfo, produktpris, produktbeskrivelse);
        //Tøm input felter
        setProdukttitel('');
        setProduktinfo('');
        setProduktpris('');
        setProduktbeskrivelse('');
    }

    return (
        <div>
            <h2 className="my-3">Opret nyt produkt:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Overskrift" value={produkttitel} onChange={(e) => setProdukttitel(e.target.value)}/>
                <br/>
                <input type="text" placeholder="Produkt info" value={produktinfo} onChange={(e) => setProduktinfo(e.target.value)}/>
                <br/>
                <input type="text" placeholder="Produkt pris" value={produktpris} onChange={(e) => setProduktpris(e.target.value)}/>
                <br/>
                <input type="text" placeholder="Produkt beskrivelse" value={produktbeskrivelse} onChange={(e) => setProduktbeskrivelse(e.target.value)}/>
                <br/>
                <input className="button my-3" type="submit" value="Gem produktet" />
            </form>
            <br/>
            <hr/>
            <Produkter />
        </div>
    )
}

export default OpretProdukt
