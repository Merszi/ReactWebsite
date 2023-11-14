import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home() {
    return(
       <>
        <Navbar />
        <Hero 
            cName="hero"
            heroImg={require('../images/dogbackg2.jpg')}
            title="Welcome to Paws & Play Canine Hub!"
            text="At Paws & Play, we believe in creating a world where every dog is not just a pet but a cherished family member. Our canine hub is designed to cater to the diverse needs of your furry friends, offering a blend of education, fun, and comfort."
            btnText="Read more"
            button="/about"
            btnClass="show"
            />
       </> 
    )
}

export default Home;