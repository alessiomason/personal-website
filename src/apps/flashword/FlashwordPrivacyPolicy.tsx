import {Col, Container, Row} from "react-bootstrap";
import {Trans, useTranslation} from "react-i18next";
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
                    <p>{t("flashword.privacy-policy.description.1")}</p>
                    <p>{t("flashword.privacy-policy.description.2")}</p>
                    <p>{t("flashword.privacy-policy.description.3")}</p>
                    <p><Trans i18nKey="flashword.privacy-policy.description.4">For any question or comment regarding
                        Flashword (and its privacy policy), you can contact me
                        at <a className="blue-link" href="mailto:alessiomason99@gmail.com">alessiomason99@gmail.com</a>.</Trans>
                    </p>
                    <p>{t("flashword.privacy-policy.last-updated")}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default FlashwordPrivacyPolicy;