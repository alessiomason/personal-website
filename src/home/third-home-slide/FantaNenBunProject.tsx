import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Button, Col, Row} from "react-bootstrap";
import Flashword from "../../images/works/Flashword.png";

function FantaNenBunProject() {
    const {t} = useTranslation();
    const navigate = useNavigate();

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
                    <Button variant="warning" onClick={() => navigate("https://www.fantanenbun.it")}>
                        {t("visit-website")}
                    </Button>
                </div>
            </Col>
            <Col/>
        </Row>
    );
}

export default FantaNenBunProject;