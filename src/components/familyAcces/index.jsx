import React from 'react';
import Icon from '../../assets/icon.svg';
import './familyAcces.css';
import { useParams } from 'react-router-dom';

const FamilyAcces = () => {
    const { title } = useParams();

    return (
        <>
            <div className="otp-container">
                <div className="otp-box">
                    <div className="lock-icon">
                        <img src={Icon} alt="Lock Icon" />
                    </div>
                    
                    <h2>CONFIRM YOUR IDENTITY</h2>
                    <p style={{textTransform:'uppercase'}}>TOO ACCES {title} ENTER PASSWORD</p>
                    <div className="otp-inputs">
                        <input type="text" maxLength="1" />
                        <input type="text" maxLength="1" />
                        <input type="text" maxLength="1" />
                        <input type="text" maxLength="1" />
                    </div>
                    <p className="resend-link">HAE YOU FORGOTEN YOUR PASWORD?
                        <a href="/resend">Resend</a></p>
                </div>
            </div>
        </>
    );
}

export default FamilyAcces;
