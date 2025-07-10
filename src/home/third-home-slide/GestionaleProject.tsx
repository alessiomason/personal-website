import {Col, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import GestionaleTMImage from "../../images/works/Gestionale TM.png";
import "./GestionaleProject.css";

function GestionaleProject() {
    const {t} = useTranslation();

    return (
        <Row className="single-project-slide">
            <Col xs={12} sm={6} className="right-hand-side-project-text-column">
                <h2>Gestionale</h2>
                <h5>{t("projects.gestionale.subtitle")}</h5>
                <p>{t("projects.gestionale.description")}</p>
            </Col>
            <Col xs={12} sm={5} className="right-hand-side-project-image-column">
                <img src={GestionaleTMImage} className="gestionale-project-image" alt="A screenshot of Gestionale"/>
            </Col>
        </Row>
    );
}

export default GestionaleProject;