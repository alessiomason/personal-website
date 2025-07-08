import KeepSmiling from "../../images/works/KS.png";
import "./ProjectsHomeCarousel.css";

function ProjectsHomeCarousel() {
    return (
        <div className="carousel-container">
            <img src={KeepSmiling} className="carousel-image image1"/>
            <img src={KeepSmiling} className="carousel-image image2"/>
            <img src={KeepSmiling} className="carousel-image image3"/>
            <img src={KeepSmiling} className="carousel-image image4"/>
            <img src={KeepSmiling} className="carousel-image image5"/>


            <img src={KeepSmiling} className="carousel-image image1"/>
            <img src={KeepSmiling} className="carousel-image image2"/>
            <img src={KeepSmiling} className="carousel-image image3"/>
            <img src={KeepSmiling} className="carousel-image image4"/>
            <img src={KeepSmiling} className="carousel-image image5"/>
        </div>
    );
}

export default ProjectsHomeCarousel;