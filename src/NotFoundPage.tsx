import {Button, Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Klink from "./images/klink.png";
import "./NotFoundPage.css";

function NotFoundPage() {
    const navigate = useNavigate();
    const {t} = useTranslation();

    return (
        <div className="full-screen-slide not-found-page">
            <Row className="mt-2 ms-2">
                <h1 className="primary-yellow">{t("not-found.title")}</h1>
                <h5 className="primary-yellow">{t("not-found.description")}</h5>
            </Row>

            <Row>
                <div className="d-flex center-row no-padding">
                    <img src={Klink} className="klink" alt="The Pokémon Klink, spinning"/>
                </div>
            </Row>

            <Row className="mt-4">
                <Col className="d-flex justify-content-center">
                    <Button variant="warning" onClick={() => navigate("/")}>
                        {t("not-found.button")}</Button>
                </Col>
            </Row>
        </div>
    );
}

export default NotFoundPage;