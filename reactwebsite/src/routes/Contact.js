import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import contactImg from "../images/contactdog.jpg";
import Hero from "../components/Hero";



function Contact() {
    return(
        <>
        <Navbar />
        <Hero 
            cName="hero-mid"
            heroImg={contactImg}
            title="Kapcsolat"
            btnClass="hide"
            />
        <ContactForm />


        <Footer/>
       </> 
     )
}

export default Contact;