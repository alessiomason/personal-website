import {useTranslation} from "react-i18next";
import {useInView} from "react-intersection-observer";
import {useMediaQuery} from "react-responsive";
import {Col} from "react-bootstrap";

function WhoAmIDesktop() {
    const {t} = useTranslation();

    return (
        <div className="mb-5">
            <h1>{t("who-am-i")}</h1>
            <div className="justify-text">{t("about.1")}</div>
            <div className="justify-text">{t("about.2")}</div>
        </div>
    );
}

function WhoAmIMobile() {
    const {t} = useTranslation();
    const [ref, inView] = useInView({threshold: 0.2, triggerOnce: true});
    const isMobile = useMediaQuery({maxWidth: 767});

    return (
        <Col md={{span: 4, offset: 1}} ref={ref}
             className={"border-line-around-animation " + (inView ? "started" : "") + (isMobile ? " carousel-content" : "")}>
            <h1>{t("who-am-i")}</h1>
            <div className="justify-text">{t("about.1")}</div>
            <div className="justify-text">{t("about.2")}</div>
            <p>{t("scroll-to-know-more")}</p>
        </Col>
    );
}

export {WhoAmIDesktop, WhoAmIMobile};