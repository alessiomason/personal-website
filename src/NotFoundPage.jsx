import {Button, Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div className="full-screen-slide not-found-page">
            <Row className="mt-2 ms-2">
                <h1 className="primary-yellow">Pagina non trovata!</h1>
                <h5 className="primary-yellow">La pagina che stai cercando non esiste!</h5>
            </Row>

            <Row className="mt-4">
                <Col className="d-flex justify-content-center">
                    <Button variant="warning" onClick={() => navigate("/")}>Torna alla home</Button>
                </Col>
            </Row>
        </div>
    );
}

export default NotFoundPage;