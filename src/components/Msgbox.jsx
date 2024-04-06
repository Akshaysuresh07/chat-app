import React from "react";

function Msgbox({user,name,message}) {
// console.log(user);

  return (
    <>
      {user==name?
      <div className="mbox right m-1">
        <p className="chatName">You</p>
        <p className="chats">{message}</p>
      </div>
      :name=="Admin"?
      <div className="d-flex justify-content-center w-100">
        <div className="adbox m-1">
          <p className="m-0">{message}</p>
        </div>
      </div>
      :
      <div className="mbox left m-1">
        <p className="chatName">{name}</p>
        <p className="chats">{message}</p>
      </div>
      }
      
    </>
  );
}

export default Msgbox;
