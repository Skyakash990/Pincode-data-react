import React, { useContext, useState } from 'react'
import { PinContext } from '../App'

const PincodeInput = () => {
    const [pin,setPin]=useState();
    const {setPincode}=useContext(PinContext);
    function handleData(e){
      e.preventDefault();
      // if(e.target.value =='') setPincode(null);
        setPincode(pin);
    }
    // console.log(pin)
  return (
    <>
    <h2 className='heading'>Enter Pincode</h2>
    <div className='input-container'>
        <input className='input' onChange={(e)=>setPin(e.target.value)}  type="text" placeholder='Pincode' />
    </div>
    <button className='look' onClick={handleData}>Lookup</button>
    </>
  )
}
export default PincodeInput