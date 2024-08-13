import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import './familyLegacy.css';
import { useNavigate } from 'react-router-dom';

const FamilyLegacy = () => {
    const navigate = useNavigate();

    const familyMembers = [
        { name: 'son', storage: '03 OF 20GB' },
        { name: 'son2', storage: '03 OF 20GB' },
        { name: 'mom', storage: '03 OF 20GB' },
        { name: 'sister', storage: '03 OF 20GB' },
        { name: 'dad', storage: '03 OF 20GB' },
    ];

    return (
        <div className="family-legacy-container">
            <header className="family-header">
                <FontAwesomeIcon icon={faArrowLeft} className="back-icon"
                    onClick={() => { navigate('/dashboard') }} />
                <h2>Family Legacy</h2>
            </header>
            <div className="family-grid">
                {familyMembers.map((member, index) => (
                    <div key={index} className={`family-member ${member.name === 'DAD' ? 'wide' : ''}`}
                        onClick={() => { navigate(`/family-acces/${member?.name}`) }}>
                        <p style={{ textTransform: 'uppercase' }}>{member.name}</p>
                        <p className="storage">{member.storage}</p>
                    </div>
                ))}
            </div>
            <button className="add-family-member">
                <FontAwesomeIcon icon={faPlus} />
                <span>Add New Family Member</span>
            </button>
        </div>
    );
}

export default FamilyLegacy;
