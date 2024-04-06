import React, { useEffect, useRef, useState } from "react";
  import { useLocation } from "react-router-dom";
  import { io } from "socket.io-client";
  import Msgbox from "./Msgbox";
  import { useDispatch, useSelector } from "react-redux";
  import { addmsg } from "../redux/ChatSlice";
  import Header from "./Header";
  
  
  function Chat() {
  
    const location = useLocation();
    const user = location.state;
    const [typeMessage,setTypeMessage] = useState("")
    const [newSocket,setNewSocket] = useState()
    const [id,setUserId] = useState()
    const chatBoxref = useRef(null)
    const dispatch = useDispatch()
    const messageData = useSelector(state=>state.chatReducer)


    
  
    useEffect(() => {
  
      const socket = io("http://localhost:3001");
      setNewSocket(socket)
  
      socket.on("connect", () => {
        setUserId(socket.id)
      });
      console.log(socket);
      socket.emit('joined',{user})
  
      socket.on('welcome',(data)=>{
        dispatch(addmsg(data))
        console.log(data.user,data.message);
      })
  
      socket.on('userJoined',(data)=>{
        dispatch(addmsg(data))
        console.log(data.user,data.message);
      })
  
      socket.on('sendMessage',(data)=>{
        dispatch(addmsg(data))
        console.log(data.user,data.message,data.id);
      })
  
      socket.on('disconnect',()=>{
        socket.emit("disconnect",{user})
      })
  
      socket.on('leave',(data)=>{
        dispatch(addmsg(data))
        console.log(data.user,data.message);
      })
       return () => {
        socket.removeAllListeners()
  };
    
    }, []);
  
    const sendmsg =()=>{
      if(typeMessage!=""){newSocket.emit('message',{message:typeMessage,id})
      setTypeMessage("")}
    }
  
    useEffect(()=>{
      console.log(messageData);
    },[messageData])
  
    useEffect(()=>{
      chatBoxref.current?.lastElementChild?.scrollIntoView()
    },[messageData])


    return (
        <>
        <>
        <div
          style={{ height: "100vh", backgroundColor: "#B6BBC4" }}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="mm bg-white">
            <div
              className="headchat d-flex align-items-center"
              style={{ height: "12%" }}
            ><Header/>
            </div>
            <div ref={chatBoxref} className="chatbox mt-2" style={{ height: "76%" }}>
              {messageData&& messageData.map((item,index)=>(
                <Msgbox user={user} name={item.user} message={item.message}/>
              ))}
            </div>
            <div className="inputbox px-2 py-2 d-flex" style={{ height: "12%" ,width:"100%"}}>
              <input onChange={(e)=>setTypeMessage(e.target.value)} value={typeMessage} style={{ width: "70%" }} type="text" className="me-2 inp" placeholder="Type your Message"/>
              <button onClick={()=>sendmsg()} className="btn btn btn-info rounded" style={{ width: "30%" }}><i class="fa-solid fa-paper-plane"></i></button>
            </div>
          </div>
        </div>
      </>
        </>
    )
}

export default Chat