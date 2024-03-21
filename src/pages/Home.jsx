import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../layout/Navbar';

const Home = () => {
    
    const[users,setUsers]=useState([]);

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    }

    
    const{id}=useParams();

    const deleteUser=async(id)=>{
        await axios.delete(`http://localhost:8080/user-delete/${id}`)
        loadUsers();
    }

    return (
        <div>
            <Navbar/>
            <div className="relative overflow-x-auto mt-10 w-90% ml-20 mr-20">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs bg-red-800 text-white uppercase dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Username
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Password
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user,index) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" key={index} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {index+1}
                                    </th>
                                    <td className="px-6 py-4">
                                        {user.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.username}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.password}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                            View
                                        </button>
                                        <Link className="ml-3 bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                        to={`/edituser/${user.id}`}>
                                            Edit
                                        </Link>
                                        <button className="ml-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={()=>deleteUser(user.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Home
