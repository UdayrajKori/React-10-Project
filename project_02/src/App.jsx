import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactHeader from "./components/ContactHeader/ContactHeader.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <ContactHeader />
      <ContactForm />
    </>
  );
}

export default App;
