import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactPageScroller from 'react-page-scroller';
import { ArrowDown } from 'react-bootstrap-icons';
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
    setInterval(() => {
      setDirty(true);
    }, 100)
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
      <p className='text-end no-padding primary-yellow'>dayjs().format()</p>
      <p className='text-end no-padding primary-yellow'>{spinner} {time}</p>
    </div>
  );
}

function SecondHomeSlide() {
  return (
    <div className='d-flex flex-column justify-content-center full-screen-slide second-home-slide'>

    </div>
  );
}

export default Home;