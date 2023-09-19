import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactPageScroller from 'react-page-scroller';
import { ArrowDown, Github, Mastodon } from 'react-bootstrap-icons';
import { useInView } from 'react-intersection-observer';
import './Global.css';
import './Home.css';
import ProfilePicture from './images/profile_picture.jpeg';
const dayjs = require('dayjs');

function Home() {
  return (
    <ReactPageScroller>
      <FirstHomeSlide />
      <SecondHomeSlide />
    </ReactPageScroller>
  );
}

function FirstHomeSlide() {
  return (
    <div className='d-flex flex-column justify-content-center full-screen-slide first-home-slide'>
      <Row className='d-flex align-items-center'>
        <Col md={3} className='d-flex justify-content-end'>
          <img src={ProfilePicture} className='profile-picture' alt='profile-picture' />
        </Col>
        <Col>
          <Row><h1 className='primary-yellow'>Ciao! <span className='waving-hand'>👋</span></h1></Row>
          <Row><h4 className='primary-yellow'>Mi chiamo Alessio Mason e sono un ingegnere informatico.</h4></Row>
        </Col>
      </Row>

      <PieceOfCode />

      <ArrowDown className='arrow-down' />
    </div>
  );
}

function PieceOfCode() {
  const [dirty, setDirty] = useState(false);
  const [time, setTime] = useState(dayjs().format());
  const [spinner, setSpinner] = useState('|');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDirty(true);
    }, 100)

    return () => clearInterval(intervalId);
  }, [])

  useEffect(() => {
    if (dirty) {
      setTime(dayjs().format());

      setSpinner(currentSpinner => {
        switch (currentSpinner) {
          case '|':
            return '/';
          case '/':
            return '-';
          case '-':
            return '\\';
          case '\\':
          default:
            return '|';
        }
      })

      setDirty(false);
    }
  }, [dirty])

  return (
    <div className='code'>
      <p className='text-end no-padding primary-yellow'>const dayjs = require('dayjs');</p>
      <p className='text-end no-padding primary-yellow'>console.log(dayjs().format())</p>
      <p className='text-end no-padding primary-yellow'>{spinner} {time}</p>
    </div>
  );
}

function SecondHomeSlide() {
  const [ref, inView] = useInView({ threshold: 1, triggerOnce: true });

  return (
    <div className='d-flex flex-column justify-content-between full-screen-slide second-home-slide primary-yellow'>
      <div>
        <h1>Chi sono</h1>
        <div className='justify-text'>Ho studiato Ingegneria informatica presso il Politecnico di Torino.</div>
        <div className='justify-text'>Nel tempo ho realizzato diverse applicazioni web e mobile:
          su questo sito troverai presto alcuni dei miei lavori e progetti personali.</div>
      </div>

      <Row>
        <Col sm={{span: 4, offset: 1}}>
          <h3 className='text-center'>Ambiti (line around)</h3>
        </Col>

        <Col sm={{span: 4, offset: 2}}>
          <h3 className='text-center'>Lavori (line around)</h3>
        </Col>
      </Row>

      <div ref={ref} className={inView ? 'flicker-animation' : 'transparent'}>
        <h3>In giro per il web</h3>
        <div className='d-flex align-items-center'><Github /><a href='https://github.com/alessiomason'>@alessiomason</a></div>
        <div className='d-flex align-items-center'><Mastodon /><a href='https://livellosegreto.it/@alemason'>@alemason@livellosegreto.it</a></div>
      </div>
    </div>
  );
}

export default Home;