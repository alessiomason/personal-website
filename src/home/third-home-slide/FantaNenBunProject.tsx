import {Button, Col, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import Flashword from "../../images/works/Flashword.png";
import "./FantaNenBunProject.css";

function FantaNenBunProject() {
    const {t} = useTranslation();

    function handleButtonClick() {
        window.location.href = "https://www.fantanenbun.it";
    }

    return (
        <Row className="single-project-slide">
            <Col xs={12} sm={5} className="d-flex justify-content-center align-items-start">
                <img src={Flashword} className="flashword-project-image" alt="A screenshot of the FantaNenBun website"/>
            </Col>
            <Col xs={12} sm={6} className="flashword-text-box">
                <h2>FantaNenBun</h2>
                <h5>{t("projects.fantanenbun.subtitle")}</h5>
                <p>{t("projects.fantanenbun.description")}</p>

                <div className="d-flex justify-content-center">
                    <Button variant="warning" onClick={handleButtonClick}>{t("visit-website")}</Button>
                </div>
            </Col>
            <Col/>
        </Row>
    );
}

export default FantaNenBunProject;