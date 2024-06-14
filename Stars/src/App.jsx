import React from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import '../src/App.css'; // Assurez-vous d'importer votre fichier CSS

const App = () => {
    return (
        <div id='parallaxContainer'>
            <ParallaxBanner style={{ height: '200vh' }}>
            <ParallaxBannerLayer
                    image={('../public/Images/Planet.webp')}
                    speed={-100}
                    style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '70%' }}
                />
                {/* <ParallaxBannerLayer
                    image={('../public/Images/Tatoooinefull.webp')}
                    speed={-100}
                    style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '70%' }}
                />
                <ParallaxBannerLayer
                    image={('../public/Images/Naboo.png')}
                    speed={-100}
                    style={{ position: 'absolute', top: '70%', left: '0', width: '100%', height: '70%' }}
                /> */}
                <ParallaxBannerLayer
                    image={('../public/Images/Planet2.webp')}
                    speed={50}
                    style={{ position: 'absolute', top: '70%', left: '0', width: '100%', height: '100%' }}
                />
                <div className="overlay">
                    <h1 className="text">C'est Ici Pour Choper!</h1>
                </div>
            </ParallaxBanner>
           
        </div>
    );
};

export default App;





// import React from 'react';
// import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
// import './App.css'; // Assurez-vous d'importer votre fichier CSS

// const App = () => {
//     return (
//         <div id='parallaxContainer'>
//             <ParallaxBanner style={{ height: '200vh' }}>
//                 <ParallaxBannerLayer 
//                     image={require('./Images/Naboo.png')}
//                     speed={-40}
//                     style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '70%' }}
//                 />
//                 <ParallaxBannerLayer 
//                     image={require('./Images/Tatoooinefull.webp')}
//                     speed={-70}
//                     style={{ position: 'absolute', top: '70%', left: '0', width: '100%', height: '70%' }}
//                 />
//                 <div className="overlay">
//                     <h1 className="text">C'est Ici Pour Choper!</h1>
//                 </div>
//             </ParallaxBanner>
//             <div className="content">
//                 <p>Voici du contenu supplémentaire pour permettre le défilement de la page.</p>
//                 <p>Ajoutez autant de contenu que nécessaire ici...</p>
//                 <p>... pour rendre le défilement visible.</p>
//             </div>
//         </div>
//     );
// };

// export default App;














// import React from 'react';
// import './App.css';
// import Component from './space_explore.jsx';
// import { ParallaxProvider } from 'react-scroll-parallax';
// function App() {
//   return (<ParallaxProvider>
//     <div className="App">
//     <Component/>
//     </div>
//     </ParallaxProvider>
//   );
// }

// export default App;
