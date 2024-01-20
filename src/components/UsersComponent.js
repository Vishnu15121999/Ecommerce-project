import React, { useState } from 'react'

const UsersComponent = () => {
    const [formData,setFormData]=useState({name:"",address:""});
    //console.log(formData);

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData((prevFormData)=>({...prevFormData,[name]:value}))        
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem('data',JSON.stringify(formData));
    }

  return (
    <form onClick={handleSubmit}>
        <div className='users-container'>
            <input name='name' value={formData.name} onChange={handleChange} placeholder='Name'/>
            <input name='address' value={formData.address} onChange={handleChange} placeholder='Address'/>
            <button type='submit'>Submit</button>
        </div>
    </form>
  )
}

export default UsersComponent