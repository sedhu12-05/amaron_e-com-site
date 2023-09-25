import React, { useState } from "react";

const Signup = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [password,setPassword] = useState("")
    const onSignup = async(e) =>{
        e.preventDefault();
        try {
            const body = { name,email,phone,password }; 
            console.log(body)
            const response = await fetch("http://localhost:8080/signup", {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            alert("Successfully logged in")
           window.location='/'
        } catch (err) {
            console.error(err.message);
        }
    }
    return(
        <>
        <div className="Signuppage">
               <div class="container">
                <div class="row">
                    <div class="col-md-4 offset-md-4">
                        <div class="login-form bg-light mt-4 p-4">
                            <form action="" method="" class="row g-3">
                                <h4>Sign Up</h4>
                                <div class="col-12">
                                    <label>Name</label>
                                    <input type="text" name="username" class="form-control" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                                </div>
                                <div class="col-12">
                                    <label>Email</label>
                                    <input type="email" name="username" class="form-control" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div class="col-12">
                                    <label>Phone Number</label>
                                    <input type="text" name="number" class="form-control" placeholder="Phone number" value={phone} onChange={e => setPhone(e.target.value)} />
                                </div>
                        
                                <div class="col-12">
                                    <label>Password</label>
                                    <input type="password" name="password" class="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                                </div>
                               
                                <div class="col-12">
                                    <button type="submit" class="btn btn-dark float-end" onClick={onSignup}>Signup</button>
                                </div>
                            </form>
                           
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Signup;