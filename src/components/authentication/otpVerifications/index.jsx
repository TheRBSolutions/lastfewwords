import React from 'react';
import Icon from '../../../assets/icon.svg';
import './otpVerification.css';

const OtpVerification = () => {
    return (
        <>
            <div className="otp-container">
                <div className="otp-box">
                    <div className="lock-icon">
                        <img src={Icon} alt="Lock Icon" />
                    </div>
                    <h2>LAST FEW WORDS</h2>
                    <p>ENTER YOUR OTP VERIFICATION CODE</p>
                    <div className="otp-inputs">
                        <input type="text" maxLength="1" />
                        <input type="text" maxLength="1" />
                        <input type="text" maxLength="1" />
                        <input type="text" maxLength="1" />
                    </div>
                    <p className="resend-link">Didn’t Receive an OTP? <a href="/resend">Resend</a></p>
                </div>
            </div>
        </>
    );
}

export default OtpVerification;
