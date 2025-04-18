import { useState } from 'react';

const Header = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 1000); 
    };

    return (
        <div className="flex justify-between items-center px-6 md:px-20 h-20 md:h-28 backdrop-blur-2xl fixed w-full z-50">
            <img src="/Logo.png" alt="Osumare Logo" className="h-16 md:h-24" />
            <button
                onClick={handleClick}
                className={`
                    rounded-full px-6 md:px-16 border-2 h-10 md:h-12 font-semibold md:font-bold text-base md:text-lg 
                    transition-all duration-1000 ease-in-out
                    ${clicked ? 'bg-blue-500 text-white border-blue-500' : 'text-blue-500 hover:text-blue-500 hover:border-blue-500'}
                `}
            >
                Contact Us
            </button>
        </div>
    );
};

export default Header;
