import Buttons from "../Buttons/Buttons";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Buttons text="VIA SUPPORT CHAT" icon={<MdMessage />} />
          <Buttons text="VIA CALL" icon={<FaPhoneAlt />} />
        </div>
        <Buttons isOutline={true} text="VIA EMAIL FORM" icon={<HiMail />} />

        <form action="">
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="message">Message</label>
            <input type="message" name="message" />
          </div>
          <Buttons text="SEND MESSAGE" />
        </form>
      </div>
      <div className={styles.contactImage}>
        <img src="/image/hero-image.svg" alt="Contact Us" />
      </div>
    </section>
  );
};

export default ContactForm;
