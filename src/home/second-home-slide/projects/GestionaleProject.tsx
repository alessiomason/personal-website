import {Col, Row} from "react-bootstrap";
import Gestionale from "../../../images/works/KS.png";
import {useTranslation} from "react-i18next";

function GestionaleProject() {
    const {t} = useTranslation();

    return (
        <Row className="single-project-slide">
            <Col xs={5} className="text-end">
                <h2>Gestionale</h2>
                <p>Un'applicazione web per la gestione del personale e delle ore lavorate.</p>
                <p>Scritto in TypeScript usando Express come framework backend e React per il frontend,
                Gestionale permette di registrare le ore lavorate, gestire gli ordini aziendali e i ticket
                di assistenza. Lato amministrativo permette anche di gestire le commesse e calcolarne il
                costo in base alle ore lavorate, permette di visualizzare le ore lavorate aggregate per commessa, mese
                e dipendente, di pianificare le attività e gestire il piano ferie.</p>
            </Col>
            <Col>
                <img src={Gestionale} className="gestionale-project-image"/>
            </Col>
        </Row>
    );
}

export default GestionaleProject;