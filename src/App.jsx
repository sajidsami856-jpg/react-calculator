import Display from "./Components/Display";
import styles from "./App.module.css";
import CalBtn from "./Components/CalBtn";

function App() {
  const calArr=["C","/","%","/","7","8","9","*","4","5","6","-","1","2","3","+","0",",","()","="];

  return <div className={styles.CalContainer}>
    <Display/>
    <div className={styles.ButtonsContainer}>
      <CalBtn calArr={calArr}/>
    </div>

  </div>
}

export default App
