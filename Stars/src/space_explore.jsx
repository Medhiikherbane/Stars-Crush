import React from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import './App.css'; // Assurez-vous d'importer votre fichier CSS

const Component = () => {
    return (
        <div id='parallaxContainer'>
            <ParallaxBanner style={{ height: '200vh' }}>
                <ParallaxBannerLayer 
                    image='./Images/Naboo.png' 
                    speed={10}
                    style={{ position: 'absolute', top: '70px', left: '70px', width: '100%', height: '70%' }}
                />
                <ParallaxBannerLayer 
                    image='./Images/Tatoooinefull.webp' 
                    speed={-10}
                    style={{ position: 'absolute', top: '70%', left: '70px', width: '100%', height: '70%' }}
                />
                <div className="overlay">
                    <h1 className="text">C'est Ici Pour Choper!</h1>
                </div>
            </ParallaxBanner>
            <div className="content">
                <p>Voici du contenu supplémentaire pour permettre le défilement de la page.</p>
                <p>Ajoutez autant de contenu que nécessaire ici...</p>
                <p>... pour rendre le défilement visible.</p>
            </div>
        </div>
    );
};

export default Component;



// import React from 'react';
// import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
// import './App.css'; // Assurez-vous d'importer votre fichier CSS

// const Component = () => {
//     return (
//         <div id='parallaxContainer'>
//             <ParallaxBanner style={{ height: '200vh' }}>
			
//  <ParallaxBannerLayer 
//                     image='./Images/Naboo.png' 
//                     speed={10}
//                     style={{ position: 'absolute', top: '70', left: '70', width: '100%', height: '70%' }}
//                 />
//                 <ParallaxBannerLayer 
//                     image='./Images/Tatoooinefull.webp' 
//                     speed={-10}
//                     style={{ position: 'absolute', top: '70%', left: '70', width: '100%', height: '70%' }}
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

// export default Component;