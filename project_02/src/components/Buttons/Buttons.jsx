import styles from "./Buttons.module.css";

const Buttons = (props) => {
  return (
    <div className={styles.container}>
      <button
        className={props.isOutline ? styles.outline_btns : styles.primary_btns}
      >
        {props.icon}
        {props.text}
      </button>
    </div>
  );
};

export default Buttons;
