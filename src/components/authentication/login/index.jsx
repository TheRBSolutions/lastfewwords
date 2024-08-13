import React from 'react';
import Icon from '../../../assets/icon.svg';
import './login.css';

const Login = () => {
    return (
        <>
            <div className="login-container">
                <div className="login-box">
                    <div className="lock-icon">
                        <img src={Icon} alt="Lock Icon" />
                    </div>
                    <h2>LAST FEW WORDS</h2>
                    <p>Login to access your Dashboard</p>
                    <form>
                        <div className="input-group">
                            <label>Email *</label>
                            <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className="input-group">
                            <label>Password *</label>
                            <input type="password" placeholder="Enter your password" />
                        </div>
                        <p className="signin-link">Don't have an account? <a href="/signup">Register</a></p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
