import LogoOfficial from "../Images/LogoOfficial.png"
import "./HomePage.css"

function HomePage() {
    return (
        <div id="imgHome">
            <div className="Head">
                <img className="logo " src={LogoOfficial} alt="" />
            </div>
            <div className="mainDiv">
                <h1>Stars Crush</h1>
                <h2>Love... with no limit</h2> <br />
                <button className="buton">Find your soulmate</button>
            </div>
        </div>
    )
}

export default HomePage;