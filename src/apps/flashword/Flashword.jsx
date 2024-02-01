import {Col, Container, Row} from "react-bootstrap";
import "./Flashword.css";
import FlashwordIcon from "./images/Flashword_icon.png";

function Flashword() {
    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center">
                    <img src={FlashwordIcon} className="flashword-icon" alt="Flashword's icon"/>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h1>Flashword</h1>
                    <p>Flashword is the first app I developed!</p>
                    <p>It started as a personal project to create something I personally needed. Every time I would learn
                    a new word (maybe watching a film or TV series in English, or even some rare Italian word) I would
                    look it up on my phone's dictionary, but then quickly forget it. So I decided to create a place
                    where to store and revisit these words, so that I wouldn't forget them, and that's how the idea
                    for Flashword came to be!</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Flashword;