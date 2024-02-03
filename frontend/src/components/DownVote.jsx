import { useState } from 'react';
import { FaRegThumbsDown } from "react-icons/fa";

function DownVote() {
    const [textColor, setTextColor] = useState('white');

    const handleButtonClick = () => {
        const newColor = textColor === 'white' ? '#1dc071' : 'white';
        setTextColor(newColor);
    };

    return (
        <button
            onClick={handleButtonClick}
            style={{ color: textColor }}
        >
            <FaRegThumbsDown />
        </button>
    );
}

export default DownVote