import styles from "./CalBtn.module.css";
const CalBtn=({calArr,displayChange})=>{
    return <>
    {calArr.map((calIcon,index)=>(
        <button className={styles.calButton} key={index} onClick={(evt)=> displayChange(evt)} value={calIcon}>{calIcon}</button>
    ))}
    </>

}
export default CalBtn;