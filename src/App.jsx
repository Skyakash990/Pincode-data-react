import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PincodeInput from "./components/PincodeInput";
import DisplayData from "./components/DisplayData";

export const PinContext = createContext(null);
function App() {
  const [pincode, setPincode] = useState(null);
  const [data, setPinData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [postOffice,setPostOffice]=useState([]);
  const [filteredText,setFilteredText]=useState('');

  // console.log(pincode)
  useEffect(() => {
    if (pincode) {
      setLoading(true);
      setTimeout(() => {
        fetch(`https://api.postalpincode.in/pincode/${pincode}`)
          .then((response) => response.json())
          .then((json) => {
            setPinData(json[0]); // <-- use the first object
            setPostOffice(json[0]?.PostOffice || []);
            setLoading(false);
          })
          .catch((err) => {
            console.log("Error on fetching data:", err);
            setLoading(false);
          });
      }, 2000);
      // .then(data=>setPinData(data));
    }
  },[pincode]);
  
  //Filter input values
  const filteredOffices = postOffice ? postOffice.filter((office) =>
    office?.Name?.toLowerCase().includes(filteredText.toLowerCase())
  ) : [];
  
  console.log("filtered Offices",filteredOffices);

  return (
    <>
      <PinContext.Provider value={{pincode, setPincode, data, loading ,filteredText, setFilteredText ,postOffice ,filteredOffices }}>
      {/* <DisplayData /> */}
      {/* {!data?<PincodeInput/>:<DisplayData/>} */}
        {loading ? (<div className="loader"></div>) : data ? (<DisplayData />) : (<PincodeInput />)}
      </PinContext.Provider>
    </>
  );
}

export default App;
