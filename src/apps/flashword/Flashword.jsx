import {Col, Container, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import "./Flashword.css";
import FlashwordIcon from "./images/Flashword_icon.png";

function Flashword() {
    const {t} = useTranslation();

    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center">
                    <img src={FlashwordIcon} className="flashword-icon" alt="Flashword's icon"/>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h1>{t("flashword.app-name")}</h1>
                    <p>{t("flashword.description.1")}</p>
                    <p>{t("flashword.description.2")}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Flashword;