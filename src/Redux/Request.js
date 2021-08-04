import Axios from "axios";

import {GET_PLAT_API, SERVER_BASE_API} from "./Shared/APIurl";

// getPlat
// export const FetchPlat=()=>
// Axios.get(GET_PLAT_API).then(res=>res.data)
//   .catch(error => console.log("majeouch",error))


  const Api = Axios.create({ baseURL: "http://localhost:4000/app/resto/plat" });

  //addPlat
  function addNewPlat(nom, description,prix,image ) {
      return Api.post("/addPlat", { nom, description,prix,image});
    }
  
  
    export {addNewPlat} 
    export default {addNewPlat}


export const deleteItems=(id)=> {
  Axios.delete(`${SERVER_BASE_API}/plat/${id}/deletePlat`).then(res=>res.data).then(res=> window.location.reload());
}


// export const updateItems=(id)=> {
//   Axios.put(`${SERVER_BASE_API}/${id}/updatePlat`, {nom,description,prix,image }).then(res=>res.data).then(res=> window.location.reload()) ;
// }

