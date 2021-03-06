import React from 'react';
import ReactDOM from 'react-dom';


const Otsikko = ({kurssi}) => {
    return(
        <div>
            <h1>{kurssi}</h1>
        </div>
    )
}

const Sisalto = ({osat}) => {
    return(
        <div>
            <Osa nimi={osat[0].nimi} tehtava={osat[0].tehtavia}/>
            <Osa nimi={osat[1].nimi}  tehtava={osat[1].tehtavia}/>
            <Osa nimi={osat[2].nimi} tehtava={osat[2].tehtavia}/>
        </div>
    )
}

const Osa = ({nimi, tehtava}) => {
    return(
        <div>
            <p>{nimi} {tehtava}</p>
        </div>
    )
}

const Yhteensa = ({osat}) => {
    return(
        <div>
            <p>yhteensä {osat[0].tehtavia + osat[1].tehtavia + osat[2].tehtavia} tehtävää</p>
        </div>
    )
}





const App = () => {
    const kurssi = 
    {
        nimi: 'Half Stack -sovelluskehitys',
        osat: 
        [
            { 
                nimi: 'Reactin perusteet',
                tehtavia: 10
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14
            }
        ]
    }
    return(
        <div>
            <Otsikko kurssi={kurssi.nimi}/>
            <Sisalto osat={kurssi.osat}/>
            <Yhteensa osat={kurssi.osat}/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
