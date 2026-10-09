import Display from "./Components/Display";
import styles from "./App.module.css";
import CalBtn from "./Components/CalBtn";
import { useState } from "react";

function App() {
  const calArr=["C","/","%","/","7","8","9","*","4","5","6","-","1","2","3","+","0",",","()","="];
  let[currVal,setCalVal]=useState("");
  let displayChange=(evt)=>{
    console.log(evt.target.value);
    let iconVal=evt.target.value;
    if(iconVal==="C"){
      setCalVal("");
      console.log(currVal);
    }else if(iconVal=== "=") {
      setCalVal(eval(currVal));
    }else{
      setCalVal(currVal+iconVal);
    }
  }
  return <div className={styles.CalContainer}>
    <Display currVal={currVal}/>
    <div className={styles.ButtonsContainer}>
      <CalBtn calArr={calArr} displayChange={displayChange}/>
    </div>

  </div>
}

export default App
