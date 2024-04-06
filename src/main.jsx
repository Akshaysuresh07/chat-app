import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import chatStore from './redux/store.js'




// function MessageBox({user,name,message}) {
// // console.log(user);

//   return (
//     <>
//       {user==name?
//       <div className="mbox right m-1">
//         <p className="pp">You</p>
//         <p className="p1">{message}</p>
//       </div>
//       :name=="Admin"?
//       <div className="d-flex justify-content-center w-100">
//         <div className="abox m-1">
//           <p className="m-0">{message}</p>
//         </div>
//       </div>
//       :
//       <div className="mbox left m-1">
//         <p className="pp">{name}</p>
//         <p className="p1">{message}</p>
//       </div>
//       }
      
//     </>
//   );
// }

// export default MessageBox;



ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <Provider store={chatStore}>
        <App />
      </Provider>
    </BrowserRouter>


)
