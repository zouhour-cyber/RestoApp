import React from 'react'
// import {useState, useEffect} from 'react';
// import axios from 'axios';
import {Container , Button ,Col , Row} from 'react-bootstrap';
import "./HomeScreen.css"
import NavbarComponent from '../Components/Navbarcomponent';
import Plat from '../Components/Plat';
import Footer from '../Components/Footer';

const Home = () => {
 
  return(
    <div> 
      <NavbarComponent className="mb-5" />
      <Container className="banner" fluid>
      <Row className="d-flex  mx-auto">
      <Col md={6} xs={10} className="ml-auto max-height text-justify" >
        <h4 className="text-banner  "> Hey, we have tasty food !</h4>
        
    <Row> 
    <Col md={6} xs={10} className="mt-4">
     
     <Button variant="warning"> Order Now !! </Button>

 </Col>
 </Row>
      </Col> 

  </Row>
  </Container>

  <Row className="about"> 
  
  <Col  md={5}>
  </Col>
  <Col md={6} xs={10}> 
  <h1 className="mb-5"> OUR STORY</h1>
  <p>lThese days are all Happy and Free. These days are all share them with me oh baby. Its time to play the music.

Its time to light the lights. Its time to meet the Muppet Show tonight.And you know where you were then. Girls were girls and men were men. Mister we could use a man like Herbert Hoover again.</p>
  </Col>


  </Row>
    
  <Row className="Chef d-flex justify-content-around"> 
  
  
  <Col md={6} xs={6}> 
  <div className="cheftext justify-content-center">  
  <h1 className="mb-5"> MEET OUR CHEF</h1>
  <p> The mate was a mighty sailing man the Skipper brave and sure. Five passengers set sail that day for a three hour tour a three hour tour. The Brady Bunch the Brady Bunch that's the way we all became the Brady Bunch.</p> 
  <h6 className="mt-5"> John Peter </h6>
  <p className="mt-2"> Executive Chef</p>
  </div>
  </Col>
  <Col  md={6} xs={6}>
    <img  src="imagespublic/chef.png"  className="image-fluid chefimg"/>
  </Col>

  </Row>       
  <Plat/>

     



<Footer/>

      
    </div>
   )

 }

export default Home