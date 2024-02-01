import {Col, Container, Row} from "react-bootstrap";
import "./Flashword.css";
import FlashwordIcon from "./images/Flashword_icon.png";

function FlashwordPrivacyPolicy() {
    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center">
                    <img src={FlashwordIcon} className="flashword-icon" alt="Flashword's icon"/>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h1>Flashword's privacy policy</h1>
                    <p>Flashword does not collect any data about you or the words or categories you save in the app.
                    All data are saved locally and do not leave your device.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default FlashwordPrivacyPolicy;