// import {FetchPlat} from '../Request
import {addNewPlat, deleteItems} from '../Request'
import axios from "axios";
import { SERVER_BASE_API} from '../Shared/APIurl'


//GET PLAT
export const  getPlat = () => async (dispatch) =>  {
    try{    
        const res= await axios.get('http://localhost:4000/app/resto/plat/getPlat')
        dispatch({
            type:"GET_PLAT_SUCCEDED",
            payload:res.data

        })
        console.log("sarrraa", res.data)

        }
        catch (error) {
            console.log(error);
         }
} 

//ADD PLAT
export const addPlatApi=(nom, description ,prix ,image )=> async (dispatch) =>{
    try{
        const res=await addNewPlat (nom, description ,prix ,image);
        dispatch ({
            type:"ADD_PLAT_SUCEDED",
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}

//DELETE PLAT
export const deleteItem = (id)=> async (dispatch) => {
    try {
  await deleteItems(id);
      dispatch({
        type:"REACT_APP_DELETE_PRODUIT",
        payload:id
    })
      console.log("delete")
      dispatch(getPlat);
    } catch (error) {
      console.log(error);
    }
  };

  //UPDATE PLAT
   export const updateItem =(id, nom, description, prix, image )  => async dispatch =>{
       try{
        const res = await axios.put(`http://localhost:4000/app/resto/plat/${id}/updatePlat`, {nom, description ,prix ,image }).then(res=>res.data).then(res=> window.location.reload())
           dispatch({
            type:"REACT_APP_UPDATE_PRODUIT",
            payload: res.data
        })
        console.log("superrr")

       }
        catch (error) {
        console.log(error);
      }
   }


