import {Col, Row} from "react-bootstrap";
import FlashwordProject from "./FlashwordProject";
import GestionaleProject from "./GestionaleProject";
import "./ThirdHomeSlide.css";

function ThirdHomeSlide() {
    return (
        <div className="third-home-slide primary-yellow">
            <h1>I miei progetti</h1>
            <p>Alcuni miei progetti personali.</p>
            <FlashwordProject/>
            <GestionaleProject/>
        </div>
    );
}

export default ThirdHomeSlide;