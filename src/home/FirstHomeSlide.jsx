import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ArrowDown } from 'react-bootstrap-icons';
import { useMediaQuery } from 'react-responsive';
import ProfilePicture from '../images/profile_picture.jpeg';
import './FirstHomeSlide.css';
const dayjs = require('dayjs');

function FirstHomeSlide() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

	return (
	  <div className='d-flex flex-column justify-content-center full-screen-slide first-home-slide'>
		<Row className='d-flex align-items-center'>
		  <Col md={3} className={'d-flex ' + (isMobile ? 'justify-content-center' : 'justify-content-end')}>
			<img src={ProfilePicture} className='profile-picture' alt='profile-picture' />
		  </Col>
		  <Col>
			<Row><h1 className={'primary-yellow ' + (isMobile ? 'text-center' : '')}>Ciao! <span className='waving-hand'>👋</span></h1></Row>
			<Row><h4 className={'primary-yellow ' + (isMobile ? 'text-center' : '')}>Mi chiamo Alessio Mason e sono un ingegnere informatico.</h4></Row>
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

  export default FirstHomeSlide;