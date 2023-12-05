import React,{useState} from 'react'
import Login from '../Signin/Signin'
import Signup from '../Signup/Signup';
const Conditional = () => {
    const[state,setState] = useState({islogged:true});
  return ( state.islogged ? <Login/> : <Signup/>);
}

export default Conditional;