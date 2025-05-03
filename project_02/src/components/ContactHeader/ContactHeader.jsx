import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <>
      <div className={`box1 ${styles.contact_section}`}>
        <h1>CONTACT US</h1>
        <p>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT.
        </p>
      </div>
    </>
  );
};

export default ContactHeader;
