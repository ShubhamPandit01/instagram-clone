import React,{useState,useEffect, useRef} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const LoginComponent = ()=>{

    const navigate = useNavigate()

    const userData = {
        email : useRef(null),
        password : useRef(null),
    }

    const {email, password} = userData
    
    

    function handleSubmit(e) {
    e.preventDefault();
    if (!email?.current?.value || !password?.current?.value){
        alert("All feilds are require.");
        return;
    }
    if (!email?.current?.value.includes("@")) {
        alert("Please input a valid email");
        return;
    }
    if (password?.current?.value < 6) {
        alert("password should be 6 characters");
        return;
    }
        axios.post("https://instagram-express-app.vercel.app/api/auth/login",{
            email: email?.current?.value,
            password: password?.current?.value,
        })
        .then(res=>{
            console.log(res.data)
            alert("user Logged In.")
            !token && localStorage.setItem("token",res.data.data.token)
            navigate('/dashboard')
        })
        .catch(err=>{
            console.log(err)
            alert("Something went wrong.")
        })
    }

    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                Email: <input type="email" placeholder="Enter your email" name="email" ref={userData.email} /> <br/>
                Password: <input type="password" placeholder="Enter your password" name="password" ref={userData.password} /> <br/>
                <button type="submit" >Login</button>
            </form>
        </div>
    )
}


export default LoginComponent