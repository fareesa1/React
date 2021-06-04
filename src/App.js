import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import CardComponent from "./components/CardComponent"
import "./App.css"

const App = () => {
  return (
    <>
<Navbar className="bg" variant="dark">
    <Container>
    <Navbar.Brand href="https://innoovatum.com/workshop">INNOOVATUM</Navbar.Brand>
    <Nav className="left">
      <Nav.Link href="https://innoovatum.com/about/">About us</Nav.Link>
      <Nav.Link href="https://innoovatum.com/workshop/">Gallery</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>
  
<div className="mx-auto" style={{width:"200px",marginTop:"20px"}}>
<h1><span style={{color:"rgb(0, 102, 255)" }}>Inn<span style={{color: "rgb(12, 229, 58)"}}>o</span><span style={{color: "rgb(241, 196, 15)"}}>o</span>vatum</span></h1>

</div>
<h2 style={{width:"400px",marginLeft:"20px"}}>Upcoming sessions</h2>
<CardComponent />
  
    </>
  )
}

export default App
