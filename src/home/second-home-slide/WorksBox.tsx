import {Trans, useTranslation} from "react-i18next";
import {useInView} from "react-intersection-observer";
import {useMediaQuery} from "react-responsive";
import {Col} from "react-bootstrap";
import {HourglassSplit, JournalCode, PcDisplay} from "react-bootstrap-icons";

function WorksBox() {
    const {t} = useTranslation();
    const [ref, inView] = useInView({threshold: 0.2, triggerOnce: true});
    const isMobile = useMediaQuery({maxWidth: 767});

    return (
        <Col md={{span: 4, offset: 2}} ref={ref}
             className={"border-line-around-animation " + (inView ? "started" : "") + (isMobile ? " carousel-content" : "")}>
            <h3 className="text-center">{t("works.title")}</h3>
            <span className="d-flex justify-content-center"><JournalCode className="works-icon"/></span>
            <p>{t("works.description.1")}</p>
            <p><Trans i18nKey="works.description.2">Su <a href="https://github.com/alessiomason"
                                                          className="text-decorate-link">GitHub</a> trovi alcuni di
                questi progetti
                e anche il <a href="https://github.com/alessiomason/personal-website"
                              className="text-decorate-link">repository</a> di questo stesso sito.</Trans></p>
        </Col>
    );
}

export default WorksBox;