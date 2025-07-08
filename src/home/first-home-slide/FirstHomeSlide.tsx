import {Row, Col} from "react-bootstrap";
import {ArrowDown} from "react-bootstrap-icons";
import {useMediaQuery} from "react-responsive";
import {useTranslation} from "react-i18next";
import PieceOfCode from "./PieceOfCode";
import RandomQuote from "./RandomQuote";
import ProfilePicture from "../../images/profile_picture.jpeg";
import "./FirstHomeSlide.css";

function FirstHomeSlide() {
    const {t} = useTranslation();
    const isMobile = useMediaQuery({maxWidth: 767});

    return (
        <div className="d-flex flex-column justify-content-center full-screen-slide first-home-slide">
            {!isMobile && <RandomQuote/>}
            <PieceOfCode/>

            <Row className="d-flex align-items-center">
                <Col md={3} className={"d-flex " + (isMobile ? "justify-content-center" : "justify-content-end")}>
                    <img src={ProfilePicture} className="profile-picture" alt="profile-picture"/>
                </Col>
                <Col>
                    <Row><h1 className={"primary-yellow " + (isMobile ? "text-center" : "")}>{t("hi")}<span
                        className="waving-hand">👋</span></h1></Row>
                    <Row><h4 className={"primary-yellow " + (isMobile ? "text-center" : "")}>{t("hi-subheadline")}</h4>
                    </Row>
                </Col>
            </Row>

            <ArrowDown className="arrow-down"/>
        </div>
    );
}

export default FirstHomeSlide;