import React,{useState} from "react";
import './Planet.css';
import img1 from '../../public/Images/Naboo2.png'
import img2 from '../../public/Images/Xwing-Starfighter.webp'
import text from '../../public/Images/text.png'

function Planet() {
    const [offset, setOffset] = useState()

const handleScroll = ()  => setOffset(window.pageYOffset)

window.addEventListener('scroll', handleScroll)
    return (
        <div className="App">
        <div className="zoom">
<img src={img1} alt="" id="img1"
style={{width:(77 + offset * -0.1) + "%"}}
/>
<img src={img2} alt="" id="img2"style={{width:(4 + offset * 1.1) + "%"}}/>
<img src={text} alt="" id="text"
style={{ top:`-${5 + offset * 0.1 + '%'}`}}
/>
</div>

<div className="content">
    <h2>
    Trouvez votre âme sœur dans une galaxie lointaine, très lointaine</h2>
    <p>
    Vous rêvez de rencontrer des personnages aussi fascinants que Han Solo, Leia Organa, ou même un mystérieux Sith? <br />Rejoignez StarLove, l'application de rencontre ultime pour tous les fans de Star Wars! Explorez des profils venus de toutes les régions de la galaxie, de Tatooine à Coruscant. <br /> Que vous soyez un Jedi à la recherche de votre Padawan ou un contrebandier en quête de votre partenaire idéal, StarCrush vous promet des rencontres intergalactiques inoubliables. <br />Inscrivez-vous dès aujourd'hui et que l'amour soit avec vous!
    </p>
</div>
</div>
    )
}



export default Planet;
