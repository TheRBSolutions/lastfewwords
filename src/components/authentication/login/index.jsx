import React from 'react';
import Icon from '../../../assets/icon.svg';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()

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
                        <button className="cus-btn"
                            onClick={() => { navigate('/lastfewwords/dashboard') }}>
                            Login
                        </button>
                        <p className="signin-link">
                            Don't have an account?
                            <Link to='/lastfewwords/signup' style={{ marginLeft: '5px' }}>Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
