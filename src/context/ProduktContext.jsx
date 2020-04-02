import React, { createContext, useState } from 'react'

// export ProduktContext
export const ProduktContext = createContext();


const ProduktContextProvider = (props) => {
    //state indsætte her
    //taget fra https://jsonplaceholder.typicode.com/posts
    const [produkter, setProdukter] = useState([
        {
            produktid: 230128,
            produkttitel: "Fusilli L'italiana",
            produktinfo: "400 g / Pasta Zara",
            produktpris: 9.95,
            produktbeskrivelse:"Fusilli L´italiana stammer fra Italien hvor familien Bragagnolo har lavet pasta i mere end et århundrede. Det startede som en lille familievirksomhed, der med tiden voksede sig kæmpe store. Det er stadig et voksende firma og som i dag resultere i Pasta når det er bedst. I løbet af disse år har Pasta ZARA's produktion opretholdt sine principper uændret: et omhyggeligt udvalg af den bedste hård hvede semolina og kun den nyeste teknologi, der anvendes til pastafremstillingsprocessen. Et koncept, der fandt den rette balance mellem tradition og innovation. Dette er hvad der gør forskellen."
        },

        {   produktid: 127894,
            produkttitel: "Kiks m. kakaocreme",
            produktinfo: "HIT / 2-pak / 268 g",
            produktpris: 17.95,
            produktbeskrivelse: "Ingrediensliste: Hvedemel, sukker, vegetabilsk fedtstof (palme, kokos), fedtfattigt kakaopulver 3,4 %, glucose-sirup og frugtsukker-sirup, valleprodukt (MÆLK), hævemidler (ammoniumcarbonat, natriumcarbonat), salt, surhedsregulerende middel (citronsyre), SKUMMETMÆLKSPULVER, kakaopulver, emulgator (lecithiner), aroma, ÆGGEPULVER.Kan indeholde spor af HASSELNØDDER."
        },

        {   produktid: 564120,
            produkttitel: "Luksusrogn",
            produktinfo: "Amanda / 2 x 200 g",
            produktpris: 32.95,
            produktbeskrivelse: "Ingrediensliste: Min. 76% rogn, vand, tomatpasta, vegetabilsk olie, salt, carrageenan, johannesbrødkernemel. "
        },

        {   produktid: 9874531,
            produkttitel: "Kaffe bl. 95 øko.",
            produktinfo: "400 g / fairtrade/ malet kaffe / Peter Larsen Kaffe",
            produktpris: 55.95,
            produktbeskrivelse: "Fairtrade kaffe. Økologisk blanding med en blød og let syrlig smag, med en fyldig aroma. Kaffen er dyrket i det Syd- og mellemamerikanske højland. Fairtrade betyder mere fair handelsvilkår og flere muligheder for, at producenter i udviklingslande kan investere i deres produktion, og i deres lokalsamfund for at skabe en bæredygtig fremtid. "
        }

    ])
    // opret produkt
    const tilfoejProdukt = (produkttitel, produktinfo, produktpris, produktbeskrivelse) => {
        // lav en ID til den nye produkt
        let produktid = Math.floor(Math.random() * 1000); //tilfældigt nr - floor afrunder til helt tal
        setProdukter([...produkter, { produktid, produkttitel, produktinfo, produktpris, produktbeskrivelse }]);

    }
    // slet produkt
    const sletProdukt = (ID) =>{
        setProdukter(produkter.filter(n => n.produktid !== ID)); //filtrere den produkt fra der har ID
    }
    //  find produkt ud fra id
    const findProdukt = (ID) =>{
        return produkter.find(n => n.produktid === ID);
    }

    return (
        <ProduktContext.Provider value={{ produkter, tilfoejProdukt, sletProdukt, findProdukt }}>
            {props.children}
        </ProduktContext.Provider>
    )
}

export default ProduktContextProvider