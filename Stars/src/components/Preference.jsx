
function Preference() {
    return (
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
            <div className="Planet-select">
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

    )
}

export default Preference