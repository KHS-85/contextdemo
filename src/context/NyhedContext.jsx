import React, { createContext, useState } from 'react'

// export NyhedContext
export const NyhedContext = createContext();


const NyhedContextProvider = (props) => {
    //state indsætte her
    //taget fra https://jsonplaceholder.typicode.com/posts
    const [nyheder, setNyheder] = useState([
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        }

    ])
    // opret nyhed
    const tilfoejNyhed = (title, body) => {
        // lav en ID til den nye nyhed
        let id = Math.floor(Math.random() * 1000); //tilfældigt nr - floor afrunder til helt tal
        setNyheder([...nyheder, { id, name: title, title, body }]);

    }
    // slet nyhed
    const sletNyhed = (ID) =>{
        setNyheder(nyheder.filter(n=>n.id !== ID)); //filtrere den nyhed fra der har ID
    }
    //  find nyhed ud fra id
    const findNyhed = (ID) =>{
        return nyheder.find(n => n.id === ID);
    }

    return (
        <NyhedContext.Provider value={{ nyheder, tilfoejNyhed, sletNyhed, findNyhed }}>
            {props.children}
        </NyhedContext.Provider>
    )
}

export default NyhedContextProvider