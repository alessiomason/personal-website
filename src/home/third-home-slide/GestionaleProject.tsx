import {Col, Row} from "react-bootstrap";
import GestionaleTM from "../../images/works/Gestionale TM.png";
import {useTranslation} from "react-i18next";

function GestionaleProject() {
    const {t} = useTranslation();

    return (
        <Row className="single-project-slide">
            <Col xs={12} sm={6} className="gestionale-project-text-column">
                <h2>Gestionale</h2>
                <h5>{t("projects.gestionale.subtitle")}</h5>
                <p>{t("projects.gestionale.description")}</p>
            </Col>
            <Col xs={12} sm={5} className="gestionale-project-image-column">
                <img src={GestionaleTM} className="gestionale-project-image" alt="A screenshot of Gestionale"/>
            </Col>
        </Row>
    );
}

export default GestionaleProject;