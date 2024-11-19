import React, { useEffect } from 'react'
import Form from '../Form'
import {useDispatch, useSelector} from "react-redux"
import { register, resetStatus } from '../../../../store/authSlice';
import { STATUS } from '../../../../globals/components/enumStatus/Status';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const dispatch =useDispatch();
  const {status}=useSelector((state)=>state.auth);
  console.log(status)
  const navigate=useNavigate();

  //handle register
  const handleRegister=(data)=>{
   console.log(data);
    dispatch(register(data));
  }

  useEffect(()=>{
    if(status===STATUS.SUCCESS){
      console.log( status)
      alert("User is successfully register")
      dispatch(resetStatus());
      navigate("/login")
    }
  },[status,navigate,dispatch])


  return (
  <>
    <Form type='register' onSubmit={handleRegister}/>
  </>
  )
}

export default Register
