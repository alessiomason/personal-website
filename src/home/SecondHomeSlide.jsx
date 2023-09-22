import { Row, Col, Carousel } from 'react-bootstrap';
import {
  Laptop, Phone, FiletypeJsx, Server, FiletypePhp, Apple, Android,
  ListColumns, FiletypeJava, JournalCode, Database, Ethernet, ShieldCheck, HourglassSplit, Github, Mastodon
} from 'react-bootstrap-icons';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';
import './SecondHomeSlide.css';

function SecondHomeSlideDesktop() {
  const [ref, inView] = useInView({ threshold: 1, triggerOnce: true });

  return (
    <div className='d-flex flex-column justify-content-between full-screen-slide second-home-slide primary-yellow'>
      <WhoAmIDesktop />

      <Row>
        <InterestsBox inView={inView} />
        <WorksBox inView={inView} />
      </Row>

      <AcrossTheWeb reference={ref} inView={inView} />
    </div>
  );
}

function SecondHomeSlideMobile() {
  const [ref, inView] = useInView({ threshold: 1, triggerOnce: true });

  return (
    <div className='d-flex flex-column justify-content-between full-screen-slide second-home-slide primary-yellow'>
      <>Padding element</>
      <Carousel interval={null} wrap={false} indicators={false}>
        <Carousel.Item><InterestsBox inView={inView} /></Carousel.Item>
        <Carousel.Item><WorksBox inView={inView} /></Carousel.Item>
      </Carousel>

      <AcrossTheWeb reference={ref} inView={inView} />
    </div>
  );
}

function WhoAmIDesktop() {
  return (
    <div>
      <h1>Chi sono</h1>
      <div className='justify-text'>Ho studiato Ingegneria informatica presso il Politecnico di Torino.</div>
      <div className='justify-text'>Nel tempo ho realizzato diverse applicazioni web e mobile:
        su questo sito troverai presto alcuni dei miei lavori e progetti personali.</div>
    </div>
  );
}

function InterestsBox(props) {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Col sm={{ span: 4, offset: (isMobile ? 0 : 1) }} className={'border-line-around-animation ' + (props.inView ? 'animate' : 'no-animate') + (isMobile ? ' carousel-content' : '')}>
      <h3 className='text-center'>Interessi e competenze</h3>
      <ul className='first-ul'>
        <li className='first-li'><span className='d-flex align-items-center'><Laptop className='list-icon' />Applicazioni web</span>
          <ul>
            <li><span className='d-flex align-items-center'><FiletypeJsx className='list-icon' />Front-end: React</span></li>
            <li><span className='d-flex align-items-center'><Server className='list-icon' />Back-end: Express o Spring</span></li>
            <li><span className='d-flex align-items-center'><FiletypePhp className='list-icon' />Programmazione web tradizionale</span></li>
          </ul>
        </li>

        <li className='first-li'><span className='d-flex align-items-center'><Phone className='list-icon' />Applicazioni mobile</span>
          <ul>
            <li><span className='d-flex align-items-center'><Apple className='list-icon' />Applicazioni iOS (Swift, SwiftUI)</span></li>
            <li><span className='d-flex align-items-center'><Android className='list-icon' />Android (Kotlin, view-based o Jetpack Compose)</span></li>
          </ul>
        </li>

        <li className='first-li'><span className='d-flex align-items-center'><ListColumns className='list-icon' />Programmazione di sistema e algoritmi</span>
          <ul>
            <li><span className='d-flex align-items-center'><FiletypeJava className='list-icon' />C, C++, Rust, Java, Bash, assembler ARM e MIPS</span></li>
          </ul>
        </li>

        <li className='first-li'><span className='d-flex align-items-center'><JournalCode className='list-icon' />Altri ambiti informatici</span>
          <ul>
            <li><span className='d-flex align-items-center'><Database className='list-icon' />Database relazionali e non relazionali</span></li>
            <li><span className='d-flex align-items-center'><Ethernet className='list-icon' />Configurazione e analisi di reti</span></li>
            <li><span className='d-flex align-items-center'><ShieldCheck className='list-icon' />Sicurezza informatica</span></li>
          </ul>
        </li>
      </ul>
    </Col>
  );
}

function WorksBox(props) {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Col sm={{ span: 4, offset: (isMobile ? 0 : 2) }} className={'border-line-around-animation ' + (props.inView ? 'animate' : 'no-animate') + (isMobile ? ' carousel-content' : '')}>
      <h3 className='text-center'>Lavori e progetti</h3>
      <span className='d-flex justify-content-center'><HourglassSplit className={'waiting-icon ' + (props.inView ? 'animate' : 'no-animate')} /></span>
      <p>Il sito è ancora parzialmente in costruzione: troverai presto alcuni dei miei lavori e progetti personali in una pagina dedicata.</p>
      <p>Su <a href='https://github.com/alessiomason' className='text-decorate-link'>GitHub</a> trovi alcuni dei miei progetti e (presto) anche il repository di questo stesso sito.</p>
    </Col>
  );
}

function AcrossTheWeb(props) {
  return (
    <div ref={props.reference} className={'flicker-animation ' + (props.inView ? 'animate' : 'no-animate')}>
      <h3>In giro per il web (Across the Spider-Verse)</h3>
      <div className='d-flex align-items-center'><Github className='web-icon' /><a href='https://github.com/alessiomason'>@alessiomason</a></div>
      <div className='d-flex align-items-center'><Mastodon className='web-icon' /><a href='https://livellosegreto.it/@alemason'>@alemason@livellosegreto.it</a></div>
    </div>
  );
}

export { SecondHomeSlideDesktop, SecondHomeSlideMobile };