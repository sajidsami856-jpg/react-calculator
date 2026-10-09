import styles from "./Display.module.css";
const Display =({currVal})=>{
    return <input type="text" className={styles.display} value={currVal} readOnly />;
}

export default Display;