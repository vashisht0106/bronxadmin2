import { CONTENT_REQUEST, CONTENT_REQUEST_FAIL, CONTENT_REQUEST_SUCCESS, EVENT_REQUEST, EVENT_REQUEST_FAIL, EVENT_REQUEST_SUCCESS } from "./actionType";

  
  const initialState = {
    isLoading: false,
    isError: false,
  data:[],
  event:[],
  isSuccess:true,
  };
  
  export const reducer = (state = initialState,action) => {
    switch (action.type) {
      case CONTENT_REQUEST, EVENT_REQUEST:
        return { ...state, isLoading: true,isError:false };
      case CONTENT_REQUEST_SUCCESS:
        return {
      
          isLoading: false,
          data:action.payload,
          isError:false
        };
      case CONTENT_REQUEST_FAIL,EVENT_REQUEST_FAIL:
        return { ...state, isLoading: false,isError:true };
     

  case EVENT_REQUEST_SUCCESS:
return{
  isSuccess:action.payload.success,
isLoading:false,
event:action.payload.event,
} 








      default:
        return state;
    }
  };
  