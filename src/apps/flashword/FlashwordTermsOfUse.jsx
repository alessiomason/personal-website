import {Col, Container, Row} from "react-bootstrap";
import "./Flashword.css";
import FlashwordIcon from "./images/Flashword_icon.png";

function FlashwordTermsOfUse() {
    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center">
                    <img src={FlashwordIcon} className="flashword-icon" alt="Flashword's icon"/>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h1>Flashword's terms of use</h1>
                    <p>Flashword is governed by <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
                        Apple's Standard EULA for apps.</a></p>
                    <p>For any question or comment regarding Flashword (and its terms of use), you can contact me
                        at <a href="mailto:alessiomason99@gmail.com">alessiomason99@gmail.com</a>.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default FlashwordTermsOfUse;