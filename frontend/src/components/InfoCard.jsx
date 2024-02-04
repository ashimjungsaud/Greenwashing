import React from "react";

const InfoCard = ({ imageSrc, title, description }) => {
    return (
        <div className="relative w-[200px] h-[250px] shadow-2xl">
            <img className="w-full h-full object-cover object-center rounded-xl" src={imageSrc} alt={title} />
            <div className="absolute inset-0 flex items-end justify-center">
                <div className="text-white text-center">
                    <h2 className="text-xl font-semibold">{title}</h2>
                </div>
            </div>
        </div>
    );
}

export default InfoCard;