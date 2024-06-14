
import "./CreatProfil.css"
import mansit from "../Images/mansit.png"
import ladyGalaxy from "../Images/faceGalaxy.png"
import logo from '../Images/LogoOfficial.png'
import Profil from "./Profil";
import Preference from "./Preference";


function CreatProfil() {

    return (
        <div className="bodyCreat">
            <section className="top">
                <img className="ladyGalaxy" src={ladyGalaxy} alt="Galaxylady" />
                <div className="top_Left">
                    <Profil />
                </div>
            </section>
            <section className="middle">
                <div className="casePref">
                    <Preference />
                </div>
            </section>
            <section className="bottom">
                <img className="manSit" src={mansit} alt="man sitting" />
                <button className="submit">Submit</button>
                <img className="logo" src={logo} alt="logo" />
            </section>

        </div>
    )
}

export default CreatProfil