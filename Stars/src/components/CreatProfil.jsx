import React from "react";
import "./CreatProfil.css"
import mansit from "../Images/mansit.png"
import ladyGalaxy from "../Images/faceGalaxy.png"
import logo from '../Images/LogoOfficial.png'

function CreatProfil() {

    return (
        <body>
            <img className="ladyGalaxy" src={ladyGalaxy} alt="Galaxylady" />
            <div>
                <section className="Profil">
                    <form>
                        <label htmlFor="FirstName">What's your FirstName ?</label>
                        <input type="text" id="FirstName"></input>
                        <br />
                        <label htmlFor="FamilyName">What's your Family Name ?</label>
                        <input type="text" id="FamilyName" />
                        <br />
                        <label htmlFor="Holonet">HoloNet adress</label>
                        <input type="text" id="Holonet" />
                    </form>
                    <div className="race-select">
                        <select>
                            <option value="0">Your gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Hermaphrodite</option>
                            <option value="4">Robot</option>
                            <option value="5">I'm not on this list</option>
                        </select>
                    </div>
                </section>
                <section className="ImageProfil"></section>
                <section className="Preference">
                    <div className="race-select">
                        <select>
                            <option value="0">What race do you like?</option>
                            <option value="1">Human</option>
                            <option value="2">Twi'lek</option>
                            <option value="3">Muun</option>
                            <option value="4">Hutt</option>
                            <option value="5">Wookie</option>
                            <option value="6">Ewok</option>
                            <option value="7">I'm not difficult</option>
                        </select>
                    </div>
                    <div className="Sexe-select">
                        <select>
                            <option value="0">Sexual orientation</option>
                            <option value="1">Straight</option>
                            <option value="2">Homosexual</option>
                            <option value="3">Bissexual</option>
                            <option value="4">Fissionsexual</option>
                            <option value="4">Technosexual</option>
                            <option value="4">I'm not difficult</option>
                        </select>
                    </div>
                    <div className="Sexe-select">
                        <select>
                            <option value="0">Planet prefered</option>
                            <option value="1">Tatooine</option>
                            <option value="2">Hoth</option>
                            <option value="3">Endor</option>
                            <option value="4">Naboo</option>
                            <option value="4">Coruscant</option>
                            <option value="4">Anywhere</option>
                        </select>
                    </div>
                </section>
            </div>
            <button className="submit">Submit</button>
            <img className="ManSit" src={mansit} alt="man sitting" />
            <img className="logo" src={logo} alt="logo" />
        </body>
    )
}

export default CreatProfil