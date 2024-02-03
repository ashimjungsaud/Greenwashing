import { useState } from 'react';
import { FaRegThumbsUp } from "react-icons/fa";

function Upvote() {
    // Step 2: Set up state to track text color
    const [textColor, setTextColor] = useState('white');

    // Step 3: Add onClick event handler to toggle between two colors
    const handleButtonClick = () => {
        // Toggle between two colors (e.g., black and blue)
        const newColor = textColor === 'white' ? '#1dc071' : 'white';
        setTextColor(newColor);
    };

    // Step 1: Create a button with onClick event
    return (
        <button
            onClick={handleButtonClick}
            style={{ color: textColor }}
        >
            <FaRegThumbsUp/>
        </button>
    );
};

export default Upvote