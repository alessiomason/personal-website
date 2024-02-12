import {Button, Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <>
            <Row className="mt-4 ms-4">
                <h1 className="primary-yellow">Pagina non trovata!</h1>
                <h5 className="primary-yellow">La pagina che stai cercando non esiste!</h5>
            </Row>

            <Row className="mt-4">
                <Col className="d-flex justify-content-center">
                    <Button variant="warning" onClick={() => navigate("/")}>Torna alla home</Button>
                </Col>
            </Row>
        </>
    );
}

export default NotFoundPage;