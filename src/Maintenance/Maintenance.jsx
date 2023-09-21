import Klink from '../images/klink.png';
import './Maintenance.css';
import '../Global.css';

function Maintenance() {
  return (
    <div className='d-flex flex-column justify-content-center full-screen-slide maintenance-page'>
      <div className='d-flex center-row no-padding'>
        <img src={Klink} className='klink' alt='loading' />
      </div>

      <div>
        <h2 className='text-center primary-yellow'>Alessio Mason</h2>
      </div>

      <div>
        <h4 className='text-center primary-yellow'>This website is currently under construction. Check back later!</h4>
      </div>
    </div>
  );
}

export default Maintenance;