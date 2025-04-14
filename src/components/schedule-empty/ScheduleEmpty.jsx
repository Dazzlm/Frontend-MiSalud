import styles from './ScheduleEmpty.module.css';
import iconScheduleEmpty from '../../assets/images/emptyschedule.png';
import arrowSchedule from '../../assets/images/arrowschedule.png';
export default function ScheduleEmpty() {
    return (
        <div className= {styles[ "schedule__empty"]}>
            <div className= {styles[ "schedule__empty--container"]}>
                <img className= {styles[ "empty__container--image"]} 
                    src={iconScheduleEmpty} alt="schedule" />
            </div>

            <h2 className= {styles[ "schedule__empty--title"]} >No tienes citas programadas</h2>
            
            <p className= {styles[ "schedule__empty--description"]}>Presiona el boton para agregar</p>
            
            <div className={styles[ "schedule__empty--containerarrow"]}>
                <div className= {styles[ "empty__container--arrow"]}>
                    <img className= {styles[ "container__arrow--img"]} src={arrowSchedule} alt="" />
                </div>
                
                <div className={styles["container__arrow--container"]}>
                    <button className={styles["arrow__container--button"]}>
                        <p className={styles["arrow__container--text"]} >+</p>
                    </button>
                </div>
            </div>
            
        </div>
    );
}