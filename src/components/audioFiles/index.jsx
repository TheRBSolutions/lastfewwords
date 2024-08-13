import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSearch, faPlus, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import './audioFiles.css';
import { useNavigate } from 'react-router-dom';

const AudioFiles = () => {
    const audioFiles = ['AUDIO 1', 'AUDIO 2', 'AUDIO 3', 'AUDIO 4', 'AUDIO 5', 'AUDIO 6', 'AUDIO 7', 'AUDIO 8'];
    const navigate = useNavigate();

    return (
        <div className="audio-files-container">
            <header className="audio-header">
                <FontAwesomeIcon icon={faArrowLeft} className="back-icon" 
                onClick={() => { navigate('/lastfewwords/dashboard') }} />
                <h2>Audio Files</h2>
            </header>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
            <div className="audio-list">
                {audioFiles.map((file, index) => (
                    <div key={index} className="audio-item">
                        <FontAwesomeIcon icon={faVolumeUp} className="audio-icon" />
                        <p className='file-text'>{file}</p>
                    </div>
                ))}
            </div>
            <button className="add-button">
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
}

export default AudioFiles;
