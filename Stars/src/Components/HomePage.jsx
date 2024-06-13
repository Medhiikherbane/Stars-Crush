import LogoOfficial from "../Images/LogoOfficial.png"
import "./HomePage.css"

function HomePage () {
    return (
        <div id="imgHome">
            <header className="Head">
                <img src={LogoOfficial} alt="" />
            </header>
            <main>
                <h1>Stars Crush</h1>
                <h2>Love... with no limit</h2> <br />
                <button className="buton">Find your soulmate</button>
            </main>
        </div>
    )
}

export default HomePage;