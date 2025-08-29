import React from 'react';
import DiscordLogo from '../../assets/discord_logo.png';
import styleNav from '../../styles/styleNav.css'
import { FaDiscord } from "react-icons/fa";
const DiscordButton = () => {
    const discordUrl = 'https://discord.gg/2nN2VqwNaK';

    const handleDiscordButtonClick = () => {
        window.location.href = discordUrl;
    };

    return (
        <>
            <button
            className="discord"
                style={{
                    backgroundColor: 'white',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                    
                }}
                onClick={handleDiscordButtonClick}
            >
                <img
                    src={DiscordLogo}
                    alt="Discord Logo"
                    style={{
                        marginRight: '5px',
                        width: '95px',
                        height: '28px',
                    }}
                />
            </button>

            {/* mobile */}
            <FaDiscord 
                onClick={handleDiscordButtonClick}
                className='discord-sm'
            />
        </>
        
    );
};

export default DiscordButton;