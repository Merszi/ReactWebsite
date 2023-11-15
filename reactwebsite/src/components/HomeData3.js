import "./HomeDetails.css";
import  {Component} from "react";
import Pic from "../images/img14.avif";
import Pic3 from "../images/img15.avif";

class HomeData2 extends Component {
    render() {
        return (
            <div className="first-det">
                <div className="det-text">
                    <h2>Community Engagement</h2>
                    <p>Join our vibrant community of dog enthusiasts! Attend our events, workshops, and playdates to connect with fellow dog lovers. Share experiences, tips, and stories, and let your dog socialize and make new furry friends in a safe and supervised environment.</p>
                </div>
                <div className="image">
                    <img alt="img" src= {Pic} />
                    <img alt="img" src= {Pic3} />
                </div>
            </div>
        )
    }
}

export default HomeData2;