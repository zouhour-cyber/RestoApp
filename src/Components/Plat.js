import {React, useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getPlat} from '../Redux/Actions/PlatActions'
import {Container,Row, Col,  Button , Card } from 'react-bootstrap';

const Plat = () => { 

     const dispatch = useDispatch()
     const datas= useSelector(state => state.platReducer.datas)
     const loading = useSelector(state => state.platReducer.loading)

     useEffect(() => {
      dispatch(getPlat())
         }, [dispatch])
      console.log(datas, "nos plats ???");
    return (<div className="mt-5">
            <h1>Liste des plats</h1>

     <Container className="d-flex justify-content-between my-5 ">
        <Row> 
        {datas.map((el,key ) => (
             
          <Col md={3} sm={6} xs={12} className="mt-3">
           <Card style={{ width: '20rem' , height:"25rem"}}  key={key}>
             <Card.Img variant="top" src={el.image}   style={{ height: '17rem' }} />
             <Card.Body> 
               <Card.Title>{el.nom} </Card.Title>
               <Card.Text className="text-center">
                 <h6> {el.description} </h6> 
                 <h6> {el.prix} </h6> 
               </Card.Text>
               <Button variant="primary">Commander</Button>
             </Card.Body>
           </Card>
           </Col>
             
            
             ))}
             </Row>
           
               </Container> 
   

        </div>)
    
}

export default Plat


