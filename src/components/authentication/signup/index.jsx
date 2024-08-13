import React from 'react';
import Icon from '../../../assets/icon.svg';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="signup-container">
                <div className="signup-box">
                    <div className="lock-icon">
                        <img src={Icon} alt="Lock Icon" />
                    </div>
                    <h2>LAST FEW WORDS</h2>
                    <p>Get Started With us sign up</p>
                    <form>
                        <div className="input-group">
                            <label>Email *</label>
                            <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className="input-group">
                            <label>Password *</label>
                            <input type="password" placeholder="Enter your password" />
                        </div>
                        <div className="input-group">
                            <label>Confirm Password *</label>
                            <input type="password" placeholder="Confirm your password" />
                        </div>
                        <button className="cus-btn"
                            onClick={() => { navigate('/lastfewwords/otp-verification') }}>
                            SignUp
                        </button>
                        <p className="signin-link">
                            Already have an account?
                            <Link to='/lastfewwords/login' style={{marginLeft:'5px'}}>Sign In</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;
