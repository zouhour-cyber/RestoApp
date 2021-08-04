import {useState} from 'react'
import {Button, Modal, Form , Row, Col} from 'react-bootstrap'
import {updateItem} from '../Redux/Actions/PlatActions'
import {useDispatch} from 'react-redux'



    export const ModalEdit = ({ el, id}) => {
    
    // Update Modal states//
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShowUpdated = () => setShow(true);
    const dispatch =useDispatch()
  
    // update's state //
    const [update, setUpdate] = useState(
  { nom:el.nom , description:el.description, prix:el.prix , image:el.image} )

    //Handle Change//
    const hanleChange = (e) => {
        const {name, value} = e.target
        setUpdate({...update, [name]:value})
        console.log("input",update)
    }

    //UPDATE PLAT //
    const updatePLat= () => {
      dispatch (updateItem(id, update.nom , update.description, update.prix, update.image ))
      console.log("updaaaate", update)
      setShow(false)
    }

  return(
      <>
    <Button variant="warning" className="btn-sm brown"  onClick={handleShowUpdated}><i class="far fa-edit"></i></Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="bgdark">
            <Modal.Title> <h2> DELICE </h2> </Modal.Title>
            </Modal.Header>

            <Modal.Body className="bgdark">
              <Row> 
                <Col  md={10} className="mx-auto my-4" > 
           
                <Form >
<Form.Group controlId="formBasicEmail">
<Form.Label> <h6>Nom du plat  </h6></Form.Label>
<Form.Control type="text" placeholder="nom" name='nom' defaultValue={el.nom} onChange={hanleChange} />

</Form.Group><Form.Group controlId="formBasicPassword">
<Form.Label> <h6> Description </h6></Form.Label>
<Form.Control type="text" placeholder="enter description"  name='description'  defaultValue={el.description}  onChange={hanleChange}  />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label> <h6>image </h6></Form.Label>
<Form.Control type="text" placeholder="enter image"  name='image' defaultValue={el.image} onChange={hanleChange}   />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label> <h6>Prix </h6></Form.Label>
<Form.Control type="text" placeholder="enter prix"  name="prix"  defaultValue={el.prix} onChange={hanleChange}   />
</Form.Group>

<Button className="btn-block mt-4" onClick={updatePLat}> Valider les modifications</Button>

</Form>


            </Col>
            </Row>
            </Modal.Body>
            
           
        </Modal>
        </>
    )
}
