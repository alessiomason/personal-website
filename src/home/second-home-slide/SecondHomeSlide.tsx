import {useState} from "react";
import {Row, Col, Carousel} from "react-bootstrap";
import {Trans, useTranslation} from "react-i18next";
import {
    Laptop, Phone, FiletypeJsx, Server, FiletypePhp, Apple, Android,
    ListColumns, FiletypeJava, JournalCode, Database, Ethernet, ShieldCheck, HourglassSplit, Github, Mastodon, Threads
} from "react-bootstrap-icons";
import {useInView} from "react-intersection-observer";
import {useMediaQuery} from "react-responsive";
import {ArrowLeftCircleFill, ArrowRightCircleFill} from "react-bootstrap-icons";
import Projects from "./projects/Projects";
import "./SecondHomeSlide.css";

function SecondHomeSlideDesktop() {
    return (
        <div className="second-home-slide primary-yellow">
            <div className="full-screen-slide d-flex flex-column justify-content-between">
                <WhoAmIDesktop/>

                <Row>
                    <InterestsBox/>
                    <WorksBox/>
                </Row>

                <AcrossTheWeb/>
            </div>

            <Projects/>
        </div>
    );
}

function SecondHomeSlideMobile() {
    const maxSlide = 3;
    const [index, setIndex] = useState(0);

    function handleSelect(selectedIndex: number) {
        setIndex(selectedIndex);
    }

    function handleArrowSelect(prevSlide: boolean) {
        if (prevSlide) {
            setIndex(prevIndex => ((prevIndex - 1 >= 0) ? prevIndex - 1 : 0));
        } else {
            setIndex(prevIndex => ((prevIndex + 1 < maxSlide) ? prevIndex + 1 : maxSlide));
        }
    }

    return (
        <div className="second-home-slide primary-yellow">
            <>&nbsp;</>
            <div>
                <Carousel activeIndex={index} onSelect={handleSelect} interval={null} wrap={false} indicators={false}
                          controls={false}>
                    <Carousel.Item><WhoAmIMobile/></Carousel.Item>
                    <Carousel.Item><InterestsBox/></Carousel.Item>
                    <Carousel.Item><WorksBox/></Carousel.Item>
                </Carousel>
                <Row>
                    <Col className="d-flex justify-content-end align-items-center">
                        <ArrowLeftCircleFill className={"carousel-arrow" + (index === 0 ? " grayed-out" : "")}
                                             onClick={() => handleArrowSelect(true)}/>
                    </Col>
                    <Col className="d-flex align-items-center">
                        <ArrowRightCircleFill
                            className={"carousel-arrow" + (index === maxSlide - 1 ? " grayed-out" : "")}
                            onClick={() => handleArrowSelect(false)}/>
                    </Col>
                </Row>
            </div>

            <AcrossTheWeb/>

            <Projects/>
        </div>
    );
}

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

function WorksBox() {
    const {t} = useTranslation();
    const [ref, inView] = useInView({threshold: 0.2, triggerOnce: true});
    const isMobile = useMediaQuery({maxWidth: 767});

    return (
        <Col md={{span: 4, offset: 2}} ref={ref}
             className={"border-line-around-animation " + (inView ? "started" : "") + (isMobile ? " carousel-content" : "")}>
            <h3 className="text-center">{t("works.title")}</h3>
            <span className="d-flex justify-content-center"><HourglassSplit
                className={"waiting-icon " + (inView ? "animate" : "no-animate")}/></span>
            <p>{t("works.description.1")}</p>
            <p><Trans i18nKey="works.description.2">Su <a href="https://github.com/alessiomason"
                                                          className="text-decorate-link">GitHub</a> trovi alcuni dei
                miei progetti
                e anche il <a href="https://github.com/alessiomason/personal-website"
                              className="text-decorate-link">repository</a> di questo stesso sito.</Trans></p>
        </Col>
    );
}

function AcrossTheWeb() {
    const {t} = useTranslation();
    const [ref, inView] = useInView({threshold: 1, triggerOnce: true});
    const isMobile = useMediaQuery({maxWidth: 767});

    return (
        <div ref={ref} className={"mt-5 flicker-animation " + (inView || isMobile ? "animate" : "no-animate")}>
            <h3>{t("across-the-spider-verse")}</h3>
            <div className="d-flex align-items-center"><Github className="web-icon"/><a
                href="https://github.com/alessiomason">@alessiomason</a></div>
            <div className="d-flex align-items-center"><Threads className="web-icon"/><a
                href="https://threads.net/mason_alessio">@mason_alessio</a></div>
            <div className="d-flex align-items-center"><Mastodon className="web-icon"/><a
                href="https://mastodon.social/@alemason">@alemason@mastodon.social</a></div>
        </div>
    );
}

export {SecondHomeSlideDesktop, SecondHomeSlideMobile};