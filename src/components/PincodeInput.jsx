import React, { useContext, useState ,useRef } from 'react'
import { PinContext } from '../App'

const PincodeInput = () => {
    const [pin,setPin]=useState();
    const {setPincode}=useContext(PinContext);
    const inputRef = useRef(null); // Step 1: Create ref


    function handleData(e){
      e.preventDefault();
      // if(e.target.value =='') setPincode(null);
        setPincode(pin);
    }

    function handleContainerClick() {
      inputRef.current?.focus(); // Step 2: Focus input on container click
    }
    // console.log(pin)
  return (
    <>
    <h2 className='heading'>Enter Pincode</h2>
    <div className='input-container'  onClick={handleContainerClick}>
        <input className='input' id='pincode' ref={inputRef} onChange={(e)=>setPin(e.target.value)}  type="text" placeholder='Pincode' />
    </div>
    <button className='look' onClick={handleData}>Lookup</button>
    </>
  )
}
export default PincodeInput;