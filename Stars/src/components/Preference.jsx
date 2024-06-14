import React from 'react';
import CustomDropdown from './CustomeDropdown';

const raceOptions = [
    { value: '0', label: "What race do you'd like?", image: '' },
    { value: '1', label: 'Human', image: '/src/Images/Human.jpg' },
    { value: '2', label: "Twi'lek", image: '/src/Images/TwiLek.jpg' },
    { value: '3', label: 'Muun', image: '/src/Images/Muun.jpg' },
    { value: '4', label: 'Hutt', image: '/src/Images/Hutt.jpg' },
    { value: '5', label: 'Wookie', image: '/src/Images/wookie.jpg' },
    { value: '6', label: 'Ewok', image: '/src/Images/Ewok.jpg' },
    { value: '7', label: 'Robot', image: '/src/Images/Robotsexy.jpg' },
    { value: '8', label: "I'm not difficult", image: '' },
];

const orientationOptions = [
    { value: '0', label: 'Sexual orientation', image: '' },
    { value: '1', label: 'Straight', image: '/src/Images/Straight.png' },
    { value: '2', label: 'Homosexual', image: '/src/Images/homo.png' },
    { value: '3', label: 'Bisexual', image: '/src/Images/Bi.png' },
    { value: '4', label: 'Fissionsexual', image: '/src/Images/fissionsexual.jpg' },
    { value: '5', label: 'Technosexual', image: '/src/Images/technosexual.jpg' },
    { value: '6', label: "I'm not difficult", image: '' },
];

const planetOptions = [
    { value: '0', label: 'Planet preferred', image: '' },
    { value: '1', label: 'Tatooine', image: '/src/Images/Tatoooinefull.webp' },
    { value: '2', label: 'Hoth', image: '/src/Images/Hothplanet.webp' },
    { value: '3', label: 'Endor', image: '/src/Images/Endor_(planet).webp' },
    { value: '4', label: 'Naboo', image: '/src/Images/Naboo.png' },
    { value: '5', label: 'Coruscant', image: '/src/Images/Coruscant.webp' },
    { value: '6', label: 'Anywhere', image: '' },
];

const Preference = () => {
    return (
        <section className="Preference">
            <div className="dropdown-select">
                <CustomDropdown options={raceOptions} label="What race do you like?" />
            </div>
            <div className="dropdown-select">
                <CustomDropdown options={orientationOptions} label="Sexual orientation" />
            </div>
            <div className="dropdown-select">
                <CustomDropdown options={planetOptions} label="Planet preferred" />
            </div>
        </section>
    );
};


export default Preference