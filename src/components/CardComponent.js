import { Container,Row } from 'react-bootstrap'
import React from 'react'
import Cards from "./Cards"
import ai from "../images/ai.jpg"
import bc from "../images/blockchain.jpg"
import cs from "../images/cybersecurity.jpg"
import iot from "../images/iot.jpg"
import rpa from "../images/rpa.jpg"
import virtual from "../images/virtual.jpg"
import js from "../images/js.jpeg"
import coff from "../images/cs.png"
import pyth from "../images/pyth.jpg"
import ruby from "../images/ruby.png"
import php from "../images/php.jpg"
import java from "../images/java.jpg"





export const CardComponent = () => {
var i=[{
    title:"Artificial Intelligence (AI) and Machine Learning",
    img:ai
},
{
    title:"Robotic Process Automation (RPA)",
    img:rpa 
},
{
    title:"Virtual Reality and Augmented Reality",
    img:virtual   
},
{
    title:"Blockchain",
    img:bc  
},
{
    title:"Internet of Things (IoT)",
    img:iot 
},
{
    title:"Cyber Security",
    img:cs 
},

{
    title:"Javascript",                                    
    img:js   
},
{
    title:"CoffeeScript",
    img:coff
},
{
    title:"Python ",
    img:pyth
},
{
    title:"Ruby",
    img:ruby  
},
{
    title:"PHP",
    img:php 
},
{
    title:"Java",
    img:java   
},
]
    
    return (
        <Container>
        <Row>
       {i.map(item=>(
           <Cards title={item.title} image={item.img}/>
       ))}     
    
            
     </Row>
            
        </Container>
    )
}

export default CardComponent
