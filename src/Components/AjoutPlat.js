import React from 'react'
import {Form,Button,Modal, Container, Table} from "react-bootstrap"
import {useState, useEffect} from 'react';
import {addPlatApi} from "../Redux/Actions/PlatActions"
import {useDispatch,useSelector} from 'react-redux'
import {getPlat} from '../Redux/Actions/PlatActions'
import{deleteItem } from '../Redux/Actions/PlatActions'
import { ModalEdit } from './ModalEdit';

const AjoutPlat = () => {

  //state de modal 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()


const datas= useSelector(state => state.platReducer.datas)

    useEffect(() => {
     dispatch(getPlat())
        }, [dispatch])
     console.log(datas, "nos plats ???");


const [input,setInput]=useState({nom:"",description:"", prix:"", image:"" })

const hanleChange=(e)=>{
    const {name,value}=e.target
    setInput({
        ...input,
        [name]:value
    })
    console.log("input",input)
}

//ADD Menu 
const addNewMenu=()=>{
dispatch (addPlatApi(input.nom , input.description, input.prix ,input.image)) 
console.log("inpuuuuuuuuuuuut",input)
setShow(false)
}


 //DeleteMenu
 const deleteItemm =(id)=>{
  dispatch (deleteItem(id) )
  console.log(deleteItem(id))
}
  return(
    <div>
    <div className='container mt-5'>
 <Button variant="primary" onClick={handleShow}>
   Ajouter un Plat
</Button>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className="title-modal">Add Menu</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form >
<Form.Group controlId="formBasicEmail">
<Form.Label>Nom du plat</Form.Label>
<Form.Control type="text" placeholder="nom" name='nom' onChange={hanleChange} />

</Form.Group><Form.Group controlId="formBasicPassword">
<Form.Label>Description</Form.Label>
<Form.Control type="text" placeholder="enter description"  name='description' onChange={hanleChange}  />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label>image</Form.Label>
<Form.Control type="text" placeholder="enter image"  name='image' onChange={hanleChange}   />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label>Prix</Form.Label>
<Form.Control type="text" placeholder="enter prix"  name="prix" onChange={hanleChange}   />
</Form.Group>


<Button className="btn-block" onClick={addNewMenu}>Ajouter</Button>
</Form>
</Modal.Body>



</Modal>

<Container className="mt-3">

<Table  hover className="text-center" >
<thead >
   <tr>
     <th>Image</th>
     <th>Nom</th>
     <th>Description</th>
     <th>Prix </th>
     <th>Actions </th>


   </tr>
 </thead>

 <tbody>
 {datas.map(el => (
   <tr>
     <td> <img src={el.image} style={{ width: '15rem' , height:"10rem"}} className="imagetable"/> </td>
     <td> <p> {el.nom}</p> </td>
     <td> <p> {el.description} </p></td>
     <td> <p> {el.prix} </p> </td>

     <td><Button variant="dark"  className="mr-2 btn-sm"  onClick={() => deleteItemm(el._id)}
 ><i  class="fa fa-times"></i></Button> 
   <ModalEdit  el={el}  id={el._id} />
   </td>
   </tr>
   ))}
  
 </tbody>
 
</Table> 

</Container>



</div>
</div>
   )

 }

export default AjoutPlat

      