import {useState} from 'react';
import {Row, Col, Carousel} from 'react-bootstrap';
import {
    Laptop, Phone, FiletypeJsx, Server, FiletypePhp, Apple, Android,
    ListColumns, FiletypeJava, JournalCode, Database, Ethernet, ShieldCheck, HourglassSplit, Github, Mastodon
} from 'react-bootstrap-icons';
import {Threads} from '../new-bootstrap-icons/Threads';
import {useInView} from 'react-intersection-observer';
import {useMediaQuery} from 'react-responsive';
import {ArrowLeftCircleFill, ArrowRightCircleFill} from 'react-bootstrap-icons';
import './SecondHomeSlide.css';

function SecondHomeSlideDesktop() {
    const [ref, inView] = useInView({threshold: 1, triggerOnce: true});

    return (
        <div className='d-flex flex-column justify-content-between full-screen-slide second-home-slide primary-yellow'>
            <WhoAmIDesktop/>

            <Row>
                <InterestsBox inView={inView}/>
                <WorksBox inView={inView}/>
            </Row>

            <AcrossTheWeb reference={ref} inView={inView}/>
        </div>
    );
}

function SecondHomeSlideMobile() {
    const maxSlide = 3;
    const [index, setIndex] = useState(0);

    function handleSelect(selectedIndex) {
        setIndex(selectedIndex);
    }

    function handleArrowSelect(prevSlide) {
        if (prevSlide) {
            setIndex(prevIndex => ((prevIndex - 1 >= 0) ? prevIndex - 1 : 0));
        } else {
            setIndex(prevIndex => ((prevIndex + 1 < maxSlide) ? prevIndex + 1 : maxSlide));
        }
    }

    return (
        <div className='d-flex flex-column justify-content-between full-screen-slide second-home-slide primary-yellow'>
            <>&nbsp;</>
            <div>
                <Carousel activeIndex={index} onSelect={handleSelect} interval={null} wrap={false} indicators={false}
                          controls={false}>
                    <Carousel.Item><WhoAmIMobile/></Carousel.Item>
                    <Carousel.Item><InterestsBox/></Carousel.Item>
                    <Carousel.Item><WorksBox/></Carousel.Item>
                </Carousel>
                <Row>
                    <Col className='d-flex justify-content-end align-items-center'>
                        <ArrowLeftCircleFill className={'carousel-arrow' + (index === 0 ? ' grayed-out' : '')}
                                             onClick={() => handleArrowSelect(true)}/>
                    </Col>
                    <Col className='d-flex align-items-center'>
                        <ArrowRightCircleFill
                            className={'carousel-arrow' + (index === maxSlide - 1 ? ' grayed-out' : '')}
                            onClick={() => handleArrowSelect(false)}/>
                    </Col>
                </Row>
            </div>

            <AcrossTheWeb/>
        </div>
    );
}

function WhoAmIDesktop() {
    return (
        <div>
            <h1>Chi sono</h1>
            <div className='justify-text'>Ho studiato Ingegneria informatica presso il Politecnico di Torino.</div>
            <div className='justify-text'>Nel tempo ho realizzato diverse applicazioni web e mobile:
                su questo sito troverai presto alcuni dei miei lavori e progetti personali.
            </div>
        </div>
    );
}

function WhoAmIMobile() {
    const [ref, inView] = useInView({threshold: 0.2, triggerOnce: true});
    const isMobile = useMediaQuery({maxWidth: 767});

    return (
        <Col md={{span: 4, offset: 1}} ref={ref}
             className={'border-line-around-animation ' + (inView ? 'started' : '') + (isMobile ? ' carousel-content' : '')}>
            <h1>Chi sono</h1>
            <p>Ho studiato Ingegneria informatica presso il Politecnico di Torino.</p>
            <p>Nel tempo ho realizzato diverse applicazioni web e mobile:
                su questo sito troverai presto alcuni dei miei lavori e progetti personali.</p>
            <p>Scorri i riquadri per saperne di più!</p>

        </Col>
    );
}

function InterestsBox() {
    const [ref, inView] = useInView({threshold: 0.2, triggerOnce: true});
    const isMobile = useMediaQuery({maxWidth: 767});

    return (
        <Col md={{span: 4, offset: 1}} ref={ref}
             className={'border-line-around-animation ' + (inView ? 'started' : '') + (isMobile ? ' carousel-content' : '')}>
            <h3 className='text-center'>Interessi e competenze</h3>
            <ul className='first-ul'>
                <li className='first-li'><span className='d-flex align-items-center'><Laptop className='list-icon'/>Applicazioni web</span>
                    <ul>
                        <li><span className='d-flex align-items-center'><FiletypeJsx className='list-icon'/>Front-end: React</span>
                        </li>
                        <li><span className='d-flex align-items-center'><Server className='list-icon'/>Back-end: Express o Spring</span>
                        </li>
                        <li><span className='d-flex align-items-center'><FiletypePhp className='list-icon'/>Programmazione web tradizionale</span>
                        </li>
                    </ul>
                </li>

                <li className='first-li'><span className='d-flex align-items-center'><Phone className='list-icon'/>Applicazioni mobile</span>
                    <ul>
                        <li><span className='d-flex align-items-center'><Apple className='list-icon'/>iOS (Swift, SwiftUI)</span>
                        </li>
                        <li><span className='d-flex align-items-center'><Android className='list-icon'/>Android (Kotlin, view-based o Jetpack Compose)</span>
                        </li>
                    </ul>
                </li>

                <li className='first-li'><span className='d-flex align-items-center'><ListColumns
                    className='list-icon'/>Programmazione di sistema e algoritmi</span>
                    <ul>
                        <li><span className='d-flex align-items-center'><FiletypeJava className='list-icon'/>C, C++, Rust, Java, Bash, assembler ARM e MIPS</span>
                        </li>
                    </ul>
                </li>

                <li className='first-li'><span className='d-flex align-items-center'><JournalCode
                    className='list-icon'/>Altri ambiti informatici</span>
                    <ul>
                        <li><span className='d-flex align-items-center'><Database className='list-icon'/>Database relazionali e non relazionali</span>
                        </li>
                        <li><span className='d-flex align-items-center'><Ethernet className='list-icon'/>Configurazione e analisi di reti</span>
                        </li>
                        <li><span className='d-flex align-items-center'><ShieldCheck className='list-icon'/>Sicurezza informatica</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </Col>
    );
}

function WorksBox() {
    const [ref, inView] = useInView({threshold: 0.2, triggerOnce: true});
    const isMobile = useMediaQuery({maxWidth: 767});

    return (
        <Col md={{span: 4, offset: 2}} ref={ref}
             className={'border-line-around-animation ' + (inView ? 'started' : '') + (isMobile ? ' carousel-content' : '')}>
            <h3 className='text-center'>Lavori e progetti</h3>
            <span className='d-flex justify-content-center'><HourglassSplit
                className={'waiting-icon ' + (inView ? 'animate' : 'no-animate')}/></span>
            <p>Il sito è ancora parzialmente in costruzione: troverai presto alcuni dei miei lavori e progetti personali
                in una pagina dedicata.</p>
            <p>Su <a href='https://github.com/alessiomason' className='text-decorate-link'>GitHub</a> trovi alcuni dei
                miei progetti
                e anche il <a href='https://github.com/alessiomason/personal-website'
                              className='text-decorate-link'>repository</a> di questo stesso sito.</p>
        </Col>
    );
}

function AcrossTheWeb() {
    const [ref, inView] = useInView({threshold: 1, triggerOnce: true});
    const isMobile = useMediaQuery({maxWidth: 767});

    return (
        <div ref={ref} className={'flicker-animation ' + (inView || isMobile ? 'animate' : 'no-animate')}>
            <h3>In giro per il web{/*Across the Spider-Verse (find me on the web)*/}</h3>
            <div className='d-flex align-items-center'><Github className='web-icon'/><a
                href='https://github.com/alessiomason'>@alessiomason</a></div>
            <div className='d-flex align-items-center'><Threads className='web-icon'/><a
                href='https://threads.net/mason_alessio'>@mason_alessio</a></div>
            <div className='d-flex align-items-center'><Mastodon className='web-icon'/><a
                href='https://mastodon.social/@alemason'>@alemason@mastodon.social</a></div>
        </div>
    );
}

export {SecondHomeSlideDesktop, SecondHomeSlideMobile};