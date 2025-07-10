import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import {Trans, useTranslation} from "react-i18next";
import "./Flashword.css";
import FlashwordIcon from "./images/Flashword_icon.png";

function Flashword() {
    const {t} = useTranslation();

    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center">
                    <img decoding="sync" src={FlashwordIcon} className="flashword-icon" alt="Flashword's icon"/>
                </Col>
            </Row>

            <Row>
                <Col className="d-flex justify-content-center">
                    <a href="https://apps.apple.com/app/flashword-save-learnt-words/id6477286559?itsct=apps_box_badge&amp;itscg=30200"
                    className="app-store-link">
                        <img
                        src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1708041600"
                        alt="Download on the App Store"
                        decoding="sync"
                        className="app-store-link-image"/>
                    </a>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h1>{t("flashword.app-name")}</h1>
                    <p>{t("flashword.description.1")}</p>
                    <p>{t("flashword.description.2")}</p>
                    <p>{t("flashword.description.3")}</p>
                    <p>{t("flashword.description.4")}</p>
                    <p><Trans i18nKey="flashword.app-store-link">
                        <Link to="https://apps.apple.com/app/flashword-save-learnt-words/id6477286559"
                           className="blue-link">App Store link</Link>
                    </Trans></p>
                    <p><Trans i18nKey="flashword.github-link">
                        <Link to="https://github.com/alessiomason/flashword" className="blue-link">GitHub repository</Link>
                    </Trans></p>
                    <p><Trans i18nKey="flashword.privacy-policy.link">
                        <Link to="privacy-policy" className="blue-link">Privacy policy</Link>
                    </Trans></p>
                    <p><Trans i18nKey="flashword.terms-of-use.link">
                        <Link to="terms-of-use" className="blue-link">Terms os use</Link>
                    </Trans></p>
                </Col>
            </Row>
        </Container>
    );
}

export default Flashword;