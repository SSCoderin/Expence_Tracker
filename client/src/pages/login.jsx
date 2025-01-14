import Header from "../components/header"
import Footer from "../components/footer"
import { useAuth } from "../../storage/auth";

import { useState } from "react"
export default function Login(){

    const [user , setuser] = useState({
        email:"",
        password:""
    })
    const handelsubmit = async(e)=>{
        e.preventDefault();
        try {
            const data  = await fetch("http://localhost:3000/api/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
            })
            const res = await data.json();
            console.log(res);
            if(res.status === "success"){
                storetokeninls(res.token);
                window.location.href = "/";
            }else{
                console.log(res.message);
                alert("error");
            }
            
        } catch (error) {
            console.error(error);
            alert("An error occurred during login");
        }
    }
    const {storetokeninls}= useAuth();

    return(
        <>
        <Header/>
        <main className="signup-body">
    <div className="signup-container">
        <h1 className="signup-title">Login In Your Account</h1>
        <p className="signup-subtitle">Join us and get started today!</p>
        <form className="signup-form" onSubmit={handelsubmit}>
           
            <input
                type="email"
                placeholder="Enter your email"
                className="signup-input"
                onChange={(e)=>setuser({...user,email:e.target.value})}
                required
            />
            <input
                type="password"
                placeholder="Enter your password"
                className="signup-input"
                onChange={(e)=>setuser({...user,password:e.target.value})}
                required
            />
            
            <button type="submit" className="signup-btn">Login</button>
        </form>
        <p className="signup-footer">
            Don't have an account?{" "}
            <a href="/signup" className="signup-link">SignUp here</a>
        </p>
    </div>
</main>
        <Footer/>

        </>
    )
}