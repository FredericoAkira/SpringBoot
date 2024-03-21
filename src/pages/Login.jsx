import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate=useNavigate();

    const[user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        password:""
    })
    const [errorMessage, setErrorMessage] = useState('');
    const{username,password}=user
    
    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/login', user);
            if (response.data) {
                // Login successful
                navigate("/Home");
                } else {
                    // Login failed
                    setErrorMessage('Invalid username or password');
                }
            } catch (error) {
                console.error('Error during login:', error);
                setErrorMessage('An error occurred during login');
            }
        };
    
    

return (
    <section className="bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <h1 className="text-4xl text-red-800 font-bold mb-8">Login</h1>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <input type="text" name="username" id="username"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Freder28" required
                                value={username}
                                onChange={(e)=>onInputChange(e)}></input>
                        </div>

                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password"
                            placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required value={password}
                            onChange={(e)=>onInputChange(e)}></input>
                        </div>

                        <button type="submit" className="w-full text-white bg-red-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Login
