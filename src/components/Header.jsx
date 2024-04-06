import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

function Header() {




  return (
    <>
    <Navbar style={{background:'#124560'}}   className="bg-info  w-100">
    <Container>
      <Navbar.Brand href="#home">
        <i  className="fa-solid fa-message  text-white"></i>
        <span className="ms-2 tit fw-bolder"><span className='text-warning'>We</span>Chat</span>
       
       
      </Navbar.Brand>
    </Container>
  </Navbar>
    </>
    
  )
}

export default Header