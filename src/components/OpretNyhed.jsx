import React, { useState, useContext } from 'react';
import {NyhedContext} from '../context/NyhedContext'
import Nyheder from './Nyheder';

const OpretNyhed = (props) => {
    const {tilfoejNyhed} = useContext(NyhedContext);

    //state til indholdet i en ny nyhed
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    // HÅNDTER STATE, så den sendes til NyhedContext
    const handleSubmit = (e) => {
        e.preventDefault();
        tilfoejNyhed(title, body);
        //Tøm input felter
        setTitle('');
        setBody('');
    }

    return (
        <div>
            <h2>Her er OpretNyhed</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Overskrift" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <br/>
                <input type="text" placeholder="Nyheds tekst" value={body} onChange={(e) => setBody(e.target.value)}/>
                <br/>
                <input type="submit" value="Gem nyheden" />
            </form>
            <br/>
            <hr/>
            <Nyheder />
        </div>
    )
}

export default OpretNyhed
