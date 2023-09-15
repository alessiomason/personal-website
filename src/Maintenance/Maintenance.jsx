import Klink from '../images/Klink.png';
import './Maintenance.css';
import '../Global.css';

function Maintenance() {
  return (
    <div className="d-flex flex-column justify-content-center full-screen">
      <div className="d-flex center-row no-padding">
        <img src={Klink} className="klink" alt="loading" />
      </div>

      <div>
        <h2 className="text-center">Alessio Mason</h2>
      </div>

      <div>
        <h4 className="text-center">This website is currently under maintenance. Check back later!</h4>
      </div>
    </div>
  )
}

export default Maintenance;