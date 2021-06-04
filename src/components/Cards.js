import React from 'react'
import {Card,Button,Row,Container,Col} from "react-bootstrap"

export const Cards = ({title,image}) => {
    return (
        
        <Col>
        <Card className="mt-3 mx-auto" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} style={{height:"200px"}} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           
          </Card.Text>
          <Button><a className="bg" href="#feature">Register</a></Button>
        </Card.Body>
      </Card>
      </Col>
 
    )
}

export default Cards
