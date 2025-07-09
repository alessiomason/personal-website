import {useTranslation} from "react-i18next";
import {useInView} from "react-intersection-observer";
import {useMediaQuery} from "react-responsive";
import {Github, Mastodon, Threads} from "react-bootstrap-icons";
import "./SecondHomeSlideFooter.css";

function AcrossTheWeb() {
    const {t} = useTranslation();
    const [ref, inView] = useInView({threshold: 1, triggerOnce: true});
    const isMobile = useMediaQuery({maxWidth: 767});

    return (
        <div ref={ref} className={`mt-5 across-the-web ${(inView || isMobile ? "animate" : "no-animate")}`}>
            <h3>{t("across-the-spider-verse")}</h3>
            <div className={`d-flex ${isMobile ? "justify-content-center" : ""} align-items-center`}>
                <Github className="web-icon"/><a href="https://github.com/alessiomason">@alessiomason</a>
            </div>
            <div className={`d-flex ${isMobile ? "justify-content-center" : ""} align-items-center`}>
                <Threads className="web-icon"/><a href="https://threads.net/mason_alessio">@mason_alessio</a>
            </div>
            <div className={`d-flex ${isMobile ? "justify-content-center" : ""} align-items-center`}>
                <Mastodon className="web-icon"/><a href="https://mastodon.social/@alemason">@alemason@mastodon.social</a>
            </div>
        </div>
    );
}

export default AcrossTheWeb;