import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import '../../styles/AuthStyles.css'
import toast from 'react-hot-toast';
import axios from 'axios'

import { useNavigate } from 'react-router-dom';


const Register = () => {

    const [ name , setName ] = useState("")
    const [ email , setEmail ] = useState("")
    const [ password , setPassword ] = useState("")
    const [ phone , setPhone ] = useState("")
    const [ address , setAddress ] = useState("")
    const navigate = useNavigate()

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/v1/auth/register', {name, email,password, phone, address})
            if(res && res.data.success) {
                toast.success(res.data && res.data.message)
                // "react-hot-toast": "^2.4.1", is not working
                navigate('/login')
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
                        <h4 className='title'>REGISTER FORM</h4>
                        <div className="mb-3">
                            <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className="form-control" id="exampleInputEmail1" placeholder="Enter Your Name" required />
                        </div>
                        <div className="mb-3">
                            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} className="form-control" id="exampleInputEmail1" placeholder="Enter Your Email" required />
                        </div>
                        <div className="mb-3">
                            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className="form-control" id="exampleInputPassword1" placeholder="Enter Your Password" required />
                        </div>
                        <div className="mb-3">
                            <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone} className="form-control" id="exampleInputEmail1" placeholder="Enter Your Phone" required />
                        </div>
                        <div className="mb-3">
                            <input type="text" onChange={(e)=>setAddress(e.target.value)} value={address} className="form-control" id="exampleInputEmail1" placeholder="Enter Your Address" required />
                        </div>
                        <button type="submit" onChange={(e)=>setName(e.target.value)} className="btn btn-primary" required>REGISTER</button>
                    </form>
                </div>
            </Layout>
        </div>
    );
};

export default Register;