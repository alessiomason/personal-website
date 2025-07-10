import {Col, Row} from "react-bootstrap";
import KeepSmilingImage from "../../images/works/KS.png";
import {useTranslation} from "react-i18next";

function KeepSmilingProject() {
    const {t} = useTranslation();

    return (
        <Row className="single-project-slide">
            <Col xs={12} sm={6} className="right-hand-side-project-text-column">
                <h2>KeepSmiling</h2>
                <h5>{t("projects.keepsmiling.subtitle")}</h5>
                <p>{t("projects.keepsmiling.description")}</p>
            </Col>
            <Col xs={12} sm={5} className="right-hand-side-project-image-column">
                <img src={KeepSmilingImage} className="gestionale-project-image"
                     alt="A screenshot of the KeepSmiling web application"/>
            </Col>
        </Row>
    );
}

export default KeepSmilingProject;