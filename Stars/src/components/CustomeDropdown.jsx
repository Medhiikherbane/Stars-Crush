import React, { useState } from 'react';
import './CustomDropdown.css'; // Create and style this CSS file as needed

const CustomDropdown = ({ options, label }) => {
    const [hoveredOption, setHoveredOption] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = (option) => {
        setHoveredOption(option);
    };

    const handleMouseLeave = () => {
        setHoveredOption(null);
    };

    const handleSelect = (option) => {
        setSelectedOption(option);
        setHoveredOption(null);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="custom-dropdown">
            <div className="selected-option" onClick={toggleDropdown}>
                {selectedOption ? selectedOption.label : label}
            </div>
            {isOpen && (
                <div className="options">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="option"
                            onMouseEnter={() => handleMouseEnter(option)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
            {hoveredOption && (
                <div className="popup">
                    <img src={hoveredOption.image} alt={hoveredOption.label} />
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;
