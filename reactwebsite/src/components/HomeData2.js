import "./HomeDetails.css";
import  {Component} from "react";
import Secpic from "../images/img12.avif";
import Secpic2 from "../images/img13.avif";

class HomeData extends Component {
    render() {
        return (
            <div className="first-det">
                <div className="image">
                    <img alt="img" src= {Secpic} />
                    <img alt="img" src= {Secpic2} />
                </div>
                <div className="det-text">
                    <h2>Luxurious Retreats</h2>
                    <p>When life calls for a getaway, entrust your four-legged friend to our premium dog boarding facility. Our cozy and spacious accommodations provide a home away from home, ensuring your dog receives the love and attention they deserve. With personalized care plans and a dedicated staff, your pet's comfort and happiness are our top priorities.</p>
                </div>
            </div>
        )
    }
}

export default HomeData;