import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import '../../styles/AuthStyles.css'
import toast from 'react-hot-toast';
import axios from 'axios'

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth';


const Login = () => {

    const [ email , setEmail ] = useState("")
    const [ password , setPassword ] = useState("")
    const [ auth , setAuth ] = useAuth();

    const navigate = useNavigate()

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post('/api/v1/auth/login', { email, password })
          console.log(data)
            if(res && res.data.success) {
                toast.success(res.data && res.data.message);
                // "react-hot-toast": "^2.4.1", is not working
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                });
                localStorage.setItem('auth', JSON.stringify({user: res.data.user,
                    token: res.data.token}))
                navigate('/')
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong');
        }
        
    }


    return (
        <div>
            <Layout title={"Register - Ecommerce App"}>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <h4 className='title'>LOGIN FORM</h4>
                        
                        <div className="mb-3">
                            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} className="form-control" id="exampleInputEmail1" placeholder="Enter Your Email" required />
                        </div>
                        <div className="mb-3">
                            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className="form-control" id="exampleInputPassword1" placeholder="Enter Your Password" required />
                        </div>
                       
                        <button type="submit" onChange={(e)=>setName(e.target.value)} className="btn btn-primary" required>LOGIN</button>
                    </form>
                </div>
            </Layout>
        </div>
    );
};

export default Login;