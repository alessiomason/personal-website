import { Row, Col } from 'react-bootstrap';
import ReactPageScroller from 'react-page-scroller';
import { ArrowDownSquare, ArrowDownCircle, ArrowDown } from 'react-bootstrap-icons';
import './Global.css';
import './Home.css';
import ProfilePicture from './images/profile_picture.jpeg';

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

      <ArrowDown className='arrow-down' />
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