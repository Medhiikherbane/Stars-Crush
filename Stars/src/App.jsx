import React,{useState} from "react";
import './App.css';
import img1 from './Images/img1.png'
import img2 from './Images/img2.png'
import text from './Images/text.png'

function App() {
    const [offset, setOffset] = useState()

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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero corrupti aspernatur exercitationem assumenda iure dolores in voluptatem consectetur cupiditate sint doloremque magnam, dolore aliquid dolorum mollitia blanditiis nostrum voluptatibus animi illum, veritatis rem nam cumque. Odit soluta aliquam pariatur deleniti laboriosam quos sequi provident suscipit porro, est voluptatibus dolores omnis vel perspiciatis consequuntur tenetur molestiae quaerat? Enim voluptates quaerat eos non excepturi, corrupti quis quidem sequi nihil harum cum, ullam doloremque dolor voluptatum magnam dolore at odit ab sapiente ratione illum officiis? Veritatis, inventore quo vel neque tempora eum perferendis nisi nemo adipisci eius laborum quas molestiae tempore nihil facilis! Neque ab non pariatur dolorum, corrupti excepturi amet? Aperiam ex mollitia deserunt exercitationem illo natus minus quia sapiente similique, reprehenderit voluptates incidunt debitis possimus tempora eligendi officiis unde illum id quisquam vel nobis pariatur dignissimos distinctio dolor. Rerum aut esse qui impedit, debitis voluptatem molestias consequuntur cumque inventore consequatur facere, nemo voluptatibus voluptatum cupiditate deserunt ipsa eaque expedita blanditiis quod sequi velit accusantium dolorem? Autem distinctio mollitia magnam iste, quidem nemo assumenda minima accusamus aperiam harum expedita aliquam in, facere doloribus quaerat, perferendis eum soluta incidunt exercitationem asperiores modi reiciendis est odit. Alias mollitia quis, nam perferendis qui eligendi aut?
    </p>
</div>
</div>
    )
}



export default App;




























// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
