import {useTranslation} from "react-i18next";
import {useInView} from "react-intersection-observer";
import {useMediaQuery} from "react-responsive";
import {Col} from "react-bootstrap";
import {
    Android,
    Apple, Database, Ethernet,
    FiletypeJava,
    FiletypeJsx,
    FiletypePhp, JournalCode,
    Laptop,
    ListColumns,
    Phone,
    Server, ShieldCheck
} from "react-bootstrap-icons";

function InterestsBox() {
    const {t} = useTranslation();
    const [ref, inView] = useInView({threshold: 0.2, triggerOnce: true});
    const isMobile = useMediaQuery({maxWidth: 767});

    return (
        <Col md={{span: 4, offset: 1}} ref={ref}
             className={"border-line-around-animation " + (inView ? "started" : "") + (isMobile ? " carousel-content" : "")}>
            <h3 className="text-center">{t("interests")}</h3>
            <ul className="first-ul">
                <li className="first-li"><span className="d-flex align-items-center"><Laptop
                    className="list-icon"/>{t("web-applications.title")}</span>
                    <ul>
                        <li><span className="d-flex align-items-center"><FiletypeJsx
                            className="list-icon"/>{t("web-applications.front-end")}</span>
                        </li>
                        <li><span className="d-flex align-items-center"><Server
                            className="list-icon"/>{t("web-applications.back-end")}</span>
                        </li>
                        <li><span className="d-flex align-items-center"><FiletypePhp
                            className="list-icon"/>{t("web-applications.traditional")}</span>
                        </li>
                    </ul>
                </li>

                <li className="first-li"><span className="d-flex align-items-center"><Phone
                    className="list-icon"/>{t("mobile-applications.title")}</span>
                    <ul>
                        <li><span className="d-flex align-items-center"><Apple
                            className="list-icon"/>{t("mobile-applications.ios")}</span>
                        </li>
                        <li><span className="d-flex align-items-center"><Android
                            className="list-icon"/>{t("mobile-applications.android")}</span>
                        </li>
                    </ul>
                </li>

                <li className="first-li"><span className="d-flex align-items-center"><ListColumns
                    className="list-icon"/>{t("system-programming.title")}</span>
                    <ul>
                        <li><span className="d-flex align-items-center"><FiletypeJava
                            className="list-icon"/>{t("system-programming.languages")}</span>
                        </li>
                    </ul>
                </li>

                <li className="first-li"><span className="d-flex align-items-center"><JournalCode
                    className="list-icon"/>{t("other-computer-sciences.title")}</span>
                    <ul>
                        <li><span className="d-flex align-items-center"><Database
                            className="list-icon"/>{t("other-computer-sciences.db")}</span>
                        </li>
                        <li><span className="d-flex align-items-center"><Ethernet
                            className="list-icon"/>{t("other-computer-sciences.networks")}</span>
                        </li>
                        <li><span className="d-flex align-items-center"><ShieldCheck
                            className="list-icon"/>{t("other-computer-sciences.cybersecurity")}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </Col>
    );
}

export default InterestsBox;