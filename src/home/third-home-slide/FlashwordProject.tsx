import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Button, Col, Row} from "react-bootstrap";
import Flashword from "../../images/works/Flashword.png";
import FlashwordIcon from "../../apps/flashword/images/Flashword_icon.png";

function FlashwordProject() {
    const {t} = useTranslation();
    const navigate = useNavigate();

    return (
        <Row className="single-project-slide">
            <Col>
                <img src={Flashword} className="flashword-project-image"/>
            </Col>
            <Col>
                <img src={FlashwordIcon} className="flashword-project-icon"/>
            </Col>
            <Col xs={5} className="ms-5">
                <h2>Flashword</h2>
                <h5>{t("flashword.description.3")}</h5>
                <p>{t("flashword.description.4")}</p>

                <div className="d-flex justify-content-center">
                    <Button variant="warning" onClick={() => navigate("/apps/flashword")}>
                        {t("show-more")}
                    </Button>
                </div>
            </Col>
            <Col/>
        </Row>
    );
}

export default FlashwordProject;