import styles from "./CalBtn.module.css";
const CalBtn=({calArr})=>{
    return <>
    {calArr.map((calIcon,index)=>(
        <button className={styles.calButton} key={index} >{calIcon}</button>
    ))}
    </>

}
export default CalBtn;