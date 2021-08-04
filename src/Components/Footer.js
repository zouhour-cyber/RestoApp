import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import "./Footer.css";


const Footer = ()  => {


    return(
<div>
<Row className="bgfooter">
    <Col md={4} xs={12}>
      <h1> DELICE </h1>
      <h6 className="mt-5">  
     The mate was a mighty sailing man the Skipper brave and sure.</h6>

    </Col>
    <Col md={2} xs={12} className="mt-5" >
    <h5> Ressources</h5>
    <div className="tiretbottom"> </div>
    <h6>About us</h6>
    <h6>Contact us</h6>
    <h6>News</h6>
 
    
    </Col>
    <Col md={2} xs={12} className="mt-5">
    <h5>Account</h5>
    <div className="tiretbottom"> </div>

    <h6>  Favorit list</h6>
    <h6> Plats</h6>
    <h6> Nos offres</h6>
    
    </Col>

   <Col md={3} xs={12} className="mt-5">
     
      <div className="footer-social-link" >
      <ul className="d-flex justify-content-center">
      <li>
          <a href="#">
              <i className="fa fa-facebook"></i>
          </a>
      </li>
      <li>
          <a href="#">
              <i className="fa fa-twitter"></i>
          </a>
      </li>
      <li>
          <a href="#">
          <i class="fa fa-instagram"></i>
          </a>
      </li>
      <li>
          <a href="#">
              <i class="fa fa-youtube"></i>
          </a>
      </li>
 
  </ul>
  </div>
     
   </Col>


<Col md={12} className="text-center mt-5">
<hr color="white"/>
 <p><Link to="/">  DELICE </Link> © Copyright 2021</p>
 </Col>
 </Row>

</div>

    )
    
}
export default Footer;
