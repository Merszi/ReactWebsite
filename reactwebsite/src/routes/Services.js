import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesImg from "../images/img4.avif";

function Services() {
    return(
        <>
        <Navbar />
        <Hero 
            cName="hero-mid"
            heroImg={ServicesImg}
            title="Services"
            btnClass="hide"
            />
       </> 
     )
}

export default Services;