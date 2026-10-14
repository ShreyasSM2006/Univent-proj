import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleSubmit(e){
        e.preventDefault();
        if(!email || !password){
            alert('Please fill in all the fields');
            return;
        }
        alert("Login UI working! Authentication will be added later.");
    }
    return(
        <div className="login-container">
            <h1>Welcome Back</h1>
            <h2>Login to your Univent Account</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </div>
    )
}
export default Login
