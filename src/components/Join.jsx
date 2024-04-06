import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'


function Join() {

  const navigate = useNavigate()
  const [userName,setUserName] = useState("")
  console.log(userName);


  const goToChat = () =>{
    if(userName){
      navigate('/chat',{state:userName})
    }
    else{
      alert("Enter Your Name")
    }
  }

  return (
    <>
        <div style={{height:'100vh',backgroundColor:"#363062"}} className='d-flex justify-content-center align-items-center'>
            <div className='d-flex  flex-column justify-content-center align-items-center bg-white rounded shadow'>
            <h1 className='fw-bold  mt-3 '><span className='text-warning'>We</span>Chat </h1>
              <img height={'300px'} width={'400px'} src={logo}/>  
            <div className='mt-3'>
                    <input type="text" onChange={(e)=>setUserName(e.target.value)} className='form-control shadow rounded px-3' placeholder='Enter your Username'/>
                    <button onClick={goToChat} className="btn btn-outline-info mb-4 py-2 mt-3 w-100">Start Chat</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Join