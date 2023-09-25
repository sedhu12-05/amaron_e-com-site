import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const onLogin =async(e)=>{
        e.preventDefault();
        try {
            const body = { email, password };
            console.log(body);
            const res = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            const jsonData = await res.json();
            console.log(jsonData)
            console.log(jsonData.email)
            const param = jsonData.email
            if(jsonData.email == 'naveenelango.se@gmail.com'){
                window.location = "/admin";              
            }else{
                window.location = `/showproduct/${param}`;
            }
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-md-4 offset-md-4">
                        <div class="login-form bg-light mt-4 p-4">
                            <form action="" method="" class="row g-3">
                                <h4>Welcome Back</h4>
                                <div class="col-12">
                                    <label>Username</label>
                                    <input type="text" name="username" class="form-control" placeholder="Username" value={email} onChange={e => setEmail(e.target.value)}/>
                                </div>
                                <div class="col-12">
                                    <label>Password</label>
                                    <input type="password" name="password" class="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                                </div>
                               
                                <div class="col-12">
                                    <button type="submit" class="btn btn-dark float-end" onClick={onLogin}>Login</button>
                                </div>
                            </form>
                            <hr class="mt-4"/>
                                <div class="col-12">
                                    <p class="text-center mb-0">Have not account yet? <Link to='/signup'>Signup</Link> </p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;