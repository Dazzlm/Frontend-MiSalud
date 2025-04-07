import styles from './CardMenuBase.module.css';
export default function CardMenuBase({children}) {
  return (
    <div className={styles["card__menu-base"]}>
      {children}
    </div>
  );
}