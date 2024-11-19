import React, { useEffect } from 'react'
import Form from '../Form'
import { useDispatch, useSelector } from 'react-redux'
import { login, resetStatus } from '../../../../store/authSlice';
import { STATUS } from '../../../../globals/components/enumStatus/Status';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const dispatch=useDispatch();
  const  {status}=useSelector((state)=>state.auth);
  console.log(status)
  const navigate=useNavigate();

  const handleLogin=(data)=>{
    console.log(data);
    dispatch(login(data));
  }

  useEffect(() => {
    if (status === STATUS.SUCCESS) {
      console.log(status)
      alert("Successfully login to the system!")
      dispatch(resetStatus())
      navigate('/');
    } 
  }, [status, navigate, dispatch]);

  return (
    <>
    <Form type='login' onSubmit={handleLogin}/>
    </>
  )
}

export default Login
