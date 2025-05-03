import styles from "./Navbar.module.css";

const Navbar = () => {
  console.log(styles);
  return (
    <>
      <nav className={`${styles.navbar} container`}>
        <div className={`${styles.logo}`}>
          <img src="/image/icon.png" alt="LOGO" />
        </div>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
