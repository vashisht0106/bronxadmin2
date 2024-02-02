import axios from "axios";
import {
CONTENT_REQUEST,
CONTENT_REQUEST_SUCCESS,
CONTENT_REQUEST_FAIL,
EVENT_REQUEST,
EVENT_REQUEST_SUCCESS


} from "./actionType";

const BACKEND_URL=process.env.REACT_APP_BACKEND_URL;

export const ContentAction = (filterfile) =>async(dispatch) => {
 
 try{  
     dispatch({ type:CONTENT_REQUEST });
     if(filterfile){
       const {data}= await axios.get(`${BACKEND_URL}/api/v1/readchildfolder/${filterfile}`)

dispatch({ type:CONTENT_REQUEST_SUCCESS, payload:data });

     }
     else{
      const { data} = await axios.get(`${BACKEND_URL}/api/v1/readfolder/`);


dispatch({ type:CONTENT_REQUEST_SUCCESS, payload:data });
     }
   
  
}
    catch(error) {
      dispatch({ type:CONTENT_REQUEST_FAIL });
    };
};



export const fetchEvent=()=>async(dispatch)=>{

try {
  dispatch({type:EVENT_REQUEST})

  const { data} = await axios.get(`${BACKEND_URL}/api/v1/find_event`);
dispatch({type:EVENT_REQUEST_SUCCESS,payload:data})

} catch (error) {
  
}



}
