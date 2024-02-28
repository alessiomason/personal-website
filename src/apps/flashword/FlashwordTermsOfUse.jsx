import {Col, Container, Row} from "react-bootstrap";
import {Trans, useTranslation} from "react-i18next";
import "./Flashword.css";
import FlashwordIcon from "./images/Flashword_icon.png";

function FlashwordTermsOfUse() {
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
                    <h1>{t("flashword.terms-of-use.title")}</h1>
                    <p><Trans i18nKey="flashword.terms-of-use.description.1">Flashword is governed by <a
                        className="blue-link" href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
                        Apple's Standard EULA for apps</a>.</Trans></p>
                    <p><Trans i18nKey="flashword.terms-of-use.description.2">For any question or comment regarding
                        Flashword (and its terms of use), you can contact me
                        at <a className="blue-link" href="mailto:alessiomason99@gmail.com">alessiomason99@gmail.com</a>.</Trans>
                    </p>
                    <p>{t("flashword.terms-of-use.last-updated")}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default FlashwordTermsOfUse;