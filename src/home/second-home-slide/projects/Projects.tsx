import {Col, Row} from "react-bootstrap";
import "./Projects.css";
import FlashwordProject from "./FlashwordProject";
import GestionaleProject from "./GestionaleProject";

function Projects() {
    return (
        <div className="projects-slide">
            <h1>I miei progetti</h1>
            <p>Alcuni miei progetti personali.</p>
            <FlashwordProject/>
            <GestionaleProject/>
        </div>
    );
}

export default Projects;