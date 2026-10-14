import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import './Signup.css'

function Signup(){
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    function handleSubmit(e){
        e.preventDefault();
        if(!userName || !email || !password){
            alert('Please fill in all the fields');
            return;
        }
        alert("Signup UI working! Authentication will be added later.");
    }
    return(
        <div className="signup-container">
            <h1>Welcome to Univent</h1>
            <h2>Create your Univent Account Right Away</h2>
            <form onSubmit={handleSubmit} >
                <label htmlFor="userName">Username</label>
                <input
                    id="userName"
                    type="text"
                    placeholder="Enter your username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />
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
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup
