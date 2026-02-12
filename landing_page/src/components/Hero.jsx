import flipkart from "../assets/flipkart.png";
import amazone from "../assets/amazon.png";
import shoes from "../assets/shoe_image.png"
import "../App.css";

const Hero = ()=> {
    return(
        <main className="hero ">
            <div className="hero-content">
                <h1> YOUR FEET DESERVE THE BEST
</h1>

<p> YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
</p>
           

        <div className="hero-btn">
            <button> Shop-Now</button>
            <button className="secondary-btn">Category</button>
        </div>

        <div className="Shoping">
            <p>Also Available on</p>
            
            <div className="brand-icon">
                <img src={flipkart} alt="" />
                <img src={amazone} alt="" />
            </div>
        </div>
            </div>

            <div className="hero-image container">
                <img src={shoes} alt="" />
            </div>
        </main>
    );
}
export default Hero;