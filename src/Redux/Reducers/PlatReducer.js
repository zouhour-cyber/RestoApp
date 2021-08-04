

const initialState={
    datas : [],
    loading:true
  } 
  
   export const platReducer = ( state = initialState, action) => {
    const { type, payload } = action;
    switch (type){
      case "GET_PLAT_SUCCEDED":
    
        return {
          ...state,
          datas: payload,
          loading: false
        }


        case "ADD_PLAT_SUCEDED":
          return {
           ...state,
           datas: [...state.datas, payload]
     
          }

          case "REACT_APP_DELETE_PRODUIT":
            return {
              ...state,
              datas: state.datas.filter(
                data => data._id !== payload
              )
            }

            
        
    }
    console.log('inchallah labes si ali', state)
    return state; 
  };


  