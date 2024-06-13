

function Profil() {

    return (
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
            <section className="ImageProfil"></section>
        </section>

    )
}

export default Profil