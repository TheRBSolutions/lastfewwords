import React from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const navigate = useNavigate();

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>

            <button className="close-btn" onClick={toggleSidebar}>
                <span>Menu</span>
                <FontAwesomeIcon icon={faXmark} className="user-icon" />
            </button>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li onClick={() => { navigate('/lastfewwords/audio-files') }}>
                    Audio
                </li>
                <li onClick={() => { navigate('/lastfewwords/video-files') }}>
                    Video
                </li>
                <li onClick={() => { navigate('/lastfewwords/document-files') }}>
                    Document
                </li>
                <li onClick={() => { navigate('/lastfewwords/image-files') }}>
                    Images
                </li>
                <li onClick={() => { navigate('/lastfewwords/family-legacy') }}>
                    Family Legacy
                </li>
                <li><a href="#buy-storage">Buy Storage</a></li>
                <li><a href="#security">Security</a></li>
            </ul>
            <button className="logout-btn">
                <FontAwesomeIcon icon={faArrowRightFromBracket} className="user-icon" />
                <span>Logout</span>
            </button>

        </div>
    );
};

export default Sidebar;
