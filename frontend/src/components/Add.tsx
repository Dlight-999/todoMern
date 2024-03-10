import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Add() {
  const[title, setTitle] = useState('');
  const[description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      await axios.post('http://localhost:5000/api/add', {title, description});
      setTitle('');
      setDescription('');
      navigate('/');
    }
    catch(error){
      console.error('Error adding todo:', error);
    }
 
  };

  return (
    <div className='formContainer'>
      <div className='fromWrapper'>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <h3>Title</h3>
        <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}  required/>
        <h3>Description</h3>
        <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)} />
        <button type="submit">Add Todo</button>

        
      </form>
      </div>
    </div>
  )
}

export default Add