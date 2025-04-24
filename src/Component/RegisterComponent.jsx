import React,{useState,useEffect, useRef} from "react";
import axios from "axios";


const RegisterComponent = ()=>{

    const userData = {
        name : useRef(null),
        email : useRef(null),
        password : useRef(null),
        cPassword : useRef(null)
    }

    const {name, email, password, cPassword} = userData
    

    function handleSubmit(e) {
    e.preventDefault();
    if (
        !name?.current?.value ||
        !email?.current?.value ||
        !password?.current?.value ||
        !cPassword?.current?.value
    ) {
        alert("All feilds are require.");
        return;
    }
    if (!name?.current?.value.includes(" ")) {
        alert("Please input a valid name");
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
    if (password?.current?.value !== cPassword?.current?.value) {
        alert("password & Confirm password should be same");
        return;
    }

        axios.post("https://instagram-express-app.vercel.app/api/auth/signup",{
            name: name?.current?.value,
            email: email?.current?.value,
            password: password?.current?.value,
        })
        .then(res=>{
            console.log(res.data)
            alert("user registered sucessfully.")
            localStorage.setItem("token",res.data.data.token)
        })
        .catch(err=>{
            console.log(err)
            alert("Something went wrong.")
        })
    }

    return (
        <div>
            <h1>Signup Form</h1>
            <form onSubmit={handleSubmit}>
                Name: <input type="text" placeholder="Enter your name" name="name" ref={userData.name} /> <br/>
                Email: <input type="email" placeholder="Enter your email" name="email" ref={userData.email} /> <br/>
                Password: <input type="password" placeholder="Enter your password" name="password" ref={userData.password} /> <br/>
                Confirm Password: <input type="password" placeholder="Enter your cPassword" name="cPassword" ref={userData.cPassword} /> <br/>
                <button type="submit" >Signup</button>
            </form>
        </div>
    )
}


export default RegisterComponent