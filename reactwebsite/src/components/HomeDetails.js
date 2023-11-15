import "./HomeDetails.css"
import Firstpic from "../images/img10.avif"
import Firstpic2 from "../images/img11.avif"
import HomeData from "./HomeData2"
import HomeData2 from "./HomeData3"


const HomeDetails = () => {
    return (
        <div className="homedetails">
            <h1>Why Choose Paws & Play?</h1>
            <p>Embark on a journey of joy, learning, and companionship with Paws & Play. Because every paw deserves the best!</p>

            <div className="first-det">
                <div className="det-text">
                    <h2>Training Excellence</h2>
                    <p>Unleash the potential in your dog through our state-of-the-art dog training programs. Our certified trainers utilize positive reinforcement techniques to build a strong bond between you and your canine companion. From basic obedience to advanced skills, we are committed to helping your dog become the well-behaved, happy companion you've always dreamed of.</p>
                </div>
                <div className="image">
                    <img alt="img" src= {Firstpic} />
                    <img alt="img" src= {Firstpic2} />
                </div>
            </div>

            <HomeData />
            <HomeData2 />

            <div className="footer">
                <p>Paws & Play Canine Hub
                    1234 Dogwood Lane
                    Cityville, CA 12345
                    Phone: (555) 555-5555
                    Email: info@pawsandplayhub.com</p>
                <p>Follow Us: Facebook | Instagram | Twitter</p>
                <h2>© 2023 Paws & Play Canine Hub. All rights reserved.</h2>
            </div>
        </div>
    )
}
export default HomeDetails