import "./ThirdHomeSlide.css";
import {Button, Col, Row} from "react-bootstrap";
import ProjectsHomeCarousel from "./ProjectsHomeCarousel";

function ThirdHomeSlide() {
    return (
        <div className="d-flex flex-column justify-content-between full-screen-slide third-home-slide primary-yellow">
            <h1>I miei progetti</h1>

            <ProjectsHomeCarousel/>


            <Row>
                <Col><Button variant="warning" size="lg">Visualizza i miei progetti</Button></Col>
            </Row>
        </div>
    );
}

export default ThirdHomeSlide;