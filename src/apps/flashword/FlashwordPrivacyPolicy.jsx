import {Col, Container, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import "./Flashword.css";
import FlashwordIcon from "./images/Flashword_icon.png";

function FlashwordPrivacyPolicy() {
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
                    <h1>{t("flashword.privacy-policy.title")}</h1>
                    <p>{t("flashword.privacy-policy.description")}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default FlashwordPrivacyPolicy;