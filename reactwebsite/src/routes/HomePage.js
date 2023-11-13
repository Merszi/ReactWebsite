import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home() {
    return(
       <>
        <Navbar />
        <Hero 
            cName="hero"
            heroImg="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Welcome to Paws & Play Canine Hub!"
            text="At Paws & Play, we believe in creating a world where every dog is not just a pet but a cherished family member. Our canine hub is designed to cater to the diverse needs of your furry friends, offering a blend of education, fun, and comfort."
            btnText="Read more"
            button="/"
            btnClass="show"
            />
       </> 
    )
}

export default Home;