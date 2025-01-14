import React from 'react'
import  Header from '../components/header'
import {useAuth} from '../../storage/auth';
// import {useAuth} from '../../storage/auth';

import Footer from '../components/footer'
import { useState } from 'react'
export default function Signup() {
    const [user , setUser] = useState({
        name:"",
        email:"",
        password:"",
        number:""
    })
    const handelsubmit = async(e) => {
        e.preventDefault();
        console.log(user)
        try {
            const response = await fetch("http://localhost:3000/api/register",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
            })
            const data = await response.json();
            console.log(data);
            alert("User registered successfully");
            storetokeninls(data.token);

            setUser({
                name:"",
                email:"",
                password:"",
                number:""
            })
            window.location.href = "/";
            
        } catch (error) {
            console.error("Registration error:", error);
            alert("Registration failed. Please try again.");
        } 
    }
    const {storetokeninls} = useAuth();


  return (
    <>
    <Header/>
    <main className="signup-body">
    <div className="signup-container">
        <h1 className="signup-title">Create Your Account</h1>
        <p className="signup-subtitle">Join us and get started today!</p>
        <form className="signup-form" onSubmit={handelsubmit}>
            <input
                type="text"
                placeholder="Enter your name"
                className="signup-input"
                value={user.name}
                onChange={(e)=>{
                    setUser({...user, name:e.target.value})
                }}
            />
            <input
                type="email"
                placeholder="Enter your email"
                className="signup-input"
                value={user.email}
                onChange={(e)=>{
                    setUser({...user, email:e.target.value})
                }}
            />
            <input
                type="password"
                placeholder="Enter your password"
                className="signup-input"
                value={user.password}
                onChange={(e)=>{
                    setUser({...user, password:e.target.value})
                }}
            />
            <input
                type="number"
                placeholder="Enter your phone number"
                className="signup-input"
                value={user.number}
                onChange={(e)=>{
                    setUser({...user, number:e.target.value})
                }}
            />
            <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p className="signup-footer">
            Already have an account?{" "}
            <a href="/login" className="signup-link">Login here</a>
        </p>
    </div>
</main>
<div style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
      }}><Footer /></div>    </>
  )
}