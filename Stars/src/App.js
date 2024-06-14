import React,{userState} from "React";
import './App.css';
import img1 from './Images/img1;png'
import img2 from './Images/img2.png'
import text from './Images/text.png'

function App() {
    const [offset, setOffset] = userState()

const handleScroll = ()  => setOffset(window.pageYOffset)

window.addEventListener('scroll', handleScroll)
    return (
        <div className="App">
        <div className="zoom">
<img src={img1} alt="" id="img1"
style={{width:(100 + offset * 0.3) + "%"}}
/>
<img src={img2} alt="" id="img2"style={{width:(100 + offset * 0.3) + "%"}}/>
<img src={text} alt="" id="text"
style={{ top:`-${10 + offset * 0.3 + '%'}`}}
/>
</div>

<div className="content">
    <h2>Simple parallax effect with React</h2>
    <p>
        lorem200
    </p>
</div>
</div>
    )
}



export default App;